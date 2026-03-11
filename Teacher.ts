import Class from "./Class.js"

enum GradeSexuality {
    WORST = 'Свинобабка',
    BAD = 'Пудж',
    NORMAL = 'Нормис',
    GOOD = 'Соска',
    AMAZING = 'Я бы вдул, но кончу, не успев засунуть'
}


interface TeacherProps {
    fullName: string
    gradeSexuality: GradeSexuality
}

class Teacher {
    klass: null | Class = null
    fullName: string
    gradeSexuality: GradeSexuality

    constructor({fullName, gradeSexuality}: TeacherProps) {
        this.fullName = fullName
        this.gradeSexuality = gradeSexuality
    }

}

export default Teacher