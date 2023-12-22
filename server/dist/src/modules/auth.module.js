"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const jwt_1 = require("@nestjs/jwt");
const mail_service_1 = require("../communs/utils/mail.service");
const token_service_1 = require("../communs/utils/token.service");
const auth_service_1 = require("../domain/services/ussers/auth.service");
const prisma_service_1 = require("../infrastructure/persistence/prisma/prisma.service");
const auth_repositor_1 = require("../infrastructure/persistence/prisma/repositorys/auth.repositor");
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        providers: [auth_service_1.AuthService, auth_repositor_1.AuthRepository, mail_service_1.MailService, prisma_service_1.PrismaService, token_service_1.TokenService, jwt_1.JwtService, config_1.ConfigService],
        exports: [auth_service_1.AuthService, auth_repositor_1.AuthRepository],
    })
], AuthModule);
//# sourceMappingURL=auth.module.js.map