import Class from "./Class.js";
import Book from "./Book.js";
import { default as Teacher } from "./Teacher.js";

interface StudentProps {
  fullName: string;
  dateOfBirth: Date;
}

export default class Student {
  books = new Set<Book>();
  booksRead = new Set<Book>();
  teachers = new Set<Teacher>();
  classTeacher: null | Teacher = null;
  klass: null | Class = null;
  fullName: string;
  dateOfBirth: Date;

  constructor({ fullName, dateOfBirth }: StudentProps) {
    this.fullName = fullName;
    this.dateOfBirth = dateOfBirth;
  }

  finishBook(book: Book) {
    this.booksRead.add(book);
    this.books.delete(book);
  }
}