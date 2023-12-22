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
exports.VerificationTokenTypeDto = exports.userIdDto = exports.EmailDto = exports.ConfirmUserDto = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class ConfirmUserDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { token: { required: true, type: () => String } };
    }
}
exports.ConfirmUserDto = ConfirmUserDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ConfirmUserDto.prototype, "token", void 0);
class EmailDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { email: { required: true, type: () => String } };
    }
}
exports.EmailDto = EmailDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsEmail)({}, { message: "Format email invalide" }),
    __metadata("design:type", String)
], EmailDto.prototype, "email", void 0);
class userIdDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { userId: { required: true, type: () => String } };
    }
}
exports.userIdDto = userIdDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], userIdDto.prototype, "userId", void 0);
var VerificationTokenTypeDto;
(function (VerificationTokenTypeDto) {
    VerificationTokenTypeDto["initial_verification"] = "initial_verification";
    VerificationTokenTypeDto["reset_email"] = "reset_email";
    VerificationTokenTypeDto["resend_email_verification"] = "resend_email_verification";
})(VerificationTokenTypeDto || (exports.VerificationTokenTypeDto = VerificationTokenTypeDto = {}));
//# sourceMappingURL=auth.dto.js.map