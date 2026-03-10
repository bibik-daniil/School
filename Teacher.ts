import Class from "./Class.ts"

type Klass = null | Class


interface TeacherValues {
    fullName: string
    gradeSexuality: string
}

class Teacher {
    klass: Klass = null
    fullName: string
    gradeSexuality: string

    constructor({fullName, gradeSexuality}: TeacherValues) {
        this.fullName = fullName
        this.gradeSexuality = gradeSexuality
    }

}

export default Teacher