import { IProjetService } from "src/domain/abstraction/projets/projet.service.interface";
import { CreateProjetDto } from "src/domain/dtos/projets/create.projet.dto";
import { MessageModel } from "src/domain/models/projets/message.model";
import { ProjetModel } from "src/domain/models/projets/projet.model";
import { ProjetRepository } from "src/infrastructure/persistence/prisma/repositorys/projet.repository";
export declare class ProjetService implements IProjetService {
    private readonly projetRepository;
    constructor(projetRepository: ProjetRepository);
    getAllProjets(): Promise<ProjetModel[]>;
    getProjetById(projetId: string): Promise<ProjetModel>;
    getProjetByEmail(email: string): Promise<ProjetModel>;
    createProjet(createProjetDto: CreateProjetDto): Promise<ProjetModel | MessageModel>;
    deleteProjetById(projetId: string): Promise<ProjetModel>;
    markNotificationAsRead(projetId: string): Promise<any>;
}
