// Types of Execution Context:
// 1. Global Execution Context
// - Created when the JavaScript engine starts executing the code.
// - It creates a global object (window in browsers) and sets the 'this' keyword to point to that global object.
// - It also creates a global scope where all global variables and functions are stored.
// - Only one global execution context can exist at a time, and it is the default context for any code that is not inside a function or eval.
// 2. Function Execution Context
// - Created when a function is invoked.
// - It creates a new scope for the function's local variables and parameters.
// - The 'this' keyword is set to the object that owns the function (or undefined in strict mode).
// 3. Eval Execution Context
// - Created when the eval() function is called.
// - It creates a new scope for the code being evaluated.
// - The 'this' keyword is set to the global object (or undefined in strict mode).

// Each execution context has three phases:
// 1. Creation Phase:
// - The JavaScript engine creates the execution context and sets up the scope chain, variable object, and 'this' keyword.
// - Memoryisallocated, variables initialized as undefined, and functions are stored completely in the variable object.
// 2. Execution Phase:
// - The JavaScript engine executes the code within the execution context.
// - codesrunline by line , values are assigned to variables, and functions are executed.
// 3. Destruction Phase:
// - The execution context is removed from the call stack and its memory is deallocated.


// Micro task and Macro task:
// Micro tasks (also known as microtasks or microtask queue):
// - Micro tasks are tasks that are executed after the current task and before the next task.
// - They are typically used for tasks that need to be executed immediately after the current task, such as promises and mutation observers.
// - Micro tasks are added to the micro task queue and are executed in a first-in-first-out (FIFO) order.
// Macro tasks (also known as macrotasks or macro task queue):
// - Macro tasks are tasks that are executed after the current task and before the next task.
// - They are typically used for tasks that need to be executed after the current task, such as setTimeout and setInterval.
// - Macro tasks are added to the macro task queue and are executed in a first-in-first-out (FIFO) order.

// micro tasks have a higher priority than macro tasks, meaning that all micro tasks will be executed before any macro tasks are executed. This is because micro tasks are typically used for tasks that need to be executed immediately after the current task, while macro tasks are used for tasks that can be executed later.
// Examples of micro tasks include:
// - Promises (e.g., .then() and .catch() callbacks)
// - Mutation observers
// - process.nextTick() in Node.js
// Examples of macro tasks include:
// - setTimeout() and setInterval()
// - I/O operations (e.g., reading files, making network requests)
// - UI rendering tasks
// - DOM events (e.g., click, scroll, etc.)
// - setimmediate() in Node.js

// Execution Context Stack (Call Stack):
// The execution context stack, also known as the call stack, is a data structure that keeps track of the execution contexts in a JavaScript program. It follows a last-in-first-out (LIFO) order, meaning that the most recently created execution context is the first one to be executed.
// When a function is called, a new execution context is created and pushed onto the call stack. The JavaScript engine then executes the code within that execution context. Once the function finishes executing, its execution context is popped off the call stack, and the engine returns to the previous execution context.
// The global execution context is always at the bottom of the call stack, and it remains there until the program finishes executing. As functions are called and executed, new execution contexts are added to the stack, and as they finish executing, they are removed from the stack. This process continues until all code has been executed and the call stack is empty.

// Scope Chain:
// The scope chain is a mechanism that allows JavaScript to access variables and functions in different scopes. It is created when an execution context is created and consists of the variable object of the current execution context and the variable objects of all parent execution contexts.
// When a variable or function is accessed, JavaScript looks for it in the current execution context's variable object. If it is not found there, it looks in the variable object of the parent execution context, and so on, until it reaches the global execution context. If the variable or function is not found in any of the execution contexts, a ReferenceError is thrown.
// The scope chain allows for lexical scoping, which means that variables and functions are accessible based on their position in the source code. This allows for nested functions to access variables and functions defined in their parent scopes.
let globalVariable = 'I am a global variable';
function outer() {
    // Function implementation
    let outerVariable = 'I am from the outer function';
    function inner() {
        // Function implementation
        let innerVariable = 'I am from the inner function';
        console.log(outerVariable); // Accessing variable from the outer function: outer scope
        console.log(innerVariable); // Accessing variable from the inner function: inner scope
        console.log(globalVariable); // Accessing global variable: global scope
    }
    inner();
}
outer();

// microtask and macrotask:
console.log('Start');
setTimeout(() => {
    console.log('setTimeout'); // Macro task
}, 0);
Promise.resolve().then(() => {
    console.log('Promise'); // Micro task
});
console.log("End");

// Output will be:
// start runs immediately
// setTimeout is scheduled to run after 0 milliseconds, but it will be placed in the macro task queue
// Promise is resolved immediately and its .then() callback is placed in the micro task queue
// End runs immediately after start
// Event loop checks the micro task queue and executes the Promise callback before executing the setTimeout callback, even though setTimeout was scheduled to run after 0 milliseconds. This is because micro tasks have a higher priority than macro tasks in the event loop.
// After the current execution context finishes, the JavaScript engine will first execute all micro tasks (Promise) before executing any macro tasks (setTimeout)

// Closures in JavaScript:
// A closure is a function that has access to its own scope, the scope of the outer function, and the global scope. It allows a function to access variables from an enclosing scope even after the outer function has finished executing.
// Closures are created when a function is defined inside another function and the inner function references variables from the outer function. The inner function retains access to those variables even after the outer function has returned, creating a closure.
// Closures are commonly used for data privacy, as they allow you to create private variables and functions that cannot be accessed from outside the closure. They are also used for creating higher-order functions, which are functions that can take other functions as arguments or return functions as their result.
// Best for encapsulation and data privacy, as they allow you to create private variables and functions that cannot be accessed from outside the closure. They are also useful for creating higher-order functions, which can take other functions as arguments or return functions as their result. Closures are a fundamental concept in JavaScript and are widely used in various programming patterns and techniques.
// 
function outerFunction() {
    let outerVariable = 'I am from the outer function';
    return function innerFunction() {
        console.log(outerVariable);
    };
}