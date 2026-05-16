//DOM: Document Object Model - represents the structure of an HTML document and allows JavaScript to interact with it.
//DOM Structure: window -> document -> Element -> Node

//selecting elements
// let heading = document.getElementById("heading");
// let paragraphs = document.getElementsByClassName("paragraph");
// let listItems = document.getElementsByTagName("li");
// let firstParagraph = document.querySelector(".para");
// let allParagraphs = document.querySelectorAll(".para");/

console.log(window);
console.log(document);
console.dir(document); //provides a more detailed view of the document object, including its properties and methods
console.log(document.title); //accessing the title of the document
console.log(document.body); //accessing the body of the document, which contains all the visible content of the webpage
console.log(document.head); //accessing the head of the document, which contains metadata and links to external resources

// let heading1=document.getElementById("heading");
// console.log(heading1);

// let boxes=document.getElementsByClassName("box");
// console.log(boxes);

// let paragraphs=document.getElementsByTagName("p");
// console.log(paragraphs);

// let heading2=document.querySelector("#heading");
// console.log(heading2);

// let boxes2=document.querySelector(".box");
// console.log(boxes2);
// let allBoxes=document.querySelectorAll(".box");
// console.log(allBoxes);

//DOM properties:
//innerHTML: gets or sets the HTML content of an element
//textContent: gets or sets the text content of an element
//tagName: gets the tag name of an element
//innerText: gets or sets the visible text content of an element, ignoring hidden elements and extra whitespace
//value: gets or sets the value of an input element
//style: gets or sets the inline CSS styles of an element
//classList: provides methods to manipulate the classes of an element

//DOM methods:
//addEventListener: attaches an event handler to an element
//createElement: creates a new HTML element
//appendChild: adds a new child element to a parent element
//removeChild: removes a child element from a parent element
//setAttribute: sets the value of an attribute on an element
//getAttribute: gets the value of an attribute on an element
//querySelector: returns the first element that matches a specified CSS selector
//querySelectorAll: returns a NodeList of all elements that match a specified CSS selector


//Example: changing the text of a heading element
let heading=document.getElementById("heading");
heading.textContent="Welcome to JavaScript DOM Manipulation!";

let heading1=document.querySelector("#heading");
console.log(heading1.innerText); //Welcome to JavaScript DOM Manipulation!

heading1.style.color="gold"; //changing the color of the heading to gold
heading1.style.fontSize="24px"; //changing the font size of the heading to 24px

let element1=document.createElement("p"); //creating a new paragraph element
element1.innerText="This is a new paragraph added to the DOM.";
element1.style.color="red"; //changing the color of the paragraph to red
element1.style.fontSize="20px"; //changing the font size of the paragraph to 18px
element1.style.fontWeight="bold"; //making the text of the paragraph bold
element1.style.textAlign="center"; //aligning the text of the paragraph to the center
element1.style.marginTop="20px"; //adding a margin of 20px to the top of the paragraph
element1.style.padding="10px"; //adding a padding of 10px to the paragraph
element1.style.border="2px solid black"; //adding a border of 2px solid black to the paragraph
element1.style.backgroundColor="yellow"; //changing the background color of the paragraph to yellow


let element2=document.createElement("h2"); //creating a new heading element
element2.innerText="This is a new heading added to the DOM.";

document.body.appendChild(element1); //adding the new paragraph to the body of the document
document.body.prepend(element2); //adding the new heading to the body of the document


let element3=document.createElement("button"); //creating another new button element
element3.innerText="Click me!";
element2.after(element3); //adding the new button after the first paragraph
element3.addEventListener("click", function(){ //adding a click event listener to the button
    alert("Button clicked!");
});
element3.style.backgroundColor="lightblue"; //changing the background color of the button to blue
element3.style.border="none"; //removing the border of the button
element3.style.padding="10px 20px"; //adding padding to the button
element3.style.fontSize="16px"; //changing the font size of the button to 16px
element3.style.cursor="pointer"; //changing the cursor to a pointer when hovering over the button
element3.addEventListener("mouseover", function(){ //adding a mouseover event listener to the button
    element3.style.backgroundColor="lightyellow"; //changing the background color of the button to light yellow when hovered
});
element3.addEventListener("mouseout", function(){ //adding a mouseout event listener to the button
    element3.style.backgroundColor="lightblue"; //changing the background color of the button back to light blue when not hovered
});


let element4=document.createElement("p"); //creating another new paragraph element
element4.innerText="This is our second lecture of learning DOM manipulation!"; //setting the text of the paragraph
element4.style.color="green"; //changing the color of the paragraph to green
element4.style.fontSize="18px"; //changing the font size of the paragraph to 18px
heading1.after(element4); //adding the new paragraph to the body of the document

let boxes=document.querySelectorAll(".box"); //selecting all elements with the class "box"
console.log(boxes); //logging the NodeList of elements with the class "box"
// boxes[0].innerText="my first box"; //changing the text of the first box
// boxes[1].innerText="my second box";
// boxes[2].innerText="my third box";

boxes[0].style.backgroundColor="lightcoral";
boxes[1].style.backgroundColor="lightseagreen";
boxes[2].style.backgroundColor="lightsteelblue";


let array69=["Orange", "red", "yellow", "green", "blue", "indigo", "violet"]; //creating an array of colors
boxes.forEach(function(color, index){
    color.innerText=array69[index]; //setting the text of each box to the corresponding color in the array
})


let formAdder=document.createElement("form"); //creating a new form element
formAdder.innerHTML=`<input type="text" placeholder="Enter your name" id="nameInput"><br>

<select name="options" id="options">
    <option value="" disabled selected>Select a color</option>
    <option value="red">Red</option>
    <option value="blue">Blue</option>
    <option value="green">Green</option>
    <option value="yellow">Yellow</option>
</select>

<button type="submit">Submit</button>`; //setting the inner HTML of the form to include an input field and a submit button
document.body.appendChild(formAdder); //adding the form to the body of the document




let element5=document.querySelector("body"); //selecting the body element
element5.addEventListener("submit",(event)=>{ //adding a submit event listener to the body element
    event.preventDefault(); //preventing the default form submission behavior
    if(document.getElementById("nameInput").value===""){ //checking if the input field is empty
        alert("Please enter your name!"); //alerting the user to enter their name if the input field is empty
        return; //exiting the function if the input field is empty
    }
    alert("Hello " + document.getElementById("nameInput").value + "!"); //alerting the user with their name
    element5.style.backgroundColor=document.getElementById("options").value; //changing the background color of the body to the selected color from the dropdown
})


let headingId=document.querySelector("#heading") //getting the value of the "id" attribute of the heading element
console.log(headingId.getAttribute("id")); //logging the value of the "id" attribute of the heading element
console.log(headingId.setAttribute("id", "newheading1")); //setting a custom attribute "data-custom" with the value "customValue" on the document element
headingId.classList.add("newClass"); //adding a new class "newClass" to the heading element


//form validation through dom:
let formAdder2=document.createElement("form");
formAdder2.innerHTML=`<input type="text" placeholde="write your name here"<br>
<input type="password" placeholder="write your password here" minlength="8" maxlength="12" required><br>

<br>
<input type="email" placeholder="write your email here" required><br>

<br>
<input type="number" placeholder="write your number here" minlength="10" maxlength="10" required><br>

<button type="submit">Submit</button>`;
document.body.appendChild(formAdder2);

let password=document.getElementById("password").value;
let email=document.getElementById("email").value;
let number=document.getElementById("number").value;
if(password.length<8 || password.length>12){
    alert("Please enter your password of length between 8 and 12!");
    return;
} 
if(!"[EMAIL_ADDRESS]".match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)){
    alert("Please enter a valid email address!");
    return;
}   
if(number.length<10 || number.length>10){
    alert("Please enter your 10 digit number!");
    return;
}   
