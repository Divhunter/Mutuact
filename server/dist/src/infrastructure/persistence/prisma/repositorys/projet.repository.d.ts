import { IProjetRepository } from "src/domain/abstraction/projets/projet.repository.interface";
import { ProjetModel } from "src/domain/models/projets/projet.model";
import { PrismaService } from "../prisma.service";
import { CreateProjetDto, MessageDto } from "src/domain/dtos/projets/create.projet.dto";
export declare class ProjetRepository implements IProjetRepository {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    findAllProjets(): Promise<ProjetModel[]>;
    findProjetByEmail(email: string): Promise<ProjetModel | undefined>;
    findProjetById(projetId: string): Promise<ProjetModel | null>;
    createProjet(projetData: CreateProjetDto, messageDto: MessageDto): Promise<ProjetModel>;
    deleteProjetById(projetId: string): Promise<ProjetModel>;
    createMessage(projetId: string, messageDto: MessageDto): Promise<any>;
    markNotificationAsRead(projetId: string): Promise<any>;
    markProjetNotRead(projetId: string): Promise<any>;
}
