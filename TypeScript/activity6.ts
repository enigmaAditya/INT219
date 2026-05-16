// Declare an interface User twice -- first with name, then with age -- and create  and object that uses the merged interface to display both properties.

interface User{
    myname:string
};
interface User{
    age: number
};

let user1 : User = {
    myname:"Aditya",
    age:21
}

console.log(user1);