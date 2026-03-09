import Book from "./classBook.js"
import Class from "./classClass.js"
import Teacher from "./classTeacher.js"
import Student from "./classStudent.js"

const bookOne = new Book({
    name: 'Жила была бабка 4',
    author: 'Алекандр Бабкин', 
    language: 'Русский'
})
const bookTwo = new Book({
    name: 'Kek',
    author: 'Jack kuck', 
    language: 'English'
})
const bookThree = new Book({
    name: 'la pososala', 
    author: 'Jan Pier Pulnareff', 
    language: 'French'
})
const bookFour = new Book({
    name: 'Ahuel divin mactraihen', 
    author: 'Gitler Kaput', 
    language: 'Germany'
})

const student1 = new Student({
    fullName: 'Фио ученика 1',
    dateOfBirth: new Date('2000-02-21')
})

const student2 = new Student({
    fullName: 'Фио ученика 2',
    dateOfBirth: new Date('2001-07-22')
})

const class2A = new Class({number: 2, letter: 'A'})
const class2B = new Class({number: 2, letter: 'B'})


class2A.addStudent(student2)
class2B.addStudent(student1)

const teacher1 = new Teacher({fullName: 'Тамара Петровна Борзая', gradeSexuality: 'Пудж'})
const teacher2 = new Teacher({fullName: 'Анжелика Александровна Горячая', gradeSexuality: 'Соска'})

class2A.addTeacher(teacher1)
class2A.addTeacher(teacher2)
//class2A.addClassTeacher(teacher1)

console.log(student2)