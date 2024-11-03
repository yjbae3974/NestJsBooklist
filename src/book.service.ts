import { BookDto } from './book.model';

export class BookService {
  books = [];

  getAllBooks() {
    return this.books;
  }

  createBook(bookDto: BookDto) {
    const id = this.books.length + 1;
    this.books.push({
      id: id.toString(),
      ...bookDto,
      createdDt: new Date(),
    });
  }

  getBook(id) {
    const book = this.books.find((book) => book.id === id);
    console.log(book);
    return book;
  }

  delete(id) {
    const filteredBooks = this.books.filter((book) => book.id !== id);
    this.books = [...filteredBooks];
  }

  updateBook(id, bookDto: BookDto) {
    const updateIndex = this.books.findIndex((book) => book.id === id);
    const updatedBook = { id, ...bookDto, updatedDt: new Date() };
    this.books[updateIndex] = updatedBook;
    return updatedBook;
  }
}