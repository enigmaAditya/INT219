// write a ts program to create a generic class Account<T> that stores account holder name and account details of any type with a constructor and a display() method, and a generic function process Transition<U> that accepts and prints any type of transaction data, then create two objects(one with balance as number and one with account status as string), and call both the class method and the function
class Account<T> {
    holderName: string;
    accountDetails: T;

    constructor(holderName: string, accountDetails: T) {
        this.holderName = holderName;
        this.accountDetails = accountDetails;
    }

    display() {
        console.log(`Account Holder Name: ${this.holderName}`);
        console.log(`Account Details: ${this.accountDetails}`);
    }
}

function processTransaction<U>(transactionData: U): void {
    console.log(`Processing Transaction Data: ${transactionData}`);
}

const account1 = new Account<number>("Aditya", 1500);
const account2 = new Account<string>("Sahil", "Active");

account1.display();
account2.display();

processTransaction("Deposit of $500");
processTransaction(200+" added");

// generic contraists in ts means restricting the type that a generic can accept. Instead of allowing any type, you tell it: "only types with certain properties are allowed."

interface Lengthwise {
    length: number;
}

function logLength<T extends Lengthwise>(item: T): number {
    console.log(`Length: ${item.length}`);
    return item.length;

}

logLength("Hello, World!"); // Output: Length: 13
logLength([1, 2, 3, 4]); // Output: Length: 4
// logLength(123); // Error: Argument of type 'number' is not assignable to parameter of type 'Lengthwise'.