"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const auth_dto_1 = require("../../dtos/users/auth.dto");
const common_2 = require("@nestjs/common");
const bcrypt = require("bcryptjs");
const config_1 = require("@nestjs/config");
const mail_service_1 = require("../../../communs/utils/mail.service");
const auth_repositor_1 = require("../../../infrastructure/persistence/prisma/repositorys/auth.repositor");
const token_service_1 = require("../../../communs/utils/token.service");
const jwt_1 = require("@nestjs/jwt");
const speakeasy = require("speakeasy");
let AuthService = class AuthService {
    constructor(authRepository, mailService, tokenService, jwtService, config) {
        this.authRepository = authRepository;
        this.mailService = mailService;
        this.tokenService = tokenService;
        this.jwtService = jwtService;
        this.config = config;
    }
    async resetPasswordConfirm(confirmDto) {
        const { email, password, code } = confirmDto;
        const secretKey = this.config.get('OTP_CODE_SECRET');
        const expireOtp = this.config.get('OTP_CODE_EXPIRE');
        const user = await this.findUserByEmail(email);
        if (!user)
            throw new common_2.NotFoundException("User not found!");
        const match = speakeasy.totp.verify({
            secret: secretKey,
            digits: 5,
            step: 60 * expireOtp,
            encoding: "base64",
            token: code
        });
        if (!match)
            throw new common_2.UnauthorizedException("Invalid/Expire code");
        const passwordHash = await bcrypt.hash(password, 10);
        const resetPasswordDto = {
            password: passwordHash
        };
        const userPasswordUpdated = await this.authRepository.resetPassword(email, resetPasswordDto);
        return userPasswordUpdated;
    }
    async resetPasswordDemande(demandeDto) {
        const { email } = demandeDto;
        const secretKey = this.config.get('OTP_CODE_SECRET');
        const expireOtp = this.config.get('OTP_CODE_EXPIRE');
        const user = await this.findUserByEmail(email);
        if (!user)
            throw new common_2.NotFoundException("User not found!");
        const code = speakeasy.totp({
            secret: secretKey,
            digits: 5,
            step: 60 * expireOtp,
            encoding: "base64"
        });
        await this.mailService.sendCodeResetPassword(email, user.name, code);
    }
    async login(user) {
        const secretKey = this.config.get('JWT_SECRET_KEY');
        const expireToken = this.config.get('JWT_SECRET_EXPIRE');
        const payload = { email: user.email, sub: user.id };
        try {
            const access_token = this.jwtService.sign(payload, { secret: secretKey, expiresIn: expireToken });
            return access_token;
        }
        catch (error) {
            console.error("error creating token login:", error);
            throw new common_1.InternalServerErrorException(error.message);
        }
    }
    async createUser(createUserDdo) {
        const existingUser = await this.isUserExist(createUserDdo.email);
        if (existingUser) {
            throw new common_2.ConflictException('User already exist.');
        }
        else {
            try {
                const hashedPassword = await bcrypt.hash(createUserDdo.password, 10);
                createUserDdo.password = hashedPassword;
                const userCreated = await this.authRepository.createUser(createUserDdo);
                const verificationTokenCreated = await this.createVerificationToken(userCreated, auth_dto_1.VerificationTokenTypeDto.initial_verification);
                const emailSended = await this.sendVerificationEmail(userCreated.email, userCreated.name, verificationTokenCreated.token);
                if (!emailSended) {
                    console.log("error to send mail");
                }
                Reflect.deleteProperty(userCreated, "password");
                return userCreated;
            }
            catch (error) {
                console.error(error);
                throw new Error(`Error creating User `);
            }
        }
    }
    async deleteUserById(userId) {
        const user = await this.authRepository.findUserById(userId);
        if (!user)
            throw new common_2.NotFoundException("User not found");
        const userDeleted = await this.authRepository.deleteUserById(userId);
        Reflect.deleteProperty(userDeleted, "password");
        return userDeleted;
    }
    async resendVerifyTokenConfirmUser(email) {
        try {
            const user = await this.findUserByEmail(email);
            if (!user) {
                throw new common_2.NotFoundException('No user found with this email');
            }
            if (user.emailVerified) {
                throw new common_2.ConflictException('Email deja verifié! veillez vous connecter');
            }
            const verificationTokenCreated = await this.createVerificationToken(user, auth_dto_1.VerificationTokenTypeDto.resend_email_verification);
            const emailSended = await this.sendVerificationEmail(user.email, user.name, verificationTokenCreated.token);
            if (!emailSended) {
                console.log("error to send mail");
            }
            return user;
        }
        catch (error) {
            throw new common_2.BadRequestException('Error to resend mailVerification.');
        }
    }
    async verifyTokenConfirmUser(token) {
        const secretKey = this.config.get('EMAIL_VERIFICATION_SECRET');
        try {
            const tokenDecoded = await this.tokenService.verifyToken(token, secretKey);
            if (tokenDecoded.userId) {
                const userToVerify = await this.findUserById(tokenDecoded.userId);
                if (userToVerify?.emailVerified) {
                    throw new common_1.HttpException('Email déjà vérifié', common_1.HttpStatus.BAD_REQUEST);
                }
            }
            const verificationToken = await this.findVerificationTokenByToken(token);
            if (!verificationToken) {
                console.error('Token not found or expired');
                throw new common_2.BadRequestException('Token not found or expired');
            }
            const storedToken = verificationToken.token;
            if (verificationToken.isUsed) {
                console.error('token already used');
                throw new Error('token already used');
            }
            if (token !== storedToken) {
                console.error('Token no Mach of in stored in server');
                throw new common_2.BadRequestException('Token no Mach of in stored in server');
            }
            const user = await this.authRepository.findUserById(verificationToken.userId);
            if (!user) {
                console.error('User not found');
                throw new common_2.NotFoundException('User of this token not found');
            }
            await this.updateVerificationTokenExpiration(verificationToken.id);
            const userUpdateConfirmDto = {
                emailVerified: true,
                emailVerifiedDate: new Date()
            };
            const userConfirmed = await this.updateUserConfirmationStatus(user.id, userUpdateConfirmDto);
            return userConfirmed;
        }
        catch (error) {
            throw new common_2.BadRequestException(`${error.message}`);
        }
    }
    async createVerificationTokenForUser(userVerificationDto) {
        try {
            return await this.authRepository.createVerificationTokenForUser(userVerificationDto);
        }
        catch (error) {
            throw new common_2.BadRequestException('Erreur to create Verification token');
        }
    }
    async findUserByEmail(email) {
        try {
            return await this.authRepository.findUserByEmail(email);
        }
        catch (error) {
            throw new common_2.BadRequestException('Error to fetch User.');
        }
    }
    async findUserById(userId) {
        try {
            return await this.authRepository.findUserById(userId);
        }
        catch (error) {
            console.error(error);
            throw new common_2.BadRequestException("Erreur lors de la recuperation de l'user");
        }
    }
    async findVerificationTokenById(tokenId) {
        try {
            return await this.authRepository.findVerificationTokenById(tokenId);
        }
        catch (error) {
            console.error(error);
            throw new common_2.BadRequestException("Erreur lors de la recuperation de l'user");
        }
    }
    async findVerificationTokenByToken(token) {
        try {
            return await this.authRepository.findVerificationTokenByToken(token);
        }
        catch (error) {
            console.error(error);
            throw new common_2.BadRequestException("Erreur lors de la recuperation de l'user");
        }
    }
    async updateVerificationTokenExpiration(tokenId) {
        try {
            return await this.authRepository.updateVerificationTokenExpiration(tokenId);
        }
        catch (error) {
            console.error(error);
            throw new common_2.BadRequestException("Erreur lors de la recuperation de l'user");
        }
    }
    async updateUserConfirmationStatus(userId, userUpdateConfirmDto) {
        try {
            return await this.authRepository.updateUserConfirmationStatus(userId, userUpdateConfirmDto);
        }
        catch (error) {
            console.error(error);
            throw new common_2.BadRequestException("Erreur lors de la recuperation de l'user");
        }
    }
    async isUserExist(email) {
        const existingUser = await this.findUserByEmail(email);
        return existingUser ? true : false;
    }
    async sendVerificationEmail(email, name, token, retries = 3) {
        try {
            await this.mailService.sendRegisterConfirmation(email, name, token);
            return true;
        }
        catch (error) {
            if (retries > 0) {
                return await this.sendVerificationEmail(email, name, token, retries - 1);
            }
            else {
                console.error(error);
                throw new common_2.BadRequestException('Failed to send verification email after multiple attempts');
            }
        }
    }
    async generateToken(userId, email, secretKey, expiresIn) {
        const payload = {
            sub: userId,
            email: email,
        };
        const token = this.jwtService.sign(payload, {
            expiresIn: expiresIn, secret: secretKey
        });
        return token;
    }
    ;
    async createVerificationToken(user, tokenType) {
        const secretKey = this.config.get('EMAIL_VERIFICATION_SECRET');
        let verificationToken = "";
        if (typeof secretKey === 'string') {
            verificationToken = await this.generateToken(user.id, user.email, secretKey, '7h');
        }
        else {
            console.error('La clé secrète n\'est pas définie ou n\'est pas une chaîne de caractères valide');
        }
        const newVerificationDto = {
            userId: user.id,
            token: verificationToken,
            isUsed: false,
            createdAt: new Date().toISOString(),
            expiresAt: new Date(Date.now() + 7 * 60 * 60 * 1000).toISOString(),
            type: tokenType
        };
        const verificationTokenCreated = await this.createVerificationTokenForUser(newVerificationDto);
        return verificationTokenCreated;
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [auth_repositor_1.AuthRepository,
        mail_service_1.MailService,
        token_service_1.TokenService,
        jwt_1.JwtService,
        config_1.ConfigService])
], AuthService);
//# sourceMappingURL=auth.service.js.map