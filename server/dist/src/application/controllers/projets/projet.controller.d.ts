import { CreateProjetDto } from "src/domain/dtos/projets/create.projet.dto";
import { ProjetService } from "src/domain/services/projets/projet.service";
export declare class ProjetController {
    private readonly projetService;
    constructor(projetService: ProjetService);
    create(createProjetDto: CreateProjetDto): Promise<{
        success: boolean;
        message: string;
        data: import("../../../domain/models/projets/message.model").MessageModel | import("../../../domain/models/projets/projet.model").ProjetModel;
        error?: undefined;
    } | {
        success: boolean;
        message: string;
        error: any;
        data?: undefined;
    }>;
    getAllProjets(): Promise<{
        success: boolean;
        data: import("../../../domain/models/projets/projet.model").ProjetModel[];
        error?: undefined;
    } | {
        success: boolean;
        error: any;
        data?: undefined;
    }>;
    getProjetByEmail(email: string): Promise<{
        success: boolean;
        data: import("../../../domain/models/projets/projet.model").ProjetModel;
        error?: undefined;
    } | {
        success: boolean;
        error: any;
        data?: undefined;
    }>;
    getProjetById(projetId: string): Promise<{
        success: boolean;
        error: string;
        data?: undefined;
    } | {
        success: boolean;
        data: import("../../../domain/models/projets/projet.model").ProjetModel;
        error?: undefined;
    }>;
    deleteProjet(projetId: string): Promise<{
        success: boolean;
        error: string;
        data?: undefined;
        message?: undefined;
    } | {
        success: boolean;
        data: import("../../../domain/models/projets/projet.model").ProjetModel;
        message: string;
        error?: undefined;
    }>;
    markNotificationAsRead(projetId: string): Promise<{
        success: boolean;
        error: string;
        data?: undefined;
        message?: undefined;
    } | {
        success: boolean;
        data: any;
        message: string;
        error?: undefined;
    }>;
}
