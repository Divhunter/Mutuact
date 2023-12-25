import { Module } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { MailService } from "src/communs/utils/mail.service";
import { ProjetService } from "src/domain/services/projets/projet.service";
import { PrismaService } from "src/infrastructure/persistence/prisma/prisma.service";
import { ProjetRepository } from "src/infrastructure/persistence/prisma/repositorys/projet.repository";

@Module({
  providers: [ProjetService, ProjetRepository, MailService, PrismaService, ConfigService], // Ajoutez vos services et repositories ici
  exports: [ProjetService, ProjetRepository], // Si vous souhaitez que le service soit disponible à l'injection dans d'autres modules
})
export class ProjetModule {}
