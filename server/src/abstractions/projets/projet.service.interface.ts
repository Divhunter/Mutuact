import { CreateProjetDto } from 'src/projet/dto/create-projet.dto';
import { Message } from 'src/projet/entities/message.model';
import { Projet } from 'src/projet/entities/projet.entity';

export interface IProjetService {
  getAllProjets(): Promise<Projet[]>;
  getProjetById(projetId: string): Promise<Projet | null>;
  getProjetByEmail(email: string): Promise<Projet | null>;
  createProjet(createProjetDto: CreateProjetDto): Promise<Projet | Message>;
  deleteProjetById(projetId: string): Promise<Projet | null>;
  markNotificationAsRead(projetId: string): Promise<any>;
}
