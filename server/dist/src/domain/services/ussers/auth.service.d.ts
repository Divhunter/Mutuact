import { IAuthService } from "src/domain/abstraction/users/auth.service.interface";
import { UserUpdateConfirmDto, VerificationTokenTypeDto } from "src/domain/dtos/users/auth.dto";
import { CreateUserDto } from "src/domain/dtos/users/create.user.dto";
import { UserVerificationDto } from "src/domain/dtos/users/user.verification.dto";
import { UserModel } from "src/domain/models/users/user.model";
import { VerificationTokenModel } from "src/domain/models/users/verificationToken.model";
import { ConfigService } from '@nestjs/config';
import { MailService } from "src/communs/utils/mail.service";
import { AuthRepository } from "src/infrastructure/persistence/prisma/repositorys/auth.repositor";
import { TokenService } from "src/communs/utils/token.service";
import { JwtService } from "@nestjs/jwt";
import { ResetPasswordConfirmDto, ResetPasswordDemandeDto } from "src/domain/dtos/users/resetPassword.dto";
export declare class AuthService implements IAuthService {
    private readonly authRepository;
    private readonly mailService;
    private readonly tokenService;
    private readonly jwtService;
    private config;
    constructor(authRepository: AuthRepository, mailService: MailService, tokenService: TokenService, jwtService: JwtService, config: ConfigService);
    resetPasswordConfirm(confirmDto: ResetPasswordConfirmDto): Promise<any>;
    resetPasswordDemande(demandeDto: ResetPasswordDemandeDto): Promise<any>;
    login(user: UserModel): Promise<string>;
    createUser(createUserDdo: CreateUserDto): Promise<UserModel>;
    deleteUserById(userId: string): Promise<any>;
    resendVerifyTokenConfirmUser(email: string): Promise<UserModel>;
    verifyTokenConfirmUser(token: string): Promise<UserModel | null>;
    createVerificationTokenForUser(userVerificationDto: UserVerificationDto): Promise<VerificationTokenModel>;
    findUserByEmail(email: string): Promise<UserModel>;
    findUserById(userId: string): Promise<UserModel>;
    findVerificationTokenById(tokenId: string): Promise<VerificationTokenModel>;
    findVerificationTokenByToken(token: string): Promise<VerificationTokenModel>;
    updateVerificationTokenExpiration(tokenId: string): Promise<VerificationTokenModel>;
    updateUserConfirmationStatus(userId: string, userUpdateConfirmDto: UserUpdateConfirmDto): Promise<UserModel>;
    isUserExist(email: string): Promise<boolean>;
    sendVerificationEmail(email: string, name: string, token: string, retries?: number): Promise<boolean>;
    generateToken(userId: string, email: string, secretKey: string, expiresIn: string): Promise<string>;
    createVerificationToken(user: UserModel, tokenType: VerificationTokenTypeDto): Promise<VerificationTokenModel>;
}