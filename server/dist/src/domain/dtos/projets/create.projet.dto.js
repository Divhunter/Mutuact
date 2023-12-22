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
exports.MessageDto = exports.CreateProjetDto = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateProjetDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { firstName: { required: true, type: () => String, minLength: 3, maxLength: 30, pattern: "/^[a-zA-Z\u00C0\u00C1\u00C2\u00C6\u00C7\u00C8\u00C9\u00CA\u00CB\u00CC\u00CD\u00CE\u00CF\u00D1\u00D2\u00D3\u00D4\u00D5\u00D6\u00D9\u00DA\u00DB\u00DC\u00DD\u00E0\u00E1\u00E2\u00E6\u00E7\u00E8\u00E9\u00EA\u00EB\u00EC\u00ED\u00EE\u00EF\u00F1\u00F2\u00F3\u00F4\u00F5\u00F6\u00F9\u00FA\u00FB\u00FC\u00FD -]+$/" }, lastName: { required: true, type: () => String, minLength: 3, maxLength: 30, pattern: "/^[a-zA-Z\u00C0\u00C1\u00C2\u00C6\u00C7\u00C8\u00C9\u00CA\u00CB\u00CC\u00CD\u00CE\u00CF\u00D1\u00D2\u00D3\u00D4\u00D5\u00D6\u00D9\u00DA\u00DB\u00DC\u00DD\u00E0\u00E1\u00E2\u00E6\u00E7\u00E8\u00E9\u00EA\u00EB\u00EC\u00ED\u00EE\u00EF\u00F1\u00F2\u00F3\u00F4\u00F5\u00F6\u00F9\u00FA\u00FB\u00FC\u00FD -]+$/" }, email: { required: true, type: () => String }, phone: { required: false, type: () => String, pattern: "/^\\+?\\d{9,14}(?:[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9})?$/" }, message: { required: false, type: () => String, minLength: 0, maxLength: 500, pattern: "/^[a-zA-Z\u00E9\u00E8\u00EA\u00EE\u00E7\u00E0\u00F4\u00EF\u00F9\u00FB0-9]+(?:['\\s\\-?,:!%\"@;\u2019=\u00B0_()&$\u20AC.a-zA-Z\u00E9\u00E8\u00EA\u00EE\u00E7\u00E0\u00F4\u00EF\u00FB\u00F90-9]+)*$/" } };
    }
}
exports.CreateProjetDto = CreateProjetDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^[a-zA-ZÀÁÂÆÇÈÉÊËÌÍÎÏÑÒÓÔÕÖÙÚÛÜÝàáâæçèéêëìíîïñòóôõöùúûüý -]+$/),
    (0, class_validator_1.Length)(3, 30),
    __metadata("design:type", String)
], CreateProjetDto.prototype, "firstName", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^[a-zA-ZÀÁÂÆÇÈÉÊËÌÍÎÏÑÒÓÔÕÖÙÚÛÜÝàáâæçèéêëìíîïñòóôõöùúûüý -]+$/),
    (0, class_validator_1.Length)(3, 30),
    __metadata("design:type", String)
], CreateProjetDto.prototype, "lastName", void 0);
__decorate([
    (0, class_validator_1.IsEmail)({}, { message: "L'adresse e-mail n'est pas valide" }),
    __metadata("design:type", String)
], CreateProjetDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Matches)(/^\+?\d{9,14}(?:[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9})?$/),
    __metadata("design:type", String)
], CreateProjetDto.prototype, "phone", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Length)(0, 500),
    (0, class_validator_1.Matches)(/^[a-zA-Zéèêîçàôïùû0-9]+(?:['\s\-?,:!%"@;’=°_()&$€.a-zA-Zéèêîçàôïûù0-9]+)*$/),
    __metadata("design:type", String)
], CreateProjetDto.prototype, "message", void 0);
class MessageDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { content: { required: true, type: () => String, minLength: 0, maxLength: 500, pattern: "/^[a-zA-Z\u00E9\u00E8\u00EA\u00EE\u00E7\u00E0\u00F4\u00EF\u00F9\u00FB0-9]+(?:['\\s\\-?,:!%\"@;\u2019=\u00B0_()&$\u20AC.a-zA-Z\u00E9\u00E8\u00EA\u00EE\u00E7\u00E0\u00F4\u00EF\u00FB\u00F90-9]+)*$/" }, createdDate: { required: true, type: () => Date } };
    }
}
exports.MessageDto = MessageDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Length)(0, 500),
    (0, class_validator_1.Matches)(/^[a-zA-Zéèêîçàôïùû0-9]+(?:['\s\-?,:!%"@;’=°_()&$€.a-zA-Zéèêîçàôïûù0-9]+)*$/),
    __metadata("design:type", String)
], MessageDto.prototype, "content", void 0);
//# sourceMappingURL=create.projet.dto.js.map