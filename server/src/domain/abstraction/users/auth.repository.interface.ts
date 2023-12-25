import { UserUpdateConfirmDto } from "../../dtos/users/auth.dto";
import { CreateUserDto } from "../../dtos/users/create.user.dto";
import { ResetPasswordDto } from "../../dtos/users/resetPassword.dto";
import { UserVerificationDto } from "../../dtos/users/user.verification.dto";
import { UserModel } from "../../models/users/user.model";
import { VerificationTokenModel } from "../../models/users/verificationToken.model";

export interface IAuthRepository {
  createUser(userDto: CreateUserDto): Promise<UserModel>;
  deleteUserById(userId: string): Promise<boolean | any>;
  resetPassword(email: string, resetPasswordDto: ResetPasswordDto): Promise<UserModel>;
  createVerificationTokenForUser(userVerificationDto: UserVerificationDto): Promise<VerificationTokenModel>;
  findUserByEmail(email: string): Promise<UserModel | null>;
  findUserById(userId: string): Promise<UserModel | null>;
  findVerificationTokenById(tokenId: string): Promise<VerificationTokenModel | null>;
  findVerificationTokenByToken(token: string): Promise<VerificationTokenModel | null>;
  updateVerificationTokenExpiration(tokenId: string): Promise<VerificationTokenModel>;
  updateUserConfirmationStatus(userId: string, userUpdateConfirmDto: UserUpdateConfirmDto): Promise<UserModel | null>;
}
