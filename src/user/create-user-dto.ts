import {
    IsEmail,
    IsEnum,
    IsNotEmpty,
    IsOptional,
    IsString,
  } from 'class-validator';
import { UserType } from './enums/user-type.enum';
  
  
  export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    fullName: string;
  
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsOptional()
    @IsEnum(UserType)
    userType?: UserType;

  }