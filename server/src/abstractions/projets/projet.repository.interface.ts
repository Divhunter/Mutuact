import { CreateProjetDto, MessageDto } from 'src/projet/dto/create-projet.dto';
import { Projet } from 'src/projet/entities/projet.entity';

export interface IProjetRepository {
  findAllProjets(): Promise<Projet[]>;
  findProjetById(projetId: string): Promise<Projet | null>;
  findProjetByEmail(email: string): Promise<Projet | null>;
  createProjet(projetData: CreateProjetDto, messageDto: MessageDto): Promise<Projet>;
  deleteProjetById(projetId: string): Promise<Projet | null>;
  markNotificationAsRead(projetId: string): Promise<any>;
}
