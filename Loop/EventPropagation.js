//Capturing Phase:
//In the capturing phase, the event starts from the root of the DOM tree(window) and travels down to the target element.
//event listeners in thisphase catches the event as it travels down the DOM tree, before it reaches the target element.
//To listen for events in the capturing phase, you can use the addEventListener method with the third argument set to true.

//Target Phase:
//In the target phase, the event has reached the target element and is being processed by the event listeners attached to that element.
//event listeners in this phase catches the event when it reaches the target element.
//this is where the eventListeners attached to the target element are executed.

//Bubbling Phase:
//In the bubbling phase, the event starts from the target element and travels back up to the root of the DOM tree(window).
//event listeners in this phase catches the event as it travels back up the DOM tree, after it has been processed by the target element.
//To listen for events in the bubbling phase, you can use the addEventListener method with the third argument set to false (or omit it, as false is the default value).
//commonly used in event handling, as it allows you to handle events on parent elements without having to attach event listeners to each child element. This is known as event delegation, and it can help improve performance and simplify your code.
//allows parents elements to handle events that occur on their child elements, which can be useful for dynamic content or when you want to handle events on a large number of elements without attaching individual event listeners to each one.

//insummary, event propagation is the process by which events are transmitted through the DOM tree. It consists of three phases: capturing, target, and bubbling. Understanding how event propagation works can help you write more efficient and effective event handling code in your web applications.


//Example of Bubbling Phase:
// let div1=document.querySelector(".card");
// let button1=document.querySelector("#btn");

// div1.addEventListener("click",()=>{
//     console.log("Product Card clicked");
// });

// button1.addEventListener("click",(event)=>{
//     console.log("Add to Cart button clicked");
//     event.stopPropagation(); //this will stop the event from propagating to the parent elements
// });

//Example of Capturing Phase:
let div1=document.querySelector(".card");
let button1=document.querySelector("#btn");

div1.addEventListener("click",()=>{
    console.log("Product Card clicked");
},false);

button1.addEventListener("click",(event)=>{
    console.log("Add to Cart button clicked");
    // event.stopPropagation(); //this will stop the event from propagating to the parent elements
},false);
