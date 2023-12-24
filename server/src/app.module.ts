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
import { ConfigModule, ConfigService } from "@nestjs/config";
import { HttpModule } from "@nestjs/axios";
import { InitService } from "./domain/services/ussers/init/init.service";
import { PrismaService } from "./infrastructure/persistence/prisma/prisma.service";
import { AppController } from "./application/controllers/app.controller";

@Module({
  imports: [PassportModule, JwtModule.register({}), AuthModule, ProjetModule, HttpModule, ConfigModule.forRoot()],
  controllers: [AppController, AuthController, ProjetController],
  providers: [TokenService, LocalStrategy, JwtStrategy, ConfigService, InitService, PrismaService],
})
export class AppModule {}
