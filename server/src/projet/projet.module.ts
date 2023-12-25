import { Module } from '@nestjs/common';
import { ProjetService } from './projet.service';
import { ProjetController } from './projet.controller';
import { ProjetRepository } from './projet.repository';
import { PrismaService } from 'prisma/prisma.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [ProjetController],
  providers: [ProjetService, ProjetRepository, PrismaService],
})
export class ProjetModule {}
