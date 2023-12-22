"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenService = void 0;
const common_1 = require("@nestjs/common");
const jwt = require("jsonwebtoken");
let TokenService = class TokenService {
    verifyToken(token, secretKey) {
        try {
            const verifiedToken = jwt.verify(token, secretKey);
            return verifiedToken;
        }
        catch (error) {
            console.log("token:", error);
            if (error instanceof jwt.TokenExpiredError) {
                throw new common_1.HttpException("Token expiré", common_1.HttpStatus.UNAUTHORIZED);
            }
            else if (error instanceof jwt.JsonWebTokenError) {
                throw new common_1.HttpException("Token invalide", common_1.HttpStatus.UNAUTHORIZED);
            }
            else {
                throw new common_1.HttpException("Erreur lors de la vérification du token", common_1.HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }
    }
};
exports.TokenService = TokenService;
exports.TokenService = TokenService = __decorate([
    (0, common_1.Injectable)()
], TokenService);
//# sourceMappingURL=token.service.js.map