import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { userDto } from './dto/user.dto';

@Controller()
export class UserController {

  // //menggunakan OOP
  // private userService;
  // constructor() {
  //   this.userService = new UserService();
  // }

  //dependensi jekson
  constructor(private userService: UserService) {}

  @Get("getuser")
  async getUser(){
    return await this.userService.getUser();
  }

  @UsePipes(ValidationPipe)
  @Post("createuser")
  async createUser(@Body() body: userDto){
    return this.userService.createUser(body);
  }

  @UsePipes(ValidationPipe)
  @Patch('/:id')
  async updateUser(@Param('id', ParseIntPipe) id, @Body() Body) {
    return this.userService.updateUser(id, Body);
  }

  @UsePipes(ParseIntPipe)
  @Delete('/:id')
  async deleteUser(@Param('id', ParseIntPipe) id) {
    return this.userService.deleteUser(id)
  }
}
