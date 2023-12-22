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
exports.ProjetRepository = void 0;
const prisma_service_1 = require("../prisma.service");
const common_1 = require("@nestjs/common");
let ProjetRepository = class ProjetRepository {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async findAllProjets() {
        return await this.prismaService.projet.findMany({
            include: { messages: true },
            orderBy: { createdDate: "asc" },
        });
    }
    async findProjetByEmail(email) {
        try {
            return await this.prismaService.projet.findFirst({
                where: {
                    email,
                },
                include: { messages: true },
            });
        }
        catch (error) {
            console.log(error);
            return undefined;
        }
    }
    async findProjetById(projetId) {
        try {
            return await this.prismaService.projet.findUnique({
                where: {
                    id: projetId,
                },
                include: { messages: true },
            });
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    async createProjet(projetData, messageDto) {
        return await this.prismaService.projet.create({
            data: {
                firstName: projetData.firstName,
                lastName: projetData.lastName,
                email: projetData.email,
                phone: projetData.phone,
                isRead: false,
                createdDate: new Date(),
                updatedDate: new Date(),
                messages: {
                    create: messageDto,
                },
            },
        });
    }
    async deleteProjetById(projetId) {
        await this.prismaService.message.deleteMany({
            where: { projetId },
        });
        return await this.prismaService.projet.delete({
            where: { id: projetId },
        });
    }
    async createMessage(projetId, messageDto) {
        return await this.prismaService.message.create({
            data: {
                ...messageDto,
                projet: {
                    connect: { id: projetId },
                },
            },
        });
    }
    async markNotificationAsRead(projetId) {
        return await this.prismaService.projet.update({
            where: {
                id: projetId,
            },
            data: {
                isRead: true,
            },
        });
    }
    async markProjetNotRead(projetId) {
        return await this.prismaService.projet.update({
            where: {
                id: projetId,
            },
            data: {
                isRead: false,
            },
        });
    }
};
exports.ProjetRepository = ProjetRepository;
exports.ProjetRepository = ProjetRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProjetRepository);
//# sourceMappingURL=projet.repository.js.map