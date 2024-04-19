import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class TagsService {
  constructor(private prisma: PrismaService) {}

  create(reviewId: number, name: string, value: string): Promise<any> {
    return this.prisma.tag.create({
      data: {
        reviewId,
        name,
        value,
      },
    });
  }

  findAll(): Promise<any[]> {
    return this.prisma.tag.findMany();
  }

  findOne(id: number): Promise<any | null> {
    return this.prisma.tag.findUnique({
      where: { id },
    });
  }

  update(id: number, data: any): Promise<any> {
    return this.prisma.tag.update({
      where: { id },
      data,
    });
  }

  remove(id: number): Promise<any> {
    return this.prisma.tag.delete({
      where: { id },
    });
  }
}
