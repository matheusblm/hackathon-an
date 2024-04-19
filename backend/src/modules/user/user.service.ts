import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(data: any): Promise<any> {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    return this.prisma.user.create({
      data: { ...data, password: hashedPassword },
    });
  }

  findAll(): Promise<any[]> {
    return this.prisma.user.findMany({
      include: {
        reviews: true,
      },
    });
  }

  findOne(id: number): Promise<any> {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }

  update(id: any, data: any): Promise<any> {
    return this.prisma.user.update({
      where: { id },
      data,
    });
  }

  remove(id: any): Promise<any> {
    return this.prisma.user.delete({
      where: { id },
    });
  }

  findAllRanked(): Promise<any[]> {
    return this.prisma.user.findMany({
      orderBy: {
        score: 'desc',
      },
    });
  }
}
