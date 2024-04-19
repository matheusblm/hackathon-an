import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class ReviewsService {
  constructor(private prisma: PrismaService) {}

  async create(userId: number, data: any): Promise<any> {
    const review = await this.prisma.review.create({
      data: {
        ...data,
        tags: {
          create: data.tags,
        },
        comments: {
          create: data.comments,
        },
        isReviewed: false,
        userId,
        points: 2,
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            score: true,
          },
        },
        file: true,
        tags: true,
        comments: true,
      },
    });

    await this.prisma.user.update({
      where: { id: userId },
      data: { score: { increment: review.points } },
    });

    return review;
  }

  findAll(): Promise<any> {
    return this.prisma.review.findMany({
      include: {
        user: {
          select: {
            id: true,
            name: true,
            score: true,
          },
        },
        file: true,
        tags: true,
        comments: true,
        reviewAudits: true,
      },
    });
  }

  findOne(id: number): Promise<any> {
    return this.prisma.review.findUnique({
      where: { id },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            score: true,
          },
        },
        file: true,
        tags: true,
        comments: true,
        reviewAudits: true,
      },
    });
  }

  update(id: number, data: any): Promise<any> {
    return this.prisma.review.update({
      where: { id },
      data,
      include: {
        user: {
          select: {
            id: true,
            name: true,
            score: true,
          },
        },
        file: true,
        tags: true,
        comments: true,
        reviewAudits: true,
      },
    });
  }

  remove(id: number): Promise<any> {
    return this.prisma.review.delete({
      where: { id },
    });
  }
}
