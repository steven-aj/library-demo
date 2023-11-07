export default class Book {
   public id: number;
   public title: string = '';
   public author?: string;
   public description?: string;
   public cover?: File | null;

   constructor(book: Book) {
      this.id = book.id;
      this._title = book.title;
      this.author = book.author;
      this.description = book.description;
   }

   private set _title(bookTitle: string) {
      if (bookTitle.length) 
         this.title = bookTitle;
      else throw new Error("A book must at least have a title.");
   }

   public addCover(fileList: FileList) {
      this.cover = fileList.item(0);
   }
}