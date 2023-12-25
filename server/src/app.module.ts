import { Module } from "@nestjs/common";
import { AuthController } from "./application/controllers/users/auth.controller";
import { TokenService } from "./communs/utils/token.service";
import { JwtModule } from "@nestjs/jwt";
import { LocalStrategy } from "./domain/services/ussers/strategies/local/local.strategy";
import { JwtStrategy } from "./domain/services/ussers/strategies/local/jwt.strategy";
import { PassportModule } from "@nestjs/passport";
import { ProjetController } from "./application/controllers/projets/projet.controller";
import { AuthModule } from "./modules/auth.module";
import { ProjetModule } from "./modules/projet.module";
import { ConfigService } from "@nestjs/config";
import { HttpModule } from "@nestjs/axios";
import { InitService } from "./domain/services/ussers/init/init.service";
import { PrismaService } from "./infrastructure/persistence/prisma/prisma.service";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";

@Module({
  imports: [PassportModule, JwtModule.register({}), AuthModule, ProjetModule, HttpModule],
  controllers: [AppController, AuthController, ProjetController],
  providers: [AppService, TokenService, LocalStrategy, JwtStrategy, ConfigService, InitService, PrismaService],
})
export class AppModule {}
