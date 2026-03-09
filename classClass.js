class Class {
    students = new Set()
    teachers = new Set()
    classTeacher = null

    constructor({number, letter}) {
        this.number = number
        this.letter = letter
    }
    
    addTeacher(teacher) {
        this.teachers.add(teacher)
        teacher.klass = this

        for (const student of this.students) {
            student.teachers.add(teacher)
        }
    }

    delTeacher(teacher) {
        this.teachers.delete(teacher)
        teacher.klass.delete(this)

        for (const student of this.students) {
            student.teachers.delete(teacher)
        }
    }

    addClassTeacher(classTeacher) {
        this.classTeacher = classTeacher

        for (const student of this.students) {
            student.classTeacher = classTeacher
        }
    }
    

    delClassTeacher(classTeacher) {
        this.classTeacher.delete(classTeacher)
        for (const student of this.students) {
            student.classTeacher.delete(classTeacher)
        }
    }

    addStudent(student) {
        this.students.add(student)
        student.klass = this
    }

    delStudent(student) {
        this.students.delete(student)
        delete student.klass     
    }

}

export default Class