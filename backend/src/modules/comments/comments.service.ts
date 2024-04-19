import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class CommentsService {
  constructor(private prisma: PrismaService) {}

  create(reviewId: number, text: string): Promise<any> {
    return this.prisma.comment.create({
      data: {
        reviewId,
        text,
      },
    });
  }

  findAll(): Promise<any[]> {
    return this.prisma.comment.findMany();
  }

  findOne(id: number): Promise<any | null> {
    return this.prisma.comment.findUnique({
      where: { id },
    });
  }

  update(id: number, text: string): Promise<any> {
    return this.prisma.comment.update({
      where: { id },
      data: { text },
    });
  }

  remove(id: number): Promise<any> {
    return this.prisma.comment.delete({
      where: { id },
    });
  }
}
