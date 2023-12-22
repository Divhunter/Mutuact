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
exports.AuthRepository = void 0;
const prisma_service_1 = require("../prisma.service");
const common_1 = require("@nestjs/common");
let AuthRepository = class AuthRepository {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async resetPassword(email, resetPasswordDto) {
        const userUpdated = await this.prismaService.user.update({
            where: {
                email: email
            },
            data: resetPasswordDto
        });
        return userUpdated;
    }
    async createUser(userDto) {
        const newUser = await this.prismaService.user.create({
            data: userDto
        });
        return newUser;
    }
    async deleteUserById(userId) {
        await this.prismaService.verificationToken.deleteMany({
            where: {
                userId: userId
            }
        });
        await this.prismaService.account.deleteMany({
            where: {
                userId: userId
            }
        });
        await this.prismaService.session.deleteMany({
            where: {
                userId: userId
            }
        });
        const user = await this.prismaService.user.delete({
            where: { id: userId }
        });
        return user;
    }
    async createVerificationTokenForUser(userVerificationDto) {
        const newVerificationToken = await this.prismaService.verificationToken.create({
            data: userVerificationDto
        });
        return newVerificationToken;
    }
    async findUserByEmail(email) {
        const user = await this.prismaService.user.findUnique({
            where: { email }
        });
        return user;
    }
    async findUserById(userId) {
        const user = await this.prismaService.user.findUnique({
            where: {
                id: userId
            }
        });
        return user;
    }
    async findVerificationTokenById(tokenId) {
        const tokenVerification = await this.prismaService.verificationToken.findUnique({
            where: {
                id: tokenId
            }
        });
        return tokenVerification;
    }
    async findVerificationTokenByToken(token) {
        const tokenVerification = await this.prismaService.verificationToken.findUnique({
            where: {
                token: token
            }
        });
        return tokenVerification;
    }
    async updateVerificationTokenExpiration(tokenId) {
        const verificationTokenUpdated = await this.prismaService.verificationToken.update({
            where: {
                id: tokenId
            },
            data: { isUsed: true, expiresAt: new Date().toISOString() }
        });
        return verificationTokenUpdated;
    }
    async updateUserConfirmationStatus(userId, userUpdateConfirmDto) {
        const user = await this.prismaService.user.update({
            where: {
                id: userId
            },
            data: userUpdateConfirmDto
        });
        return user;
    }
};
exports.AuthRepository = AuthRepository;
exports.AuthRepository = AuthRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AuthRepository);
//# sourceMappingURL=auth.repositor.js.map