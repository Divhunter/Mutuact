import { CreateProjetDto } from "../../dtos/projets/create.projet.dto";
import { MessageModel } from "../../models/projets/message.model";
import { ProjetModel } from "../../models/projets/projet.model";

export interface IProjetService {
  getAllProjets(): Promise<ProjetModel[]>;
  getProjetById(projetId: string): Promise<ProjetModel | null>;
  getProjetByEmail(email: string): Promise<ProjetModel | null>;
  createProjet(createProjetDto: CreateProjetDto): Promise<ProjetModel | MessageModel>;
  deleteProjetById(projetId: string): Promise<ProjetModel | null>;
  markNotificationAsRead(projetId: string): Promise<any>;
}
