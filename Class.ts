import {Student} from "./Student.js"
import {Teacher} from "./Teacher.js"

interface ClassProps {
    number: number
    letter: string
}

export class Class {
    students = new Set<Student>()
    teachers = new Set<Teacher>()
    classTeacher: null | Teacher = null
    number: number
    letter: string

    constructor({number, letter}: ClassProps) {
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
    

    delClassTeacher() {
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