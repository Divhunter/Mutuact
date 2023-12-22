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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjetController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const create_projet_dto_1 = require("../../../domain/dtos/projets/create.projet.dto");
const projet_service_1 = require("../../../domain/services/projets/projet.service");
const jwt_auth_guard_1 = require("../../../domain/services/ussers/strategies/local/jwt-auth.guard");
const recaptcha_guard_1 = require("../../../domain/services/ussers/strategies/local/recaptcha.guard");
let ProjetController = class ProjetController {
    constructor(projetService) {
        this.projetService = projetService;
    }
    async create(createProjetDto) {
        try {
            const newProjet = await this.projetService.createProjet(createProjetDto);
            if (newProjet) {
                console.log("projet created");
                return {
                    success: true,
                    message: "Votre Message a bien été créé avec succès! ",
                    data: newProjet,
                };
            }
        }
        catch (error) {
            console.log(error);
            return { success: false, message: "Erreur lors de la création du message!", error: error.message };
        }
    }
    async getAllProjets() {
        try {
            const projets = await this.projetService.getAllProjets();
            return { success: true, data: projets };
        }
        catch (error) {
            console.log(error);
            return { success: false, error: error.message };
        }
    }
    async getProjetByEmail(email) {
        try {
            const projet = await this.projetService.getProjetByEmail(email);
            if (!projet) {
                return { success: false, error: "client non trouvé." };
            }
            return { success: true, data: projet };
        }
        catch (error) {
            console.log(error);
            return { success: false, error: error.message };
        }
    }
    async getProjetById(projetId) {
        try {
            const projet = await this.projetService.getProjetById(projetId);
            if (!projet) {
                return { success: false, error: "client non trouvé." };
            }
            return { success: true, data: projet };
        }
        catch (error) {
            console.log(error);
            return { success: false, error: "Erreur lors de la récupération du client." };
        }
    }
    async deleteProjet(projetId) {
        try {
            const deletedProjet = await this.projetService.deleteProjetById(projetId);
            if (!deletedProjet) {
                return { success: false, error: "client non trouvé." };
            }
            console.log("projet deleted");
            return { success: true, data: deletedProjet, message: `Le client "${deletedProjet.firstName}" a été supprimé!` };
        }
        catch (error) {
            console.log(error);
            return { success: false, error: "Erreur lors de la suppression du client." };
        }
    }
    async markNotificationAsRead(projetId) {
        try {
            const updatedIsReadMessage = await this.projetService.markNotificationAsRead(projetId);
            if (!updatedIsReadMessage) {
                return { success: false, error: "client non trouvé." };
            }
            console.log("projet read");
            return { success: true, data: updatedIsReadMessage, message: `Le message ${projetId} a été marqué comme lu!` };
        }
        catch (error) {
            console.log(error);
            return { success: false, error: `Erreur lors du marquage du message comme lu: ${error}` };
        }
    }
};
exports.ProjetController = ProjetController;
__decorate([
    (0, common_1.UseGuards)(recaptcha_guard_1.RecaptchaGuard),
    (0, common_1.Post)("new"),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_projet_dto_1.CreateProjetDto]),
    __metadata("design:returntype", Promise)
], ProjetController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: Object }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProjetController.prototype, "getAllProjets", null);
__decorate([
    (0, common_1.Get)("email"),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Query)("email")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProjetController.prototype, "getProjetByEmail", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)("id"),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Query)("projetId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProjetController.prototype, "getProjetById", null);
__decorate([
    (0, common_1.Delete)(),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Query)("projetId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProjetController.prototype, "deleteProjet", null);
__decorate([
    (0, common_1.Put)("read"),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Query)("projetId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProjetController.prototype, "markNotificationAsRead", null);
exports.ProjetController = ProjetController = __decorate([
    (0, swagger_1.ApiTags)("Projet"),
    (0, common_1.Controller)("projet"),
    __metadata("design:paramtypes", [projet_service_1.ProjetService])
], ProjetController);
//# sourceMappingURL=projet.controller.js.map