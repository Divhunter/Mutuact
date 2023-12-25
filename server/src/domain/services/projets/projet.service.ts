import { IProjetService } from "src/domain/abstraction/projets/projet.service.interface";
import { CreateProjetDto, MessageDto } from "src/domain/dtos/projets/create.projet.dto";
import { MessageModel } from "src/domain/models/projets/message.model";
import { ProjetModel } from "src/domain/models/projets/projet.model";
import { ProjetRepository } from "src/infrastructure/persistence/prisma/repositorys/projet.repository";
import { Injectable } from "@nestjs/common";

@Injectable()
export class ProjetService implements IProjetService {
  constructor(private readonly projetRepository: ProjetRepository) {}

  async getAllProjets(): Promise<ProjetModel[]> {
    return await this.projetRepository.findAllProjets();
  }

  async getProjetById(projetId: string): Promise<ProjetModel> {
    return await this.projetRepository.findProjetById(projetId);
  }

  async getProjetByEmail(email: string): Promise<ProjetModel> {
    return await this.projetRepository.findProjetByEmail(email);
  }

  async createProjet(createProjetDto: CreateProjetDto): Promise<ProjetModel | MessageModel> {
    try {
      const existingProjet = await this.getProjetByEmail(createProjetDto.email);

      if (existingProjet) {
        const newMessage: MessageDto = {
          content: createProjetDto.message,
          createdDate: new Date(),
        };
        await this.projetRepository.markProjetNotRead(existingProjet.id);
        return await this.projetRepository.createMessage(existingProjet.id, newMessage);
      } else {
        const newProjet: CreateProjetDto = {
          firstName: createProjetDto.firstName,
          lastName: createProjetDto.lastName,
          email: createProjetDto.email,
          phone: createProjetDto.phone,
        };
        const messageDto: MessageDto = {
          content: createProjetDto.message ? createProjetDto.message : "N/R",
          createdDate: new Date(),
        };

        return await this.projetRepository.createProjet(newProjet, messageDto);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async deleteProjetById(projetId: string): Promise<ProjetModel> {
    return await this.projetRepository.deleteProjetById(projetId);
  }

  async markNotificationAsRead(projetId: string): Promise<any> {
    return await this.projetRepository.markNotificationAsRead(projetId);
  }
}
