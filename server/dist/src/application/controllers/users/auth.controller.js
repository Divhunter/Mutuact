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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const auth_dto_1 = require("../../../domain/dtos/users/auth.dto");
const create_user_dto_1 = require("../../../domain/dtos/users/create.user.dto");
const login_dto_1 = require("../../../domain/dtos/users/login.dto");
const resetPassword_dto_1 = require("../../../domain/dtos/users/resetPassword.dto");
const auth_service_1 = require("../../../domain/services/ussers/auth.service");
const jwt_auth_guard_1 = require("../../../domain/services/ussers/strategies/local/jwt-auth.guard");
const local_auth_guard_1 = require("../../../domain/services/ussers/strategies/local/local-auth.guard");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    async create(createUserDto) {
        try {
            const userCreated = await this.authService.createUser(createUserDto);
            return {
                success: true,
                message: "Votre compte a bien été crée avec success! Un mail de confirmation vous a été envoyé",
                data: userCreated,
            };
        }
        catch (error) {
            return { success: false, message: "Error lors de creation de l'user!", error: error.message };
        }
    }
    async confirmUser(confirmUserDto) {
        try {
            await this.authService.verifyTokenConfirmUser(confirmUserDto.token);
            return { success: true, message: "L'e-mail de confirmation a été confirmé avec succès." };
        }
        catch (error) {
            return { success: false, message: "Erreur lors de la confirmation de l'email.", error: error.message };
        }
    }
    async resendMailConfirmUser(emailDto) {
        try {
            await this.authService.resendVerifyTokenConfirmUser(emailDto.email);
            return { success: true, message: "L'e-mail de confirmation a été renvoyé avec succès." };
        }
        catch (error) {
            return { success: false, message: "Erreur lors du renvoi de l'e-mail de confirmation.", error: error.message };
        }
    }
    async sendCodeResetPassword(demandeResetPasswordDto) {
        try {
            await this.authService.resetPasswordDemande(demandeResetPasswordDto);
            return { success: true, message: "Le code de reinisialisation du mot de passe a été renvoyé avec succès." };
        }
        catch (error) {
            return {
                success: false,
                message: "Erreur lors du renvoi de l'e-mail de reinisialisation du mot de passe.",
                error: error.message,
            };
        }
    }
    async ResetPassword(resetPasswordConfirmDto) {
        try {
            await this.authService.resetPasswordConfirm(resetPasswordConfirmDto);
            return { success: true, message: "Le mot de passe a été réinisialisé avec succès." };
        }
        catch (error) {
            return { success: false, message: "Erreur lors de la reinisialisation du mot de passe.", error: error.message };
        }
    }
    async login(loginDto, req) {
        const user = req.user;
        const access_token = await this.authService.login(user);
        return { access_token, user };
    }
    getProfile(req) {
        return req.user;
    }
    deleteProfile(userIDdto) {
        console.log("id,", userIDdto);
        return this.authService.deleteUserById(userIDdto.userId);
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Post)("register"),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "create", null);
__decorate([
    (0, common_1.Post)("confirm"),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.ConfirmUserDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "confirmUser", null);
__decorate([
    (0, common_1.Post)("resend-confirm"),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.EmailDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "resendMailConfirmUser", null);
__decorate([
    (0, common_1.Post)("demande-reset-password"),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [resetPassword_dto_1.ResetPasswordDemandeDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "sendCodeResetPassword", null);
__decorate([
    (0, common_1.Put)("reset-password"),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [resetPassword_dto_1.ResetPasswordConfirmDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "ResetPassword", null);
__decorate([
    (0, common_1.UseGuards)(local_auth_guard_1.LocalAuthGuard),
    (0, common_1.Post)("login"),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_dto_1.LoginDto, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)("profile"),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "getProfile", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Delete)("delete"),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.userIdDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "deleteProfile", null);
exports.AuthController = AuthController = __decorate([
    (0, swagger_1.ApiTags)("Authentification"),
    (0, common_1.Controller)("auth"),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map