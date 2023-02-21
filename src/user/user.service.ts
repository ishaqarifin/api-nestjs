import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { userDto } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(private dbService: PrismaService) {}

  async getUser() {
    return await this.dbService.user.findMany();
  }

  async createUser(data: userDto) {
    return await this.dbService.user.create({data})
  }

  async updateUser(id: number, data:any) {
    return await this.dbService.user.update({
      data,
      where: {
        userId: id
      }
    })
  }

  async deleteUser(id: number) {
    return await this.dbService.user.delete({
      where: {userId: id}
    })
  }
}
