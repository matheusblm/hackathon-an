import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class FilesService {
  constructor(private prisma: PrismaService) {}

  create(createFileData: { reviewId: number; url: string }): Promise<any> {
    return this.prisma.file.create({
      data: {
        ...createFileData,
      },
    });
  }

  findAll(): Promise<File[]> {
    return this.prisma.file.findMany();
  }

  findOne(id: number): Promise<any> {
    return this.prisma.file.findUnique({
      where: { id },
    });
  }

  update(id: number, url: string): Promise<any> {
    return this.prisma.file.update({
      where: { id },
      data: { url },
    });
  }

  remove(id: number): Promise<any> {
    return this.prisma.file.delete({
      where: { id },
    });
  }
}
