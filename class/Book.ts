interface BookProps {
    name: string,
    author: string,
    language: string
}

class Book {
    numberOfPages: number = Math.round(Math.random() * 1_000)
    dateOfWriting: Date = new Date()
    name: string
    author: string
    language: string

    constructor({name, author, language}: BookProps) {
        this.name = name
        this.author = author
        this.language = language
    }
}

export default Book