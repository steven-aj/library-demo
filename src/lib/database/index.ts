import Dexie, { type Table } from "dexie";
import type Book from "./models/Book";
import BookshelfController from "./controllers/BookshelfController";

class Library extends Dexie {
   public readonly bookshelf!: Table<Book, number>;

   constructor(dbName: string) {
      super(dbName);
      this.version(1).stores({
         bookshelf: '++id, title, author'
      })
   }

   public get Bookshelf(): BookshelfController {
      return new BookshelfController(this.bookshelf);
   }
}

const Database = new Library("library");
export default Database;

const { Bookshelf } = Database;
export { Bookshelf };