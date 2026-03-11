class Student {
    books = new Set();
    booksRead = new Set();
    teachers = new Set();
    classTeacher = null;
    klass = null;
    fullName;
    dateOfBirth;
    constructor({ fullName, dateOfBirth }) {
        this.fullName = fullName;
        this.dateOfBirth = dateOfBirth;
    }
    finishBook(book) {
        this.booksRead.add(book);
        this.books.delete(book);
    }
}
export default Student;
