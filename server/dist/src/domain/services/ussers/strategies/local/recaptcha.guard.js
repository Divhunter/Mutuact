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
exports.RecaptchaGuard = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
let RecaptchaGuard = class RecaptchaGuard {
    constructor(httpService) {
        this.httpService = httpService;
    }
    async canActivate(context) {
        const { body } = context.switchToHttp().getRequest();
        const secretKey = process.env.SECRET_KEY_RECAPTCHA;
        const verificationUrl = "https://www.google.com/recaptcha/api/siteverify";
        const { data } = await this.httpService
            .post(verificationUrl, null, {
            params: {
                secret: secretKey,
                response: body.recaptchaResponse,
            },
        })
            .toPromise();
        if (!data.success) {
            throw new common_1.HttpException({
                status: "CAPTCHA_VALIDATION_FAILED",
                error: `La validation du CAPTCHA a échouée`,
                message: "Veuillez révalider le CAPTCHA",
            }, 403);
        }
        return true;
    }
};
exports.RecaptchaGuard = RecaptchaGuard;
exports.RecaptchaGuard = RecaptchaGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], RecaptchaGuard);
//# sourceMappingURL=recaptcha.guard.js.map