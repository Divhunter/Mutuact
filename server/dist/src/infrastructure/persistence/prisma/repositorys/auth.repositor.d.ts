import { IAuthRepository } from "src/domain/abstraction/users/auth.repository.interface";
import { PrismaService } from "../prisma.service";
import { UserUpdateConfirmDto } from "src/domain/dtos/users/auth.dto";
import { CreateUserDto } from "src/domain/dtos/users/create.user.dto";
import { UserVerificationDto } from "src/domain/dtos/users/user.verification.dto";
import { UserModel } from "src/domain/models/users/user.model";
import { VerificationTokenModel } from "src/domain/models/users/verificationToken.model";
import { ResetPasswordDto } from "src/domain/dtos/users/resetPassword.dto";
export declare class AuthRepository implements IAuthRepository {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    resetPassword(email: string, resetPasswordDto: ResetPasswordDto): Promise<UserModel>;
    createUser(userDto: CreateUserDto): Promise<UserModel>;
    deleteUserById(userId: string): Promise<any>;
    createVerificationTokenForUser(userVerificationDto: UserVerificationDto): Promise<VerificationTokenModel>;
    findUserByEmail(email: string): Promise<UserModel>;
    findUserById(userId: string): Promise<UserModel>;
    findVerificationTokenById(tokenId: string): Promise<VerificationTokenModel>;
    findVerificationTokenByToken(token: string): Promise<VerificationTokenModel>;
    updateVerificationTokenExpiration(tokenId: string): Promise<VerificationTokenModel>;
    updateUserConfirmationStatus(userId: string, userUpdateConfirmDto: UserUpdateConfirmDto): Promise<UserModel>;
}
