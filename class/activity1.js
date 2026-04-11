// Class:
// A blueprint for creating objects with properties and methods
// It encapsulates data and behavior related to that data
// It promotes code reusability and modularity
class User{
    constructor(name, gender, email, dob){
        this.name = name;
        this.email = email;
        this.gender = gender;
        this.dob = dob;
    }
    viewData(){
        console.log(this.name+" is "+this.gender);
    }
    age(){
        let year = new Date().getFullYear();
        let age = year-this.dob;
        console.log(this.name+" is "+age+" years old")
    }
    //methods:
    eat(){
        console.log("User eats food")
    }
    sleep(){
        console.log("User goes to bed")
    }
    login(){
        console.log("User logged in")
    }
    logout(){
        console.log("User logged out")
    }
    sendEmail(){
        console.log("Email sent to "+this.email)
    }

}

let u1 = new User("Aditya", "male", "aditya@example.com", 2004);
u1.viewData();
u1.age();
u1.sendEmail();


