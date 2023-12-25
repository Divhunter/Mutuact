import { CreateProjetDto, MessageDto } from "src/domain/dtos/projets/create.projet.dto";
import { ProjetModel } from "src/domain/models/projets/projet.model";

export interface IProjetRepository {
  findAllProjets(): Promise<ProjetModel[]>;
  findProjetById(projetId: string): Promise<ProjetModel | null>;
  findProjetByEmail(email: string): Promise<ProjetModel | null>;
  createProjet(projetData: CreateProjetDto, messageDto: MessageDto): Promise<ProjetModel>;
  deleteProjetById(projetId: string): Promise<ProjetModel | null>;
  markNotificationAsRead(projetId: string): Promise<any>;
}
