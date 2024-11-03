import {
  Controller,
  Param,
  Body,
  Delete,
  Get,
  Post,
  Put,
} from '@nestjs/common';
import { BookService } from './book.service';

@Controller('book')
export class BookController {
  bookService: BookService;
  constructor(){
    this.bookService = new BookService();
  }
  @Get()
  getAllPosts() {
    console.log('Get all books');
    return this.bookService.getAllBooks();
  }

  @Post()
  createPost(@Body() bookDto) {
    console.log('게시글 생성');
    this.bookService.createBook(bookDto);
  }

  @Get('/:id')
  getPost(@Param('id') id: string) {    // 책 하나 읽어오기
    console.log('게시글 조회');
    return this.bookService.getBook(id);
  }

  @Delete(':/id')
  deletePost(@Param('id') id: string) {
    console.log('게시글 삭제');
    this.bookService.delete(id);
    return 'success';
  }

  @Put('/:id')
  update(@Param('id') id: string, @Body() bookDto) {
    console.log(`[${id}] 게시글 업데이트`);
    this.bookService.updateBook(id, bookDto);
  }
}
