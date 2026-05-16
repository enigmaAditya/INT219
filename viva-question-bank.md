# Frontend Viva Question Bank: Medium to Hard Level

This question bank is organized unit-wise. The answers are written as expected viva responses: concise enough for oral assessment, but detailed enough to show conceptual depth.

## Unit I: HTML5 and CSS3 Foundations

### 1. What is the basic structure of an HTML5 document, and why is `<!DOCTYPE html>` important?

**Answer:**  
An HTML5 document generally contains `<!DOCTYPE html>`, `<html>`, `<head>`, and `<body>`. The `<!DOCTYPE html>` declaration tells the browser to render the page in standards mode instead of quirks mode. The `<head>` contains metadata such as character encoding, viewport settings, title, styles, and scripts. The `<body>` contains visible page content. A good HTML5 structure improves browser compatibility, accessibility, SEO, and maintainability.

### 2. Explain semantic HTML. Why is `<section>` not always a replacement for `<div>`?

**Answer:**  
Semantic HTML uses elements that describe the meaning of content, such as `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, and `<footer>`. A `<section>` represents a thematic grouping of content, usually with a heading. A `<div>` has no semantic meaning and is used only for grouping or styling. Replacing every `<div>` with `<section>` is incorrect because it creates misleading document structure and can confuse screen readers and search engines.

### 3. Differentiate between `<article>`, `<section>`, and `<aside>`.

**Answer:**  
`<article>` is used for self-contained content that can stand independently, such as a blog post, news article, or forum comment. `<section>` groups related content around a theme, usually with a heading. `<aside>` contains content indirectly related to the main content, such as advertisements, author bio, related links, or side notes. The choice depends on meaning, not visual layout.

### 4. What are important HTML5 form input types, and how do they improve user experience?

**Answer:**  
HTML5 provides input types such as `email`, `url`, `number`, `date`, `time`, `range`, `color`, `tel`, and `search`. These types provide built-in validation, better mobile keyboards, and clearer intent. For example, `type="email"` validates email format, while `type="number"` provides numeric controls. They reduce JavaScript dependency for basic validation and improve accessibility when paired with proper labels.

### 5. Explain the role of `label`, `name`, `id`, `placeholder`, and `required` in forms.

**Answer:**  
`label` improves accessibility by describing the input and allowing users to click the text to focus the field. `id` uniquely identifies an element and connects with `label for`. `name` is used as the key when form data is submitted. `placeholder` gives a hint but should not replace a label. `required` tells the browser that the field must be filled before submission. A well-designed form uses labels, proper input types, validation attributes, and helpful error messages.

### 6. How do HTML5 multimedia elements work, and what are fallback contents?

**Answer:**  
HTML5 provides `<audio>` and `<video>` elements for embedding media without plugins. They support attributes such as `controls`, `autoplay`, `muted`, `loop`, and `poster`. Multiple `<source>` elements can be used for different file formats. Fallback content is text or a link placed inside the element for browsers that do not support the media element. Example: a video can include MP4 and WebM sources plus fallback text.

### 7. Explain CSS selectors and specificity with an example.

**Answer:**  
CSS selectors target HTML elements. Examples include type selectors (`p`), class selectors (`.card`), ID selectors (`#main`), attribute selectors (`input[type="email"]`), pseudo-classes (`:hover`), and pseudo-elements (`::before`). Specificity decides which rule wins when multiple rules apply. Inline styles are strongest, then IDs, then classes/attributes/pseudo-classes, then element selectors. For example, `#box .title` is more specific than `.title`.

### 8. What is the CSS box model?

**Answer:**  
The box model describes how every element is rendered as a rectangular box consisting of content, padding, border, and margin. Content is the actual text or media area. Padding is space inside the border. Border surrounds padding and content. Margin is space outside the border. With `box-sizing: content-box`, width applies only to content. With `box-sizing: border-box`, width includes content, padding, and border, making layouts easier to control.

### 9. Compare `static`, `relative`, `absolute`, `fixed`, and `sticky` positioning.

**Answer:**  
`static` is the default normal flow. `relative` keeps the element in normal flow but allows offset from its original position. `absolute` removes the element from normal flow and positions it relative to the nearest positioned ancestor. `fixed` positions relative to the viewport and stays visible during scrolling. `sticky` behaves like relative until a scroll threshold is reached, then behaves like fixed within its container.

### 10. Compare Flexbox and Grid. When should each be used?

**Answer:**  
Flexbox is mainly one-dimensional, arranging items in a row or column. It is useful for navbars, toolbars, alignment, and distributing space among items. CSS Grid is two-dimensional, controlling rows and columns together. It is useful for page layouts, dashboards, galleries, and complex grids. Flexbox is best for content flow along one axis; Grid is best for explicit layout structure across both axes.

### 11. What are responsive design principles?

**Answer:**  
Responsive design ensures that a website works across different screen sizes and devices. It uses fluid layouts, flexible images, media queries, relative units, mobile-first CSS, accessible touch targets, and viewport metadata. The goal is not only resizing but preserving readability, usability, and performance across phones, tablets, laptops, and desktops.

### 12. What are modern CSS workflows, and how do Git and GitHub support frontend development?

**Answer:**  
Modern CSS workflows may include CSS variables, component-based styling, preprocessors like Sass, PostCSS, utility-first frameworks, CSS modules, and build tools. Git tracks source code changes locally through commits and branches. GitHub hosts repositories remotely, supports collaboration through pull requests, code reviews, issues, and actions. Together, they help teams manage versions, review changes, and recover previous states.

## Unit II: JavaScript Programming Fundamentals

### 13. Explain JavaScript data types and the difference between primitive and reference values.

**Answer:**  
Primitive types include `string`, `number`, `bigint`, `boolean`, `undefined`, `symbol`, and `null`. Reference types include objects, arrays, and functions. Primitive values are copied by value, while reference values are copied by reference. If two variables point to the same object, changing the object through one variable is visible through the other.

### 14. Compare `var`, `let`, and `const`.

**Answer:**  
`var` is function-scoped and hoisted with an initial value of `undefined`. `let` and `const` are block-scoped and are hoisted but remain in the temporal dead zone until declared. `const` prevents reassignment of the variable binding, but it does not make objects immutable. In modern JavaScript, `let` and `const` are preferred because they reduce scope-related bugs.

### 15. What is scope in JavaScript?

**Answer:**  
Scope determines where variables can be accessed. JavaScript has global scope, function scope, and block scope. Variables declared outside functions are global. Variables inside functions are function-scoped. Variables declared with `let` or `const` inside blocks such as `if` or `for` are block-scoped. Scope helps prevent naming conflicts and controls data visibility.

### 16. Explain `==` versus `===`.

**Answer:**  
`==` checks equality after type conversion, while `===` checks both value and type without conversion. For example, `"5" == 5` is true, but `"5" === 5` is false. `===` is generally preferred because it avoids unexpected coercion and makes comparisons clearer.

### 17. Explain control flow statements with examples.

**Answer:**  
Control flow decides which code runs and how often. Conditional statements include `if`, `else if`, `else`, and `switch`. Loops include `for`, `while`, `do...while`, `for...of`, and `for...in`. `break` exits a loop or switch, while `continue` skips to the next iteration. Good control flow makes logic readable and prevents unnecessary repetition.

### 18. Compare function declarations, function expressions, and arrow functions.

**Answer:**  
Function declarations are hoisted fully, so they can be called before they appear in code. Function expressions are assigned to variables and are available only after assignment. Arrow functions provide shorter syntax and do not bind their own `this`, `arguments`, or `super`. Arrow functions are useful for callbacks, but regular functions are better for object methods when dynamic `this` is needed.

### 19. How are arrays and objects different?

**Answer:**  
Arrays are ordered collections indexed by numbers and are useful for lists. Objects are key-value collections and are useful for representing entities. Arrays have methods like `map`, `filter`, `reduce`, `push`, and `pop`. Objects are accessed using dot or bracket notation. Arrays are technically objects, but they are optimized for ordered data.

### 20. What is event handling in JavaScript?

**Answer:**  
Event handling allows JavaScript to respond to user or browser actions such as clicks, input, key presses, form submissions, and page load. The preferred method is `addEventListener`, which separates JavaScript from HTML and allows multiple handlers. Event handlers receive an event object containing details such as target element, event type, mouse position, and keyboard key.

### 21. What is browser interaction in JavaScript?

**Answer:**  
Browser interaction means using JavaScript to communicate with browser-provided APIs such as the DOM, BOM, storage, timers, events, and network APIs. Examples include changing page content, reading form values, using `localStorage`, setting timers with `setTimeout`, and sending HTTP requests with `fetch`.

## Unit III: Advanced JavaScript and Asynchronous Programming

### 22. What is execution context in JavaScript?

**Answer:**  
An execution context is the environment in which JavaScript code is evaluated. It contains a variable environment, lexical environment, and `this` binding. JavaScript creates a global execution context first, then creates a new function execution context whenever a function is called. These contexts are managed using the call stack.

### 23. Explain the scope chain.

**Answer:**  
The scope chain is the mechanism JavaScript uses to resolve variables. When a variable is accessed, JavaScript first checks the current scope, then outer lexical scopes, and finally the global scope. If the variable is not found, a reference error occurs. The scope chain is created based on where functions are written, not where they are called.

### 24. What is a closure? Give a practical use case.

**Answer:**  
A closure occurs when a function remembers variables from its outer lexical scope even after the outer function has finished executing. Closures are used for data privacy, function factories, callbacks, memoization, and maintaining state. For example, a counter function can keep a private `count` variable that cannot be directly accessed from outside.

### 25. Explain prototype and prototype chain.

**Answer:**  
Every JavaScript object has an internal prototype link to another object. When a property or method is accessed, JavaScript first checks the object itself, then its prototype, then the prototype's prototype, and so on until `null`. This is called the prototype chain. It allows objects to share methods efficiently. Constructor functions and classes use prototypes internally.

### 26. What is the event loop?

**Answer:**  
The event loop coordinates synchronous code, the call stack, callback queues, microtasks, and rendering. JavaScript runs synchronous code first. When the call stack is empty, the event loop processes microtasks such as promise callbacks before macrotasks such as `setTimeout`. This model allows non-blocking asynchronous behavior in a single-threaded language.

### 27. Differentiate microtasks and macrotasks.

**Answer:**  
Microtasks include promise `.then`, `.catch`, `.finally`, and `queueMicrotask`. Macrotasks include `setTimeout`, `setInterval`, DOM events, and network callbacks. After each macrotask, JavaScript clears the microtask queue before moving to the next macrotask. Therefore, promise callbacks usually run before timer callbacks with the same delay.

### 28. Explain promises and asynchronous control flow.

**Answer:**  
A promise represents a future value that may be pending, fulfilled, or rejected. Promises help manage asynchronous operations such as API calls. `.then` handles success, `.catch` handles errors, and `.finally` runs cleanup. `async` and `await` provide cleaner syntax over promises, making asynchronous code look more like synchronous code while still being non-blocking.

### 29. What are important ES6+ features used in modern frontend development?

**Answer:**  
Important ES6+ features include `let`, `const`, arrow functions, template literals, destructuring, spread and rest syntax, default parameters, classes, modules, promises, optional chaining, nullish coalescing, `for...of`, `Map`, `Set`, and async/await. These features improve readability, modularity, and maintainability.

### 30. Explain JavaScript modules.

**Answer:**  
JavaScript modules allow code to be split into reusable files. `export` makes variables, functions, or classes available outside a file, and `import` brings them into another file. Modules have their own scope, are loaded in strict mode by default, and help avoid global namespace pollution. Modern build tools also use modules for bundling and optimization.

## Unit IV: DOM Manipulation and Modern Tooling

### 31. What is the DOM?

**Answer:**  
The Document Object Model is a tree-like representation of an HTML document created by the browser. Each HTML element becomes a node that JavaScript can read, create, update, move, or delete. The DOM connects HTML structure with JavaScript behavior.

### 32. Compare DOM traversal and DOM manipulation.

**Answer:**  
DOM traversal means moving through the DOM tree using properties or methods such as `parentElement`, `children`, `nextElementSibling`, `querySelector`, and `closest`. DOM manipulation means changing the DOM using methods such as `createElement`, `append`, `remove`, `setAttribute`, `classList.add`, and `textContent`. Traversal finds elements; manipulation changes them.

### 33. Explain dynamic styling and content updates.

**Answer:**  
Dynamic styling means changing the appearance of elements using JavaScript, usually by adding or removing CSS classes rather than directly editing many inline styles. Content updates include changing text, attributes, form values, or inserting new elements. Using `textContent` is safer for plain text, while `innerHTML` should be used carefully because it can introduce security risks if user input is inserted.

### 34. What is event propagation?

**Answer:**  
Event propagation is the process by which events travel through the DOM. It has three phases: capturing phase, target phase, and bubbling phase. In bubbling, the event starts at the target element and moves upward to ancestors. `stopPropagation` can stop further propagation, while `preventDefault` stops the browser's default action, such as form submission or link navigation.

### 35. What is event delegation, and why is it useful?

**Answer:**  
Event delegation attaches one event listener to a parent element instead of many listeners to child elements. Because events bubble upward, the parent can detect which child triggered the event using `event.target` or `closest`. It improves performance, reduces memory usage, and works well for dynamically added elements.

### 36. What browser developer tools are useful for debugging frontend code?

**Answer:**  
Developer tools include the Elements panel for inspecting HTML and CSS, Console for logs and errors, Sources for breakpoints and step debugging, Network for request analysis, Performance for runtime profiling, Application for storage inspection, and Lighthouse for audits. Effective debugging involves reading errors, reproducing issues, isolating causes, and verifying fixes.

### 37. What is module bundling?

**Answer:**  
Module bundling combines multiple JavaScript, CSS, and asset files into optimized output files for the browser. Tools such as Vite, Webpack, Rollup, and Parcel resolve imports, transform code, optimize assets, and support development servers. Bundling improves organization during development and performance in production.

### 38. Why are linting and formatting important?

**Answer:**  
Linting detects code quality issues, possible bugs, unused variables, inconsistent patterns, and risky syntax. Formatting enforces consistent style such as spacing, indentation, and line breaks. Tools like ESLint and Prettier improve maintainability, reduce review noise, and help teams follow shared coding standards.

## Unit V: TypeScript Fundamentals

### 39. What is TypeScript, and why is it used?

**Answer:**  
TypeScript is a statically typed superset of JavaScript that compiles to JavaScript. It helps catch type-related errors during development instead of runtime. It improves editor support, autocomplete, refactoring, documentation, and large-scale maintainability. TypeScript does not replace JavaScript; it adds a type system on top of it.

### 40. Explain type annotations with examples.

**Answer:**  
Type annotations explicitly describe the expected type of a variable, parameter, or return value. Example: `let age: number = 20;` or `function add(a: number, b: number): number`. They make code clearer and allow the compiler to detect invalid assignments or function calls.

### 41. Compare interface and type alias.

**Answer:**  
Both interfaces and type aliases can describe object shapes. Interfaces are often used for object contracts and can be extended or merged through declaration merging. Type aliases can represent objects, unions, intersections, primitives, tuples, and more complex type expressions. In many object-modeling cases either works, but type aliases are more flexible for advanced type composition.

### 42. Explain union and intersection types.

**Answer:**  
A union type allows a value to be one of multiple types, such as `string | number`. An intersection type combines multiple types into one, such as `User & AdminPermissions`. Union means "either this or that"; intersection means "must satisfy all combined types." They are useful for modeling flexible but safe data structures.

### 43. What are generics?

**Answer:**  
Generics allow types to be passed as parameters to functions, classes, or interfaces. They make code reusable while preserving type safety. For example, `function identity<T>(value: T): T` returns the same type it receives. Generics are useful for arrays, API responses, reusable components, utility functions, and data containers.

### 44. Explain type inference.

**Answer:**  
Type inference means TypeScript automatically determines types based on assigned values and usage. For example, `let name = "Asha"` is inferred as `string`. Inference reduces unnecessary annotations while still providing type safety. However, explicit types are useful for public APIs, function parameters, complex objects, and return values.

### 45. What is type narrowing?

**Answer:**  
Type narrowing is the process of refining a broad type into a more specific type using checks such as `typeof`, `instanceof`, equality checks, `in`, discriminated unions, or custom type guards. For example, before calling string methods on `value: string | number`, checking `typeof value === "string"` narrows it to `string`.

### 46. Explain the TypeScript compilation workflow.

**Answer:**  
TypeScript source files are written as `.ts` or `.tsx`. The TypeScript compiler checks types and emits JavaScript according to `tsconfig.json`. The configuration controls options such as target JavaScript version, module system, strictness, output directory, and included files. In modern frontend projects, build tools often integrate TypeScript checking and transpilation.

## Unit VI: TypeScript for Web Applications and Quality Assurance

### 47. What are type-safe data models?

**Answer:**  
Type-safe data models define the expected structure of application data using interfaces, type aliases, enums, or literal unions. For example, a `User` type may include `id`, `name`, `email`, and `role`. Type-safe models reduce runtime mistakes by ensuring that functions, components, and APIs use consistent data shapes.

### 48. How does TypeScript help in typing API responses?

**Answer:**  
TypeScript can define interfaces for API request and response data, making it clear what data the frontend expects. However, TypeScript types only exist at compile time and cannot guarantee that runtime API data is valid. For strong safety, runtime validation libraries such as Zod or custom validators may be used along with TypeScript types.

### 49. Explain component typing strategies in frontend projects.

**Answer:**  
Component typing includes defining prop types, event types, state types, callback types, and children types. For example, a button component may accept `label`, `variant`, `disabled`, and `onClick`. Good component typing documents intended usage, prevents invalid props, and improves autocomplete. Types should be strict enough to catch mistakes but not so complex that they become difficult to maintain.

### 50. How is TypeScript integrated into frontend projects?

**Answer:**  
TypeScript is integrated by installing TypeScript, adding `tsconfig.json`, using `.ts` or `.tsx` files, configuring the build tool, and enabling type checking. Frameworks such as React, Vue, Angular, and Svelte support TypeScript. Integration also includes typing environment variables, API data, events, reusable components, and test files.

### 51. What is static code analysis?

**Answer:**  
Static code analysis examines code without executing it. TypeScript performs static type checking. ESLint can detect bugs, bad patterns, unused variables, accessibility issues, and style violations. Static analysis improves quality by catching problems earlier in the development process, before code reaches users.

### 52. Explain debugging workflows in a TypeScript frontend project.

**Answer:**  
Debugging TypeScript projects involves reading compiler errors, using browser DevTools, checking source maps, placing breakpoints, inspecting network requests, logging carefully, and reproducing issues with clear steps. Source maps connect compiled JavaScript back to TypeScript source, making debugging easier. A strong workflow isolates the issue, forms a hypothesis, tests it, and confirms the fix.

### 53. What are testing fundamentals for frontend applications?

**Answer:**  
Frontend testing includes unit tests, integration tests, component tests, and end-to-end tests. Unit tests check small functions. Component tests check UI behavior in isolation. Integration tests verify interaction between parts. End-to-end tests simulate real user flows in a browser. Good tests focus on behavior, edge cases, accessibility, and regressions.

### 54. How do code quality and maintainability practices improve frontend applications?

**Answer:**  
Code quality practices include consistent naming, small functions, reusable components, clear types, linting, formatting, tests, documentation, meaningful commits, and code reviews. Maintainable code is easier to understand, change, debug, and scale. In frontend applications, maintainability also depends on consistent UI patterns, accessible markup, predictable state management, and safe API handling.

### 55. Why is `any` risky in TypeScript?

**Answer:**  
`any` disables type checking for a value. It allows any property access, function call, or assignment, which removes TypeScript's safety benefits. Overusing `any` can hide bugs until runtime. Safer alternatives include `unknown`, generics, union types, proper interfaces, or runtime validation followed by narrowing.

### 56. What is the difference between `unknown` and `any`?

**Answer:**  
`any` allows all operations without checking. `unknown` can hold any value, but TypeScript requires narrowing before using it. For example, a value of type `unknown` cannot be directly called as a function or accessed as an object property. `unknown` is safer for external data because it forces validation before use.

## Cross-Unit Viva Questions

### 57. How would you build a responsive registration form using HTML, CSS, JavaScript, and TypeScript?

**Answer:**  
Use semantic HTML with `<form>`, `<label>`, correct input types, and validation attributes. Use CSS Grid or Flexbox for layout, media queries for responsiveness, and accessible focus states. Use JavaScript for dynamic validation, error messages, and user interaction. In TypeScript, define a form data model, type event handlers, and safely process values. Use Git for version control and test the form for accessibility, validation, and responsiveness.

### 58. A button click updates UI after fetching data from an API. Explain the complete flow.

**Answer:**  
The user clicks the button, triggering an event listener. JavaScript starts a `fetch` request, which returns a promise. Synchronous code completes first. When the network response is ready, promise callbacks enter the microtask queue. The event loop runs them when the call stack is empty. The code parses data, validates or types it, then updates the DOM. CSS controls the display, and errors should be handled with user-friendly feedback.

### 59. How do accessibility, semantic HTML, and TypeScript together improve frontend quality?

**Answer:**  
Semantic HTML gives meaningful structure to assistive technologies. Accessibility practices such as labels, keyboard navigation, focus states, and ARIA only when necessary make the interface usable by more people. TypeScript improves code correctness by checking data and component contracts. Together, they reduce both user-facing and developer-facing errors.

### 60. What is the difference between a working frontend project and a maintainable frontend project?

**Answer:**  
A working project only produces the expected output at the moment. A maintainable project is understandable, scalable, testable, accessible, responsive, and easy to modify. It uses semantic HTML, organized CSS, modular JavaScript, typed data models, linting, formatting, version control, and tests. Maintainability is important because frontend projects change frequently.

