// create a function that simulates a user session tracker, each user should have theirr own privaye login count, that increases every time they  access the session;
// function createSession(username) {
//     let loginCount = 0; // This variable is private to the createUserSessionTracker function
//     return {
//         login: function() {// This function has access to the loginCount variable through closure
//             loginCount++;
//         },
//         getLoginCount: function() {
//             return loginCount;
//         }
//     };
// }
// const user1 = createSession('Aditya');//what is happening here is that we are creating a new session for user1 by calling the createSession function with the username 'Aditya'. The createSession function returns an object with two methods: login and getLoginCount. The login method increments the loginCount variable, which is private to the createSession function, and the getLoginCount method returns the current value of loginCount. Each time user1.login() is called, it increases the login count for that user session, and user1.getLoginCount() can be used to retrieve the current login count for that session.
// user1.login();
// user1.login();
// console.log(user1.getLoginCount()); // Output: 2
// console.dir(user1); // Output: { login: [Function], getLoginCount: [Function] }

// create a function that  returns a closure based  counter function which  when called repeatidly increments and remembers the count privately across calls:
// function createCounter(){
//     let count = 0;
//     return function (){
//         count++;
//         return count;
//     }

// }
// const counter = createCounter();
// console.log(counter()); // Output: 1
// console.log(counter());
// console.log(counter());


// create a function createBankAccount that uses closures  tokeep a private balance and provides deposite(amount), withdraw(amount), and getBalance() methods to manage it:
function createBankAccount(){
    let balance = 0;
    return {
        deposit: function(amount) {
            balance += amount;
        },
        withdraw: function(amount) {
            if (amount <= balance) {
                balance -= amount;
            }
        },
        getBalance: function() {
            return balance;
        }
    };


}
const account = createBankAccount();
account.deposit(100);
account.withdraw(30);
console.log(account.getBalance()); // Output: 70

console.dir(account); // Output: { deposit: [Function], withdraw: [Function], getBalance: [Function] }

