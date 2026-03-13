import * as variables from "./variables.js"

variables.student1.books.add(variables.bookOne)
variables.student1.books.add(variables.bookTwo)
variables.student1.books.add(variables.bookThree)

variables.student2.books.add(variables.bookTwo)
variables.student2.books.add(variables.bookFour)

variables.student1.finishBook(variables.bookThree)

variables.class2A.addStudent(variables.student2)
variables.class2B.addStudent(variables.student1)

variables.class2A.addTeacher(variables.teacher1)
variables.class2A.addTeacher(variables.teacher2)
variables.class2A.addClassTeacher(variables.teacher1)

console.log(variables.student2)