import Book from "./Book.js"
import Class from "./Class.js"
import Teacher from "./Teacher.js"
import Student from "./Student.js"

const bookOne = new Book({
    name: 'Жила была бабка',
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

enum GradeSexuality {
    WORST = 'Свинобабка',
    BAD = 'Пудж',
    NORMAL = 'Нормис',
    GOOD = 'Соска',
    AMAZING = 'Я бы вдул, но кончу, не успев засунуть'
}

const teacher1 = new Teacher({fullName: 'Тамара Петровна Борзая', gradeSexuality: GradeSexuality.BAD})
const teacher2 = new Teacher({fullName: 'Анжелика Александровна Горячая', gradeSexuality: GradeSexuality.GOOD})

export {bookOne, bookTwo, bookThree, bookFour, student1, student2, class2A, class2B, teacher1, teacher2}