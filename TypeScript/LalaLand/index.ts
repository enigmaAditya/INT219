export{}
// let myName:string = "Aditya";
// console.log(myName);
// let marks:number= 50;
// console.log(marks);
// let isPass:boolean=true;
// console.log(isPass);
// let num2:bigint=123456789n;
// console.log(num2);
// let unassigned:undefined;
// console.log(unassigned);
// let empty:null=null;
// console.log(empty);
// let game:any="zxc";
// console.log(game);
// let personName:unknown = "Ankit";
// if(typeof personName==="string"){
//     console.log(personName.toUpperCase());
// }

// function add(a:number, b:number):number{
//     return a+b;
// }
// // Array
// let scores:number[]=[150, 350, 650, 750];
// let fruits:string[]=["apple","orange","banana"];
// console.log(fruits);
// console.log(fruits.length);

// // objects:
// let student:{name:string, marks:number, ispass:boolean, branch:string}={
//     name:"merry",
//     marks:50,
//     ispass:true,
//     branch:"CSE",
// };
// console.log(student);
// console.log(student.marks);
// console.log(myName);
// console.log(typeof(myName));

let person:[string, number, boolean]=["Adii", 21, true];
console.log(person[0])
console.log(person[1])
console.log(person[2])

// destructuring it:
// extracting values from 
let [myname, age, isactive]=person;
console.log(myname)
console.log(age)
console.log(isactive)

// Enum:
// an enum is a collection of related values that are given meaningful names instead of using raw numbers of strings.
enum direction{
    up,
    down,
    left,
    right
};
let move:direction=direction.up;
console.log(move)
let move1:direction=direction.down;
console.log(move1)

// Union types:
// Union types allow a variable to hold values of multiple types. It is denoted by the pipe (|) symbol.
let score:number|string=100;
console.log(score);
score="A+";
console.log(score);

// Type Aliases:
// Type aliases allow you to create a new name for a type. It can be used to simplify complex types or to give a more meaningful name to a type.
type Employee={
    name:string,
    age:number,
    department:string
};
let emp1:Employee={
    name:"John",
    age:30,
    department:"HR"
};
console.log(emp1)

// write a function checkStatus that returns either a number or boolean. The function should return 1 if a random value is greater than 0.05, otherwise return false, sore the result in a variable and print it to the console
function checkStatus():number|boolean{
    let randomValue=Math.random();
    if(randomValue>0.05){
        return 1;
    }else{
        return false;
    }
}
let result=checkStatus();
console.log(result)

// Interfaces in typescript:
// interfaces are used to define the structure of an object. It can be used to specify the properties and methods that an object should have.
interface User{
    name:string,
    age:number
}
let myUser:User={
    name:"Alice",
    age:25
};
console.log(myUser);        
console.log(myUser.name);

interface Student{
    name:string,
    grade:number

};
function printStudentInfo(student:Student):void{
    console.log(`Welcome, ${student.name}! Your grade is ${student.grade}.`);
}
let student1:Student={
    name:"Bob",
    grade:85
};
printStudentInfo(student1);
