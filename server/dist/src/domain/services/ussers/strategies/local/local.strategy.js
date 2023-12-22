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
exports.LocalStrategy = void 0;
const passport_1 = require("@nestjs/passport");
const passport_local_1 = require("passport-local");
const auth_service_1 = require("../../auth.service");
const common_1 = require("@nestjs/common");
const bcrypt = require("bcryptjs");
const class_validator_1 = require("class-validator");
const login_dto_1 = require("../../../../dtos/users/login.dto");
let LocalStrategy = class LocalStrategy extends (0, passport_1.PassportStrategy)(passport_local_1.Strategy) {
    constructor(authService) {
        super({
            usernameField: "email",
            passwordField: "password",
        });
        this.authService = authService;
    }
    async validate(email, password) {
        const loginDto = new login_dto_1.LoginDto();
        loginDto.email = email;
        loginDto.password = password;
        const errors = await (0, class_validator_1.validate)(loginDto);
        if (errors.length > 0) {
            const errorMessages = errors.map((error) => {
                const constraints = Object.values(error.constraints || {});
                return constraints.map((constraint) => constraint);
            });
            const flattenedErrorMessages = [].concat(...errorMessages);
            throw new common_1.BadRequestException({ message: flattenedErrorMessages });
        }
        const user = await this.authService.findUserByEmail(email);
        if (!user)
            throw new common_1.NotFoundException("User not found");
        if (user.emailVerified !== true)
            throw new common_1.UnauthorizedException("Email non confirmé, veillez le confirmé d'abord!");
        const matchPassword = await bcrypt.compare(password, user.password);
        if (!matchPassword)
            throw new common_1.UnauthorizedException("Password does not match");
        Reflect.deleteProperty(user, "password");
        return user;
    }
};
exports.LocalStrategy = LocalStrategy;
exports.LocalStrategy = LocalStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], LocalStrategy);
//# sourceMappingURL=local.strategy.js.map