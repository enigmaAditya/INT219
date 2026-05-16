// write a ts program to create a generic class Student<T> that:
// stores student name and marks of anytype includes a constructor to initialize values includes a method dispaly() to print student details;
//  create two objects: one storing marks (number),, one storing grade(string)
class Student<T> {
    name: string;
    marks: T;

    constructor(name: string, marks: T) {
        this.name = name;
        this.marks = marks;
    }

    display() {
        console.log(`Student Name: ${this.name}`);
        console.log(`Student Marks: ${this.marks}`);
    }
}

const student1 = new Student<number>("Aditya", 98);
const student2 = new Student<string>("Ayush", "O");

student1.display();
student2.display();

