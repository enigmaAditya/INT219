// Generics allow you to write reusable code that can work with different types. They provide a way to create components that can work with any data type while still maintaining type safety. In TypeScript, you can use generics with functions, classes, and interfaces.

// Here's an example of a generic function that takes an array of any type and returns the first element:

function Identity<T>(arg: T): T {
    return arg;
}
console.log(Identity(10)); // Output: 10
console.log(Identity("Hello")); // Output: Hello

let output1 = Identity<string>("Hello, Generics!");
console.log(output1); // Output: Hello, Generics!

let output2 = Identity<number>(42);
console.log(output2); // Output: 42


function getFirstElement<T>(arr: T[]): T {
    return arr[0];
}

let numbers = [1, 2, 3, 4, 5];
let firstNumber = getFirstElement(numbers);
console.log(firstNumber); // Output: 1

let strings = ["Hello", "World"];
let firstString = getFirstElement(strings);
console.log(firstString); // Output: Hello




















// In this example, the function `getFirstElement` is defined with a generic type parameter `T`. This allows the function to work with arrays of any type while still ensuring that the return type is consistent with the input type.

// You can also use generics with classes. For example, you can create a generic class for a stack data structure:

class Stack<T> {
    private items: T[] = [];

    push(item: T): void {
        this.items.push(item);
    }

    pop(): T | undefined {
        return this.items.pop();
    }

    peek(): T | undefined {
        return this.items[this.items.length - 1];
    }
}

let numberStack = new Stack<number>();
numberStack.push(1);
numberStack.push(2);
console.log(numberStack.peek()); // Output: 2
console.log(numberStack.pop()); // Output: 2
console.log(numberStack.pop()); // Output: 1

let stringStack = new Stack<string>();
stringStack.push("Hello");
stringStack.push("World");
console.log(stringStack.peek()); // Output: World
console.log(stringStack.pop()); // Output: World
console.log(stringStack.pop()); // Output: Hello

// In this example, the `Stack` class is defined with a generic type parameter `T`, allowing it to work with any type of data while maintaining type safety. The methods `push`, `pop`, and `peek` all use the generic type `T` to ensure that the stack operates on the correct type of data.

// In summary, generics in TypeScript provide a powerful way to create reusable and type-safe components that can work with a variety of data types. They are an essential feature for writing flexible and maintainable code.