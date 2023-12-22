"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjetModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const mail_service_1 = require("../communs/utils/mail.service");
const projet_service_1 = require("../domain/services/projets/projet.service");
const prisma_service_1 = require("../infrastructure/persistence/prisma/prisma.service");
const projet_repository_1 = require("../infrastructure/persistence/prisma/repositorys/projet.repository");
let ProjetModule = class ProjetModule {
};
exports.ProjetModule = ProjetModule;
exports.ProjetModule = ProjetModule = __decorate([
    (0, common_1.Module)({
        providers: [projet_service_1.ProjetService, projet_repository_1.ProjetRepository, mail_service_1.MailService, prisma_service_1.PrismaService, config_1.ConfigService],
        exports: [projet_service_1.ProjetService, projet_repository_1.ProjetRepository],
    })
], ProjetModule);
//# sourceMappingURL=projet.module.js.map