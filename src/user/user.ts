import { UserType } from "./enums/user-type.enum"

export interface User {
    id: number;
    name: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
    userType: UserType
}