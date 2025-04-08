import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    UnprocessableEntityException,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './create-user-dto';
import { User } from '@prisma/client';
import { UpdateUserDto } from './update-user-dto';

@Controller('users') //route group
export class UserController {
    constructor(
        private readonly userService: UserService,
    ) { }

    @Post()
    async create(
        @Body() createUserDto: CreateUserDto,
    ): Promise<User> {

        return await this.userService.create(
            createUserDto,
        );
    }

    @Patch(':id')
    async update(
        @Param('id') id: string,
        @Body() updateUserDto: UpdateUserDto,
    ) {
        return await this.userService.update(
            Number(id),
            updateUserDto,
        );

    }

    @Delete(':id')
    async softDelete(
        @Param('id') id: string) 
        {
        return await this.userService.softDelete(Number(id));
    }

}  