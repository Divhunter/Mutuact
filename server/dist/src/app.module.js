"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const auth_controller_1 = require("./application/controllers/users/auth.controller");
const token_service_1 = require("./communs/utils/token.service");
const jwt_1 = require("@nestjs/jwt");
const local_strategy_1 = require("./domain/services/ussers/strategies/local/local.strategy");
const jwt_strategy_1 = require("./domain/services/ussers/strategies/local/jwt.strategy");
const passport_1 = require("@nestjs/passport");
const projet_controller_1 = require("./application/controllers/projets/projet.controller");
const auth_module_1 = require("./modules/auth.module");
const projet_module_1 = require("./modules/projet.module");
const config_1 = require("@nestjs/config");
const axios_1 = require("@nestjs/axios");
const init_service_1 = require("./domain/services/ussers/init/init.service");
const prisma_service_1 = require("./infrastructure/persistence/prisma/prisma.service");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [passport_1.PassportModule, jwt_1.JwtModule.register({}), auth_module_1.AuthModule, projet_module_1.ProjetModule, axios_1.HttpModule],
        controllers: [auth_controller_1.AuthController, projet_controller_1.ProjetController],
        providers: [token_service_1.TokenService, local_strategy_1.LocalStrategy, jwt_strategy_1.JwtStrategy, config_1.ConfigService, init_service_1.InitService, prisma_service_1.PrismaService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map