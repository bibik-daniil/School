class Book {
    numberOfPages = Math.round(Math.random() * 1_000);
    dateOfWriting = new Date();
    name;
    author;
    language;
    constructor({ name, author, language }) {
        this.name = name;
        this.author = author;
        this.language = language;
    }
}
export default Book;
