import Class from "./Class.js"

export enum GradeSexuality {
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

export class Teacher {
    klass: null | Class = null
    fullName: string
    gradeSexuality: GradeSexuality

    constructor({fullName, gradeSexuality}: TeacherProps) {
        this.fullName = fullName
        this.gradeSexuality = gradeSexuality
    }

}