import Class from "./Class.js"
import Book from "./Book.js"
import {Teacher} from "./Teacher.js"

interface StudentProps {
    fullName: string
    dateOfBirth: Date
}

class Student {
    books = new Set<Book>()
    booksRead = new Set<Book>()
    teachers = new Set<Teacher>()
    classTeacher: null | Teacher = null
    klass: null | Class = null
    fullName: string
    dateOfBirth: Date

    constructor({fullName, dateOfBirth}: StudentProps) {
        this.fullName = fullName
        this.dateOfBirth = dateOfBirth
    }

    finishBook(book: Book) {
        this.booksRead.add(book)
        this.books.delete(book)
    }
}

export default Student