import Book from "./Book.js";
import Class from "./Class.js";
import Teacher from "./Teacher.js";
import Student from "./Student.js";
const bookOne = new Book({
    name: 'Жила была бабка',
    author: 'Алекандр Бабкин',
    language: 'Русский'
});
const bookTwo = new Book({
    name: 'Kek',
    author: 'Jack kuck',
    language: 'English'
});
const bookThree = new Book({
    name: 'la pososala',
    author: 'Jan Pier Pulnareff',
    language: 'French'
});
const bookFour = new Book({
    name: 'Ahuel divin mactraihen',
    author: 'Gitler Kaput',
    language: 'Germany'
});
const student1 = new Student({
    fullName: 'Фио ученика 1',
    dateOfBirth: new Date('2000-02-21')
});
const student2 = new Student({
    fullName: 'Фио ученика 2',
    dateOfBirth: new Date('2001-07-22')
});
const class2A = new Class({ number: 2, letter: 'A' });
const class2B = new Class({ number: 2, letter: 'B' });
var GradeSexuality;
(function (GradeSexuality) {
    GradeSexuality["WORST"] = "\u0421\u0432\u0438\u043D\u043E\u0431\u0430\u0431\u043A\u0430";
    GradeSexuality["BAD"] = "\u041F\u0443\u0434\u0436";
    GradeSexuality["NORMAL"] = "\u041D\u043E\u0440\u043C\u0438\u0441";
    GradeSexuality["GOOD"] = "\u0421\u043E\u0441\u043A\u0430";
    GradeSexuality["AMAZING"] = "\u042F \u0431\u044B \u0432\u0434\u0443\u043B, \u043D\u043E \u043A\u043E\u043D\u0447\u0443, \u043D\u0435 \u0443\u0441\u043F\u0435\u0432 \u0437\u0430\u0441\u0443\u043D\u0443\u0442\u044C";
})(GradeSexuality || (GradeSexuality = {}));
const teacher1 = new Teacher({ fullName: 'Тамара Петровна Борзая', gradeSexuality: GradeSexuality.BAD });
const teacher2 = new Teacher({ fullName: 'Анжелика Александровна Горячая', gradeSexuality: GradeSexuality.GOOD });
export { bookOne, bookTwo, bookThree, bookFour, student1, student2, class2A, class2B, teacher1, teacher2 };
