import { Controller, Get, Param } from '@nestjs/common';

@Controller('books')
export class BooksController {
  @Get("/:name")
  book(@Param('name') name: string) {
    return 'hallo ${name}';
  }
}
