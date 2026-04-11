

let btn=document.getElementById('btn');
btn.addEventListener('click',()=>{
    console.log("Button clicked!");
});

let button1=document.querySelector('#btn2');
// button1.addEventListener('click',()=>{
//     console.log("Button 2 clicked!");
// });


//key properties of event object:
//1. type: The type of the event (e.g., 'click', 'keydown').
//2. target: The element that triggered the event.
//3. currentTarget: The element to which the event listener is attached.
//clientX and clientY: The coordinates of the mouse pointer relative to the viewport when the event occurred.
//stopPropagation() method is used to stop the event from propagating further up or down the DOM tree. This can be useful when you want to prevent parent elements from receiving the event after it has been handled by a child element.
//4. eventPhase: Indicates the current phase of the event flow (capturing, target, bubbling).
//5. bubbles: A boolean indicating whether the event bubbles up through the DOM.
//6. cancelable: A boolean indicating whether the event can be canceled.
//7. timeStamp: The time at which the event was created.
//preventDefault() method is used to prevent the default action associated with an event from occurring. For example, if you have a form submission event, calling preventDefault() will stop the form from being submitted and allow you to handle the submission in a custom way.


//Advantages of addEventListener:
//1. Multiple event listeners can be added to the same element without overwriting each other.
//2. It provides better control over the event flow and allows for more complex interactions.
//3. It supports capturing and bubbling phases, giving developers more flexibility in handling events.
//4. It allows for easier removal of event listeners using removeEventListener() method.


// button1.addEventListener('mouseover',func=()=>{
//     console.log("Mouse over button 2!");
// });
// button1.addEventListener('mouseover',()=>{
//     console.log("Print text on mouse over!");
// });

// button1.addEventListener('dblclick',func1=()=>{
//     console.log("Button 2 double clicked!");
// });

// button1.removeEventListener('mouseover',func);
// button1.removeEventListener('mouseover',func1);

let box1=document.querySelector('.box');
button1.addEventListener('click',()=>{
    box1.style.backgroundColor='red';
    button1.style.backgroundColor='green';

});

let modebutton=document.querySelector('#mode');
let body=document.querySelector('body');

let currentMode='light';
modebutton.addEventListener('click',()=>{
    if(currentMode==='light'){
        currentMode='dark';
        body.style.backgroundColor='black';
        body.style.color='white';
    }
    else{
        currentMode='light';
        body.style.backgroundColor='white';
        body.style.color='black';
    }
});



//Focus event: Triggered when an element gains focus (e.g., when a user clicks on an input field or tabs to it).
//Blur event: Triggered when an element loses focus (e.g., when a user clicks away from an input field or tabs out of it).

