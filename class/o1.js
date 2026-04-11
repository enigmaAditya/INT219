// let student={
//     fullname:"Jack",
//     marks:95,
//     age:20,
//     printmarks:()=>{
//         console.log("Marks obtained: "+this.marks)
//     }
// };

// let employee={
//     caltax(){
//         console.log("tax rate is 10%");
//     },
// };
// let employee1={
//     salary:10000,
// };
// let employee2={
//     salary:20000,
// };
// let employee3={
//     salary:30000,
// };

// employee1.__proto__=employee;
// employee2.__proto__=employee;
// employee3.__proto__=employee;

// employee1.caltax()


// IS object have a special typeof property called prototype
// A javascript object is an entity having state and behaviour (properties and method)
// We can setprototype using __proto__
// prototype is also anobject
// Default prototype chain:
// arr -> Array.prototype -> Object.prototype -> null
// arr.push(), arr.pop()
// Object,prototype is the top level object in the prototype chain in JS
// Every object in JS inherits properties and methods fron Object.prototype

//Object.create:
// let user={
//     alarm(){
//         console.log(this.name+" please update your passWord!")
//     }
// }
//create a new object with user as a prototype:
// let admin=Object.create(user);
// admin.name="Aditya"
// admin.role="Admin"
// console.log(admin.role)
// admin.alarm()

// let member=Object.create(user);
// member.name="Ayush"
// member.role="Student"
// member.alarm()

// let employee4=Object.create(employee)
// employee.salary=40000
// employee4.caltax()


// Constructor function:
// These are essential in JS for creating multiple, similar objects efficiently, acting as a blueprint todefine shared properties and methods
// A constructor function is a regular function used with the new 

// function person(name, YOB, occupation, ){
//     this.name=name
//     this.yob=YOB
//     this.occupation=occupation
    
// }
//creating Objects:
// let jack=new person("Jack", 2004, "Student")
// let Aditya=new person("Aditya", 1999, "Teacher")

// console.log(Aditya.calculateAge())
// console.log(jack.calculateAge())
//instead of doing things in this way we will create a prototype, this will ensure that every time when the object calls the function it does not occupy space in the memory bre creating a separate function

// person.prototype.calculateAge=function(){
//     let currentYear = new Date().getFullYear()
//     return currentYear-this.yob
    
// }
// person.prototype.city="London"

// let Atif=new person("Atif", 2005, "Singer")
// console.log(Atif.calculateAge())
// console.log(Atif.city)
//In JS, functions are special type of objects


// Prototype Chaining:
// It is the process JS uses to lookup properties and methods when they are not found on the object itself.
// Each object has an internal link called [[Prototype]] (accessible via __proto__ in many browsers).
// If a property or method isn't onthe object, JS looks up the chain until it finds it or reaches null.

// Classes in JS
// class car{
//     start(){
//         console.log("Start my car")
//     }
//     stop(){
//         console.log("Car has stopped")
//     }
//     carBrand(brand){
//         this.brand=brand
//     }
// }
// // Creating Object:
// let sedan = new car();
// sedan.carBrand("Suzuki")

// let car1= new car()
// car1.carBrand("MG")

// class SUV extends car{
    
// }

// Class creation:
// class Person{
// constructor(name, gender){
//     this.name=name;
//     this.gender=gender;
// }

//     eat(){
//         console.log("Person eats food")
//     }
//     sleep(){
//         console.log("Person goes to bed")
//     }
//     setName(name){
//         this.name=name;
//     }
//     getData(){
//         console.log(this.name+" is "+this.gender)
//     }

// }
// Object creation:
// let p1 = new Person();
// p1.setName("Aditya")
// use of constructor
// let p2 = new Person("Ayush", "male")
// p2.getData()

// Constructor:
// constructor method is automatically invoked when 'new' keyword is used
// It initializes object when created
// it set initial property values

// Inheritance:
// class Engineer extends Person{
//     constructor(name, gender, branch){
//         super(name,gender);
//         this.branch=branch;
//     }

//     work(){
//         console.log("Solve problems!, build something")
//     }
// }

// class Doctor extends Person{
//     constructor(name, gender,specialization){
//         super(name,gender);
//         this.specialization=specialization;
//     }
//     treat(){
//         console.log("Treat patients, save lives")
//     }
//     sleep(){
//         console.log("Doctor needs rest too!")
//     }
// }

// let e1 = new Engineer("Aditya", "male", "Computer Science");
// let d1 = new Doctor("Dr. Aadarshni", "female", "Gynecology");
// d1.getData()
// d1.treat()
// d1.sleep()

// Super keyword:
// Used to call the constructor of the parent class and to access its properties and methods
// In the constructor of the child class, we use super() to call the parent constructor and initialize inherited properties. 
// We can also use super.methodName() to call a method from the parent class, even if it has been overridden in the child class.

// Synchronous Programming:
// code executes line by line in sequence
// Each task waits for the previous one to complete its execution
// This can block execution and delay UI responses
// console.log("Hello")
// console.log("Hello Aditya")
// console.log("Hello World")

// Asynchronous Programming:
// code can execute independently of the main program flow
// Tasks can run in the background without blocking the main thread
// This allows for better performance and responsiveness
// Used for tasks like API calls, file handling, timers, etc.
// asynchronous code execution allows to execute other code while waiting for a task to complete, improving performance and user experience.
// console.log("This will be printed first")
// console.log("This will be printed second")
// function hello(){
//     console.log("Hello")
// }
// setTimeout(hello, 5000)
// console.log("This will be printed third")
// console.log("This will also be printed fourth")


// Question:
// Write a js function getData() that simulates asynchronous data fetching with a delay and ensures that multiple data items (1 to 5) are fetched in a sequential order.

// 1st method: using setTimeout and callback  
// this will be the parallel execution of the code, we will not get the data in sequential order
// function getData(item){
//         setTimeout(()=>{
//             console.log("Data item "+item+" fetched")
//         }, 5000)
// }
// getData(1);
// getData(2);
// getData(3);
// getData(4);
// getData(5);

// 2nd method: callback hell:
// function getData(item, next){ // this is a callback function, it will be called after the data is fetched
//     setTimeout(()=>{
//         console.log("Data item "+item+" fetched")
//         if(next){ // this will check if the next function is defined, if it is defined then it will call the next function, this is how we can ensure that the data is fetched in sequential order
//             next();
//         }
//     }, 2000)
// }
// // pyramid of doom, callback hell, nested callbacks, spaghetti code, this ensures that the data is fetched in sequential order but it is not a good practice to write code in this way as it becomes difficult to read and maintain, it also leads to callback hell, where we have multiple nested callbacks, making the code hard to read and debug.
// getData(1, ()=>{
//     getData(2, ()=>{
//         getData(3, ()=>{
//             getData(4, ()=>{
//                 getData(5) // 
//             })
//         })
//     })
// })

// method 3: using promises, this is a better way to handle asynchronous code as it allows us to write cleaner and more readable code, it also helps to avoid callback hell, it also allows us to handle errors in a better way, it also allows us to chain multiple asynchronous operations together, ensuring that they are executed in a sequential order.
function getData(item){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Data item "+item+" fetched")
            resolve(); // this will resolve the promise and allow us to chain the next promise
        }, 2000)
    })
}
function fetchData(){
    for(let i=1; i<=5; i++){
        getData(i).then(()=>{
            if(i===5){
                console.log("All data items fetched")
            }
        })
    }
}

// method 4: using async/await, this is the most modern way to handle asynchronous code in JS, it allows us to write asynchronous code in a synchronous manner, making it easier to read and maintain, it also allows us to handle errors using try/catch blocks, it also allows us to chain multiple asynchronous operations together, ensuring that they are executed in a sequential order.
async function fetchData(){
    for(let i=1; i<=5; i++){
        await getData(i); // this will wait for the promise to resolve before moving to the next iteration, ensuring that the data is fetched in sequential order
    }
    console.log("All data items fetched")
}
fetchData();


// promise is an object that represents the future result of an asynchronous operation, it can be in one of three states: pending, fulfilled, or rejected.
// pending : the initial state, neither fulfilled nor rejected.
// fulfilled: the operation completed successfully, and the promise has a resolved value.
// rejected: the operation failed, and the promise has a reason for the failure (error). (the result is an error object or a message indicating the reason for the failure)
// It allows us to handle asynchronous operations in a more elegant way, avoiding callback hell and making our code more readable and maintainable.
// .then() method is used to handle the fulfilled state of a promise, it takes a callback function that will be executed when the promise is fulfilled, and it receives the resolved value as an argument.
// .then() receives the result from resolved().
// .catch() method is used to handle the rejected state of a promise, it takes a callback function that will be executed when the promise is rejected, and it receives the reason for the failure as an argument.

function getpromise(){
    return new Promise((resolve, reject)=>{
        console.log("I ama promise");
        reject("error occured")
    })
}
let p1=getpromise();
p1.then((result)=>{
    console.log("fulfilled",result)
}).catch((error)=>{
    console.log("rejected",error)
})

function getdata(dataId){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(dataId===4){
                reject("Data item not found"+dataId)
            }else{
                console.log("Data item "+dataId+" fetched")
                resolve()
            }
        }, 5000)
    })
}
getData(1)
.then(()=>getData(2))
.then(()=>getData(3).catch((error)=>{
    console.log(error)
}))

// async/await is a syntactic sugar over promises, it allows us to write asynchronous code in a synchronous manner, making it easier to read and maintain, it also allows us to handle errors using try/catch blocks, it also allows us to chain multiple asynchronous operations together, ensuring that they are executed in a sequential order.
async function fetchData(){
    await getData(1).catch((error)=>console.log(error));
    await getData(2).catch((error)=>console.log(error));
    await getData(3).catch((error)=>console.log(error));
    await getData(4).catch((error)=>console.log(error));
    await getData(5).catch((error)=>console.log(error));
    console.log("All data items fetched")
}
fetchData();

// try...catch block is used to handle errors in JS, it allows us to write code that can handle exceptions gracefully, preventing the program from crashing and providing a way to recover from errors. The code that may throw an error is placed inside the try block, and if an error occurs, it is caught by the catch block, where we can handle the error appropriately (e.g., logging it, showing a user-friendly message, etc.).
// you want to stop on the first error and not execute the remaining code, you can use return statement in the catch block to exit the function immediately after handling the error. This way, if an error occurs, the function will stop executing further code and return control to the caller.

