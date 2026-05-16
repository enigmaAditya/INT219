// A type alias is a name for any type. It can be used to give a type a more descriptive name, or to create a new name for an existing type.
// type safe means that the type system can catch errors at compile time, before the code is executed. This helps to prevent bugs and improve the reliability of the code. Type safety ensures that values are used in a way that is consistent with their types, which can help to avoid unexpected behavior and runtime errors.
// Here is an example of a type alias for a string:

export{}
type name = string;
// Now we can use the type alias `name` instead of `string`:
let myName: name = "Aditya";
console.log(myName); // Output: Aditya

type num = number;
let myAge:num = 21;
console.log(myAge); // Output: 21
// We can also use type aliases to create new types based on existing types. For example, we can create a type alias for an object type:
type Person = {
    name: string;
    age: number;
};

let person1: Person = {
    name: "Aditya",
    age: 21
};
console.log(person1); // Output: { name: 'Aditya', age: 21 }

// Type aliases can also be used with union types, intersection types, and other advanced type features in TypeScript. For example, we can create a type alias for a union type:
type ID = string | number;

let userID: ID = "abc123";
console.log(userID); // Output: abc123

userID = 456;
console.log(userID); // Output: 456

// Type aliases can also be used with function types. For example, we can create a type alias for a function type:

type add = (x: number, y: number) => number;

let addNumbers: add = (x, y) => {
    return x + y;
};
console.log(addNumbers(5, 10)); // Output: 15


type Greeting = (name: string) => string;

let greet: Greeting = (name) => {
    return `Hello, ${name}!`;
};
console.log(greet("Aditya")); // Output: Hello, Aditya!



// In summary, type aliases in TypeScript allow you to create new names for types, making your code more readable and maintainable. They can be used with any type, including primitive types, object types, and complex types.


// create a car aliases for car properties(carYear, carbrand, mileage, price) and a car type, then create a car object and write a function showCar that takes a car object and prints its brand, year, price, and mileage.

type Car = {
    carYear: number;
    carBrand: string;
    mileage: number;
    price: number;
};

let myCar: Car = {
    carYear: 2020,
    carBrand: "Toyota",
    mileage: 15000,
    price: 20000
};


function showCar(car: Car): void {
    console.log(`Car Brand: ${car.carBrand}`);
    console.log(`Car Year: ${car.carYear}`);
    console.log(`Mileage: ${car.mileage} miles`);
    console.log(`Price: $${car.price}`);
}

showCar(myCar);

// in a banking application, use union types to represent account types(saving | current | loan). Create an Account object (acount number, holder name, type) and write a function to display account features based on the type.
type AccountType = "saving" | "current" | "loan";

type Account = {
    accountNumber: string;
    holderName: string;
    type: AccountType;
};

let myAccount: Account = {
    accountNumber: "123456789",
    holderName: "Aditya",
    type: "saving"
};

function displayAccountFeatures(account: Account): void {
    console.log(`Account Number: ${account.accountNumber}`);
    console.log(`Holder Name: ${account.holderName}`);
    console.log(`Account Type: ${account.type}`);
}

displayAccountFeatures(myAccount);

type User = {
    id: number;
    username: string;
    email: string;
    isActive: boolean;
    role: "admin" | "editor" | "viewer";
};
interface Student {
    rollNum: number;
    name: string;
    grade: number | string;
    isPassed: boolean;
}

let student1: Student = {
    rollNum: 53,
    name: "Aditya",
    grade: 85,
    isPassed: true
};

console.log(student1);


// API typing is the process of defining the types of data that an API can accept and return. This helps to ensure that the API is used correctly and that the data being sent and received is in the expected format. API typing can be done using TypeScript's type system, which allows developers to define interfaces, types, and type aliases for the data structures used in the API. This can help to catch errors at compile time and improve the overall reliability of the API.
