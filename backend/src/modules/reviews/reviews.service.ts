import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class ReviewsService {
  constructor(private prisma: PrismaService) {}

  create(userId: any, data: any): Promise<any> {
    return this.prisma.review.create({
      data: {
        ...data,
        userId,
      },
      include: {
        user: true,
        file: true,
        tags: true,
        comments: true,
      },
    });
  }

  findAll(): Promise<any> {
    return this.prisma.review.findMany({
      include: {
        user: true,
        file: true,
        tags: true,
        comments: true,
      },
    });
  }

  findOne(id: number): Promise<any> {
    return this.prisma.review.findUnique({
      where: { id },
      include: {
        user: true,
        file: true,
        tags: true,
        comments: true,
      },
    });
  }

  update(id: number, data: any): Promise<any> {
    return this.prisma.review.update({
      where: { id },
      data,
      include: {
        user: true,
        file: true,
        tags: true,
        comments: true,
      },
    });
  }

  remove(id: number): Promise<any> {
    return this.prisma.review.delete({
      where: { id },
    });
  }
}
