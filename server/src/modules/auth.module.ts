import { Module } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import { MailService } from "../communs/utils/mail.service";
import { TokenService } from "../communs/utils/token.service";
import { AuthService } from "../domain/services/ussers/auth.service";
import { PrismaService } from "../infrastructure/persistence/prisma/prisma.service";
import { AuthRepository } from "../infrastructure/persistence/prisma/repositorys/auth.repositor";

@Module({
  providers: [AuthService, AuthRepository, MailService, PrismaService, TokenService, JwtService, ConfigService], // Ajoutez vos services et repositories ici
  exports: [AuthService, AuthRepository], // Si vous souhaitez que le service soit disponible à l'injection dans d'autres modules
})
export class AuthModule {}
