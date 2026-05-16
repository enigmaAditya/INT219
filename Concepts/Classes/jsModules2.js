// Import functions:

// Named Import:
// import { add, multiply, greet } from './jsModules.js';

// console.log(add(2, 3));
// console.log(multiply(4, 5));
// greet();

// Default Import:
// import module1 from './jsModules.js';

// console.log(module1.add(2, 3));
// console.log(module1.multiply(4, 5));
// module1.greet();

// Namespace Import:
// used when you want to import all the exports from a module as a single object. This is useful when you have many exports and want to avoid naming conflicts. To do this, you can use the * syntax to import everything from the module and assign it to a namespace object. You can then access the exported values using dot notation on the namespace object.
// difference between default and namespace export is that 

// import * as StringUtils from './jsModules.js';
// console.log(StringUtils.toUpper("hello"));
// console.log(StringUtils.toLower("WORLD"));
// console.log(StringUtils.capitalize("javaScript"));

// Dynamic Import:
// it allows you to load a module at runtime(when needed) instead of at the beginning of the script. This can be useful for optimizing performance by loading modules only when they are required. Dynamic imports return a promise that resolves to the module object, allowing you to use async/await syntax for cleaner code. To use dynamic imports, you can use the import() function, which takes the module path as an argument and returns a promise that resolves to the module's exports.
// Why use dynamic imports?
// lazy loading (load only when needed)
// Better performance

import("./jsModules.js").then((dynamicMath)=>{
    console.log(dynamicMath.dynamicAddition(5, 10));
})

// Dynamic modules use modern async/await:
async function run(){
    try{
        const module = await import("./jsModules.js");
        let result =  module.dynamicAddition(7, 8);
        console.log(result);
    } catch(error){
        console.error("Error occurred while importing the module:", error);
    }
}
run();