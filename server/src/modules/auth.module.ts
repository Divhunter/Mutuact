import { Module } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import { MailService } from "src/communs/utils/mail.service";
import { TokenService } from "src/communs/utils/token.service";
import { AuthService } from "src/domain/services/ussers/auth.service";
import { PrismaService } from "src/infrastructure/persistence/prisma/prisma.service";
import { AuthRepository } from "src/infrastructure/persistence/prisma/repositorys/auth.repositor";

@Module({
  providers: [AuthService, AuthRepository, MailService, PrismaService, TokenService, JwtService, ConfigService], // Ajoutez vos services et repositories ici
  exports: [AuthService, AuthRepository], // Si vous souhaitez que le service soit disponible à l'injection dans d'autres modules
})
export class AuthModule {}
