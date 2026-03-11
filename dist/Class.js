class Class {
    students = new Set();
    teachers = new Set();
    classTeacher = null;
    number;
    letter;
    constructor({ number, letter }) {
        this.number = number;
        this.letter = letter;
    }
    addTeacher(teacher) {
        this.teachers.add(teacher);
        teacher.klass = this;
        for (const student of this.students) {
            student.teachers.add(teacher);
        }
    }
    delTeacher(teacher) {
        this.teachers.delete(teacher);
        teacher.klass = null;
        for (const student of this.students) {
            student.teachers.delete(teacher);
        }
    }
    addClassTeacher(classTeacher) {
        this.classTeacher = classTeacher;
        for (const student of this.students) {
            student.classTeacher = classTeacher;
        }
    }
    delClassTeacher() {
        this.classTeacher = null;
        for (const student of this.students) {
            student.classTeacher = null;
        }
    }
    addStudent(student) {
        this.students.add(student);
        student.klass = this;
    }
    delStudent(student) {
        this.students.delete(student);
        student.klass = null;
    }
}
export default Class;
