import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class ReviewAuditsService {
  constructor(private prisma: PrismaService) {}

  async create(data: {
    reviewId: number;
    accept: boolean;
    comment: string;
  }): Promise<any> {
    const reviewAudit = await this.prisma.reviewAudit.create({
      data,
    });

    const auditCount = await this.prisma.reviewAudit.count({
      where: { reviewId: data.reviewId, accept: true },
    });

    if (auditCount >= 5) {
      await this.prisma.review.update({
        where: { id: data.reviewId },
        data: { isReviewed: true },
      });
    }

    return reviewAudit;
  }

  findAll(): Promise<any[]> {
    return this.prisma.reviewAudit.findMany();
  }

  findOne(id: number): Promise<any> {
    return this.prisma.reviewAudit.findUnique({
      where: { id },
    });
  }

  update(id: number, data: any): Promise<any> {
    return this.prisma.reviewAudit.update({
      where: { id },
      data,
    });
  }

  remove(id: number): Promise<any> {
    return this.prisma.reviewAudit.delete({
      where: { id },
    });
  }
}
