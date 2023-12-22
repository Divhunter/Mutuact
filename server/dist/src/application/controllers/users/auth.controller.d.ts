import { ConfirmUserDto, EmailDto, userIdDto } from "src/domain/dtos/users/auth.dto";
import { CreateUserDto } from "src/domain/dtos/users/create.user.dto";
import { LoginDto } from "src/domain/dtos/users/login.dto";
import { ResetPasswordConfirmDto, ResetPasswordDemandeDto } from "src/domain/dtos/users/resetPassword.dto";
import { AuthService } from "src/domain/services/ussers/auth.service";
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    create(createUserDto: CreateUserDto): Promise<{
        success: boolean;
        message: string;
        data: import("../../../domain/models/users/user.model").UserModel;
        error?: undefined;
    } | {
        success: boolean;
        message: string;
        error: any;
        data?: undefined;
    }>;
    confirmUser(confirmUserDto: ConfirmUserDto): Promise<{
        success: boolean;
        message: string;
        error?: undefined;
    } | {
        success: boolean;
        message: string;
        error: any;
    }>;
    resendMailConfirmUser(emailDto: EmailDto): Promise<{
        success: boolean;
        message: string;
        error?: undefined;
    } | {
        success: boolean;
        message: string;
        error: any;
    }>;
    sendCodeResetPassword(demandeResetPasswordDto: ResetPasswordDemandeDto): Promise<{
        success: boolean;
        message: string;
        error?: undefined;
    } | {
        success: boolean;
        message: string;
        error: any;
    }>;
    ResetPassword(resetPasswordConfirmDto: ResetPasswordConfirmDto): Promise<{
        success: boolean;
        message: string;
        error?: undefined;
    } | {
        success: boolean;
        message: string;
        error: any;
    }>;
    login(loginDto: LoginDto, req: any): Promise<{
        access_token: string;
        user: any;
    }>;
    getProfile(req: any): any;
    deleteProfile(userIDdto: userIdDto): Promise<any>;
}
