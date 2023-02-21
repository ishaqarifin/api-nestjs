import { Prisma } from "@prisma/client";
import { IsNotEmpty, IsString } from "class-validator";

export class userDto implements Prisma.UserCreateInput {

  @IsNotEmpty()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsString()
  phone: string;

  @IsNotEmpty()
  @IsString()
  fullName: string
}
