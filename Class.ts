import Student from "./Student.ts"
import Teacher from "./Teacher.ts"

type ClassTeacher = null | Teacher

interface ClassValues {
    number: number
    letter: string
}

class Class {
    students = new Set<Student>()
    teachers = new Set<Teacher>()
    classTeacher: ClassTeacher = null
    number: number
    letter: string

    constructor({number, letter}: ClassValues) {
        this.number = number
        this.letter = letter
    }
    
    addTeacher(teacher: Teacher) {
        this.teachers.add(teacher)
        teacher.klass = this

        for (const student of this.students) {
            student.teachers.add(teacher)
        }
    }

    delTeacher(teacher: Teacher) {
        this.teachers.delete(teacher)
        teacher.klass = null

        for (const student of this.students) {
            student.teachers.delete(teacher)
        }
    }

    addClassTeacher(classTeacher: Teacher) {
        this.classTeacher = classTeacher

        for (const student of this.students) {
            student.classTeacher = classTeacher
        }
    }
    

    delClassTeacher(classTeacher: Teacher) {
        this.classTeacher = null
        for (const student of this.students) {
            student.classTeacher = null
        }
    }

    addStudent(student: Student) {
        this.students.add(student)
        student.klass = this
    }

    delStudent(student: Student) {
        this.students.delete(student)
        student.klass = null     
    }

}

export default Class