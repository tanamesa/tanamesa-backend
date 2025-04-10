import {
    IsEmail,
    IsEnum,
    IsNotEmpty,
    IsOptional,
    IsString,
  } from 'class-validator';
import { UserType } from './enums/user-type.enum';
  
  
  export class UpdateUserDto {
    @IsOptional()
    @IsString()
    name: string;
  
    @IsOptional()
    @IsEmail()
    email: string;

    @IsOptional()
    @IsEnum(UserType)
    userType?: UserType;

  }