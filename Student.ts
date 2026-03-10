import Class from "./Class.ts"
import Book from "./Book.ts"
import Teacher from "./Teacher.ts"

type ClassTeacher = null | Teacher
type Klass = null | Class

interface StudentValues {
    fullName: string
    dateOfBirth: Date
}

class Student {
    books = new Set()
    booksRead = new Set()
    teachers = new Set()
    classTeacher: ClassTeacher = null
    klass: Klass = null
    fullName: string
    dateOfBirth: Date

    constructor({fullName, dateOfBirth}: StudentValues) {
        this.fullName = fullName
        this.dateOfBirth = dateOfBirth
    }

    finishBook(book: Book) {
        this.booksRead.add(book)
        this.books.delete(book)
    }
}

export default Student