export{}
let msg: string='Hello TS';
console.log(msg);

// type intersection

type A ={
    myname: string;
};

type B ={
    age: number;
};

type person= A & B;
let person1: person = {
    myname:"Aditya",
    age:21
}
console.log(person1);