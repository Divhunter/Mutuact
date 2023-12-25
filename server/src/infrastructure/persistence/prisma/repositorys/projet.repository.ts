import { Injectable } from "@nestjs/common";
import { IProjetRepository } from "../../../../domain/abstraction/projets/projet.repository.interface";
import { CreateProjetDto, MessageDto } from "../../../../domain/dtos/projets/create.projet.dto";
import { ProjetModel } from "../../../../domain/models/projets/projet.model";
import { PrismaService } from "../prisma.service";

@Injectable()
export class ProjetRepository implements IProjetRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async findAllProjets(): Promise<ProjetModel[]> {
    return await this.prismaService.projet.findMany({
      include: { messages: true },
      orderBy: { createdDate: "asc" },
    });
  }

  async findProjetByEmail(email: string): Promise<ProjetModel | undefined> {
    try {
      return await this.prismaService.projet.findFirst({
        where: {
          email,
        },
        include: { messages: true },
      });
    } catch (error) {
      console.log(error);
      return undefined; // Retourne undefined si une erreur se produit
    }
  }

  async findProjetById(projetId: string): Promise<ProjetModel | null> {
    try {
      return await this.prismaService.projet.findUnique({
        where: {
          id: projetId,
        },
        include: { messages: true },
      });
    } catch (error) {
      console.log(error);
      return null; // Retourne null si une erreur se produit
    }
  }

  async createProjet(projetData: CreateProjetDto, messageDto: MessageDto): Promise<ProjetModel> {
    return await this.prismaService.projet.create({
      data: {
        firstName: projetData.firstName,
        lastName: projetData.lastName,
        email: projetData.email,
        phone: projetData.phone,
        isRead: false,
        createdDate: new Date(),
        updatedDate: new Date(),
        messages: {
          create: messageDto,
        },
      },
    });
  }

  async deleteProjetById(projetId: string): Promise<ProjetModel> {
    // suppression des messages d'abord
    await this.prismaService.message.deleteMany({
      where: { projetId },
    });
    return await this.prismaService.projet.delete({
      where: { id: projetId },
    });
    // const transaction = await this.prismaService.$transaction([deletePosts, deleteUser])
  }

  async createMessage(projetId: string, messageDto: MessageDto): Promise<any> {
    return await this.prismaService.message.create({
      data: {
        ...messageDto,
        projet: {
          connect: { id: projetId }, // Associe le message au projet avec l'ID spécifié
        },
      },
    });
  }
  // Supposons que vous ayez une méthode pour marquer une notification comme lue
  async markNotificationAsRead(projetId: string): Promise<any> {
    return await this.prismaService.projet.update({
      where: {
        id: projetId,
      },
      data: {
        isRead: true,
      },
    });
  }
  async markProjetNotRead(projetId: string): Promise<any> {
    return await this.prismaService.projet.update({
      where: {
        id: projetId,
      },
      data: {
        isRead: false,
      },
    });
  }
}
