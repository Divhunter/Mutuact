import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjetModule } from './projet/projet.module';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [ProjetModule, ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService, ConfigService],
})
export class AppModule {}
