import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class ReviewAuditsService {
  constructor(private prisma: PrismaService) {}

  async create(
    data: {
      accept: boolean;
      comment: string;
    },
    reviewId: number,
    userId: number,
  ): Promise<any> {
    const reviewAudit = await this.prisma.reviewAudit.create({
      data: {
        ...data,
        reviewId,
        userId,
        points: 5,
      },
      include: {
        review: true,
        user: {
          select: {
            id: true,
            name: true,
            score: true,
          },
        },
      },
    });

    await this.prisma.user.update({
      where: { id: userId },
      data: { score: { increment: reviewAudit.points } },
    });

    const auditCount = await this.prisma.reviewAudit.count({
      where: { reviewId, accept: true },
    });

    if (auditCount >= 5) {
      await this.prisma.review.update({
        where: { id: reviewId },
        data: { isReviewed: true },
      });
    }

    return reviewAudit;
  }

  findAll(): Promise<any[]> {
    return this.prisma.reviewAudit.findMany({
      include: {
        review: true,
        user: {
          select: {
            id: true,
            name: true,
            score: true,
          },
        },
      },
    });
  }

  findOne(id: number): Promise<any> {
    return this.prisma.reviewAudit.findUnique({
      where: { id },
      include: {
        review: true,
        user: {
          select: {
            id: true,
            name: true,
            score: true,
          },
        },
      },
    });
  }

  update(id: number, data: any): Promise<any> {
    return this.prisma.reviewAudit.update({
      where: { id },
      data,
      include: {
        review: true,
        user: {
          select: {
            id: true,
            name: true,
            score: true,
          },
        },
      },
    });
  }

  remove(id: number): Promise<any> {
    return this.prisma.reviewAudit.delete({
      where: { id },
    });
  }
}
