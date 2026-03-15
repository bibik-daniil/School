import Book from "./Book.js"
import Class from "./Class.js"
import {Teacher, GradeSexuality} from "./Teacher.js"
import Student from "./Student.js"

export const bookOne = new Book({
    name: 'Жила была бабка',
    author: 'Алекандр Бабкин', 
    language: 'Русский'
})
export const bookTwo = new Book({
    name: 'Kek',
    author: 'Jack kuck', 
    language: 'English'
})
export const bookThree = new Book({
    name: 'la pososala', 
    author: 'Jan Pier Pulnareff', 
    language: 'French'
})
export const bookFour = new Book({
    name: 'Ahuel divin mactraihen', 
    author: 'Gitler Kaput', 
    language: 'Germany'
})

export const student1 = new Student({
    fullName: 'Фио ученика 1',
    dateOfBirth: new Date('2000-02-21')
})

export const student2 = new Student({
    fullName: 'Фио ученика 2',
    dateOfBirth: new Date('2001-07-22')
})

export const class2A = new Class({
    number: 2, 
    letter: 'A'
})
export const class2B = new Class({
    number: 2, 
    letter: 'B'
})

export const teacher1 = new Teacher({
    fullName: 'Тамара Петровна Борзая', 
    gradeSexuality: GradeSexuality.BAD
})
export const teacher2 = new Teacher({
    fullName: 'Анжелика Александровна Горячая', 
    gradeSexuality: GradeSexuality.GOOD
})