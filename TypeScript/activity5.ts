// create Typescript program that defines Employee and Salary types, combines them using intersection (&) into EmployeeDetails, and prints employee's ID, name and salry.

type Employee={
    EID: number,
    Ename: string
};
type Salary = {
    ESalary: number;
};

type EmployeeDetails = Employee & Salary ;

let employee1: EmployeeDetails ={
    EID:1,
    Ename:"Aditya",
    ESalary:500000
}

console.log(employee1);
