// import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
// import { Candidate } from '@prisma/client';
// import { ApiPagedResponseDto } from '../dtos/api-paged-response.dto';
// import { ApiResponseDto } from '../dtos/api-response.dto';
// import { PageMetaDto } from '../dtos/page-meta.dto';
// import { PrismaService } from '../services/prisma/prisma.service';

// @Injectable()
// export class CandidateService {
//   constructor(private readonly prisma: PrismaService) {}

//   async createCandidate(data: Record<string, any>) {
//     try {
//       const candidate = await this.prisma.candidate.create({
//         data,
//       });

//       return new ApiResponseDto<Candidate>(candidate);
//     } catch (e) {
//       throw new BadRequestException();
//     }
//   }

//   async getCandidates() {
//     const candidatesWithCount = await this.prisma.$transaction([
//       this.prisma.candidate.count(),
//       this.prisma.candidate.findMany(),
//     ]);

//     return new ApiPagedResponseDto<Candidate>(
//       candidatesWithCount[1],
//       new PageMetaDto({ itemCount: candidatesWithCount[0], options: {} }),
//     );
//   }

//   async updateCandidate(id: string, data: Record<string, any>) {
//     await this.getCandidate(id);

//     const candidate = await this.prisma.candidate.update({
//       where: {
//         id,
//       },
//       data,
//     });

//     return new ApiResponseDto<Candidate>(candidate);
//   }

//   async getCandidate(id: string) {
//     const candidate = await this.prisma.candidate.findUnique({ where: { id } });
//     if (!candidate) throw new NotFoundException();

//     return new ApiResponseDto<Candidate>(candidate);
//   }

//   async deleteCandidate(id: string) {
//     await this.getCandidate(id);
//     await this.prisma.candidate.delete({ where: { id } });
//   }
// }

import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { ApiPagedResponseDto } from '../dtos/api-paged-response.dto';
import { ApiResponseDto } from '../dtos/api-response.dto';
import { PageMetaDto } from '../dtos/page-meta.dto';
import { PrismaService } from '../services/prisma/prisma.service';
import { CreateCandidateDto } from './dto/create-candidate.dto';
import { UpdateCandidateDto } from './dto/update-candidate.dto';
import { CandidateEntity } from './entities/candidate.entity';

@Injectable()
export class CandidateService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createCandidateDto: CreateCandidateDto) {
    try {
      const candidate = await this.prisma.candidate.create({
        data: createCandidateDto,
      });

      return new ApiResponseDto<CandidateEntity>(candidate);
    } catch (error) {
      throw new BadRequestException();
    }
  }

  async findAll() {
    const resultsWithCount = await this.prisma.$transaction([
      this.prisma.candidate.findMany(),
      this.prisma.candidate.count(),
    ]);

    return new ApiPagedResponseDto<CandidateEntity>(
      resultsWithCount[0],
      new PageMetaDto({ itemCount: resultsWithCount[1], options: {} }),
    );
  }

  async findOne(id: string) {
    const candidate = await this.prisma.candidate.findUnique({ where: { id } });
    if (!candidate) throw new NotFoundException();

    return new ApiResponseDto<CandidateEntity>(candidate);
  }

  async update(id: string, updateCandidateDto: UpdateCandidateDto) {
    await this.findOne(id);

    const candidate = await this.prisma.candidate.update({
      where: { id },
      data: updateCandidateDto,
    });

    return new ApiResponseDto<CandidateEntity>(candidate);
  }

  remove(id: string) {
    return `This action removes a #${id} candidate`;
  }
}
