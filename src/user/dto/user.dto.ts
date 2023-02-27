import { ApiProperty } from "@nestjs/swagger";
import { Prisma } from "@prisma/client";
import { IsNotEmpty, IsString } from "class-validator";

export class userDto implements Prisma.UserCreateInput {

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  email: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  password: string;

  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  phone: string;

  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  fullName: string
}
