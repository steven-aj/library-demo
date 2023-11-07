import { liveQuery, type Table } from "dexie";
import Book from "../models/Book";

export default class Bookshelf {
   private table: Table<Book, number>;

   constructor(bookshelf: Table<Book, number>) {
      this.table = bookshelf;
   }

   public get store() {
      return liveQuery(async () => await this.table.toArray());
   }

   public addBook(book: any) {
      try {
         book = new Book(book);
         return this.table.add(book);
      } catch (cause) { throw new Error("Failed to add book", { cause }) }
   }

   public getBook(book: Book) {
      return this.table.get(book.id);
   }

   public updateBook(book: Book) {
      return this.table.update(book.id, book);
   }

   public removeBook(id: number) {
      return this.table.delete(id);
   }
}