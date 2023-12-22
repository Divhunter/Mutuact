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
exports.UserVerificationDto = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const auth_dto_1 = require("./auth.dto");
class UserVerificationDto {
    constructor() {
        this.userId = "";
        this.token = "";
        this.isUsed = false;
        this.createdAt = new Date().toISOString();
        this.expiresAt = new Date().toISOString();
    }
    static _OPENAPI_METADATA_FACTORY() {
        return { userId: { required: true, type: () => String, default: "" }, token: { required: true, type: () => String, default: "" }, isUsed: { required: true, type: () => Boolean, default: false }, createdAt: { required: true, type: () => String, default: new Date().toISOString() }, expiresAt: { required: true, type: () => String, default: new Date().toISOString() }, type: { required: true, enum: require("./auth.dto").VerificationTokenTypeDto } };
    }
}
exports.UserVerificationDto = UserVerificationDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UserVerificationDto.prototype, "userId", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UserVerificationDto.prototype, "token", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], UserVerificationDto.prototype, "isUsed", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], UserVerificationDto.prototype, "createdAt", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], UserVerificationDto.prototype, "expiresAt", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UserVerificationDto.prototype, "type", void 0);
//# sourceMappingURL=user.verification.dto.js.map