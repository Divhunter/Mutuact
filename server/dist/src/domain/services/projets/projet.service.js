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
exports.ProjetService = void 0;
const projet_repository_1 = require("../../../infrastructure/persistence/prisma/repositorys/projet.repository");
const common_1 = require("@nestjs/common");
let ProjetService = class ProjetService {
    constructor(projetRepository) {
        this.projetRepository = projetRepository;
    }
    async getAllProjets() {
        return await this.projetRepository.findAllProjets();
    }
    async getProjetById(projetId) {
        return await this.projetRepository.findProjetById(projetId);
    }
    async getProjetByEmail(email) {
        return await this.projetRepository.findProjetByEmail(email);
    }
    async createProjet(createProjetDto) {
        try {
            const existingProjet = await this.getProjetByEmail(createProjetDto.email);
            if (existingProjet) {
                const newMessage = {
                    content: createProjetDto.message,
                    createdDate: new Date(),
                };
                await this.projetRepository.markProjetNotRead(existingProjet.id);
                return await this.projetRepository.createMessage(existingProjet.id, newMessage);
            }
            else {
                const newProjet = {
                    firstName: createProjetDto.firstName,
                    lastName: createProjetDto.lastName,
                    email: createProjetDto.email,
                    phone: createProjetDto.phone,
                };
                const messageDto = {
                    content: createProjetDto.message ? createProjetDto.message : "N/R",
                    createdDate: new Date(),
                };
                return await this.projetRepository.createProjet(newProjet, messageDto);
            }
        }
        catch (error) {
            console.log(error);
        }
    }
    async deleteProjetById(projetId) {
        return await this.projetRepository.deleteProjetById(projetId);
    }
    async markNotificationAsRead(projetId) {
        return await this.projetRepository.markNotificationAsRead(projetId);
    }
};
exports.ProjetService = ProjetService;
exports.ProjetService = ProjetService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [projet_repository_1.ProjetRepository])
], ProjetService);
//# sourceMappingURL=projet.service.js.map