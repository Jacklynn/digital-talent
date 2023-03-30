import { Module } from '@nestjs/common';
import { PrismaService } from '../services/prisma/prisma.service';
import { CandidateApiV0Controller } from './api/v0.controller';
import { CandidateService } from './candidate.service';

@Module({
  controllers: [CandidateApiV0Controller],
  providers: [CandidateService, PrismaService],
})
export class CandidateModule {}
