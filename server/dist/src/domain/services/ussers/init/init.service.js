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
exports.InitService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const bcrypt = require("bcryptjs");
const prisma_service_1 = require("../../../../infrastructure/persistence/prisma/prisma.service");
let InitService = class InitService {
    constructor(prismaService, config) {
        this.prismaService = prismaService;
        this.config = config;
    }
    async onModuleInit() {
        const emailAdmin = this.config.get("APP_IDENTIFIANT");
        const passwordAdmin = this.config.get("APP_PASSWORD");
        const hashedPassword = await bcrypt.hash(passwordAdmin, 10);
        const adminUser = await this.prismaService.user.findUnique({
            where: { email: emailAdmin },
        });
        if (!adminUser) {
            const createAdmin = {
                name: "Admin",
                email: emailAdmin,
                password: hashedPassword,
                image: "",
                role: "admin",
                emailVerified: true,
                id: "",
                emailVerifiedDate: new Date(),
            };
            Reflect.deleteProperty(createAdmin, "id");
            await this.prismaService.user.create({
                data: createAdmin,
            });
            console.log("admin created!");
        }
    }
};
exports.InitService = InitService;
exports.InitService = InitService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        config_1.ConfigService])
], InitService);
//# sourceMappingURL=init.service.js.map