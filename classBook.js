class Book {
    constructor({name, author, language}) {
        this.name = name
        this.author = author
        this.pages = Math.round(Math.random() * 1_000)
        this.language = language
        this.dateOfWriting = new Date()
    }
}

export default Book