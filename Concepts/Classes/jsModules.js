// JS Modules
// Modules are reusable pieces of code that can be imported and exported between different files. They help in organizing code and managing dependencies in larger applications.
// In JavaScript, there are two main types of modules: CommonJS and ES6 modules.

// MODULE Export:
// A module uses the export keyword to share values with other files.
// A module can have many named exports.
// A module can (optionally) have a single default export.
// Nmaed Export:
// In a named export, you can export multiple values by their names. These values can be functions, objects, or any other JavaScript data types. To import these values in another file, you need to use the same names.
// default Export:
// A default export allows you to export a single value from a module. This value can be imported without using curly braces and can be given any name when imported in another file. A module can only have one default export.
// Example of Named Export:
// math.js
// export function add(a, b) {
//     return a + b;
// }

// export function multiply(a, b) {
//     return a * b;
// }

// export function greet(){
//     console.log("Hello, welcome to JavaScript modules!");
// }

// Export as defaukt (single object):
// export  default{add, multiply, greet};


// String Utils :
// export function toUpper(str){
//     return str.toUpperCase();
// }

// export function toLower(str){
//     return str.toLowerCase();
// }

// export function capitalize(str){
//     return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
// }


// for Dynamic import:

export function dynamicAddition(a, b){
    return a + b;
}

