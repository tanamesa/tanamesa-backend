import {
    HttpException,
    Injectable,
    UnprocessableEntityException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateUserDto } from './create-user-dto';
import { User } from '@prisma/client';
import { UpdateUserDto } from './update-user-dto';


@Injectable()
export class UserService {
    constructor(
        private readonly prismaService: PrismaService,
    ) { }

    async create(
        createUserDto: CreateUserDto,
    ): Promise<User> {
        try {
            return await this.prismaService.user.create({
                data: {
                    name: createUserDto.fullName, email: createUserDto.email
                }
            })
        } catch (error) {
            throw new UnprocessableEntityException()
        }
    }

    async findByEmail(email: string): Promise<User>{
        return  await this.prismaService.user.findUniqueOrThrow({ where: { email } });
    }

    async findAll(): Promise<User[]> {
        return await this.prismaService.user.findMany();
    }

    async findOne(id: number): Promise<User> {
        return await this.prismaService.user.findUniqueOrThrow({ where: { id } });

    }

    async update(
        id: number,
        updateUserDto: UpdateUserDto,
    ): Promise<User> {
        await this.findOne(id);
        try {
            return await this.prismaService.user.update(
                { where: { id }, data: { ...updateUserDto } }
            );
        } catch (error) {
            throw new UnprocessableEntityException()
        }
    }


    async softDelete(id: number) {
        return this.prismaService.user.update({
          where: { id },
          data: {
            deleted_at: new Date()
          }
        })
      }
    }
