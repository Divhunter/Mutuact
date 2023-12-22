import { OnModuleInit } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PrismaService } from "src/infrastructure/persistence/prisma/prisma.service";
export declare class InitService implements OnModuleInit {
    private readonly prismaService;
    private readonly config;
    constructor(prismaService: PrismaService, config: ConfigService);
    onModuleInit(): Promise<void>;
}
