//Technique ofattaching event listener to a parent element instead of each individual element. The event listener will check the event target to determine if it matches the desired selector and then execute the appropriate code.
//uses bubbling to handle events on child elements by attaching a single event listener to a parent element. When an event occurs on a child element, it bubbles up to the parent element, where the event listener can check the event target and execute the appropriate code.
//improves performance and simplifies code by reducing the number of event listeners needed, especially when dealing with a large number of child elements or dynamically added elements.

//event delgation is a powerful technique that allows you to handle events on child elements by attaching a single event listener to a parent element. This can help improve performance and simplify your code, especially when dealing with a large number of child elements or dynamically added elements. By understanding how event delegation works, you can write more efficient and effective event handling code in your web applications.

//Advantages of Event Delegation:
//1. Performance: By attaching a single event listener to a parent element, you can reduce the number of event listeners needed, which can improve performance, especially when dealing with a large number of child elements.
//2. Dynamic Content: Event delegation allows you to handle events on dynamically added elements without having to attach event listeners to each new element.
//3. Simplified Code: Event delegation can simplify your code by reducing the number of event listeners and making it easier to manage events on child elements.


//Example of Event Delegation:

//step1: select parent element
let productlist1=document.querySelector("#productlist");

//step2: add eventdelegation (parent handles click)
productlist1.addEventListener("click",(event)=>{
    //step3: check event target
    if(event.target.classList.contains("cartbtn")){
        console.log("Product added to cart");
    }//event.target =the actual element that was clicked
});

//step4: Dynamically create a new product card
for(let i=3;i<=8;i++){
let newProduct=document.createElement("div");
newProduct.className="product";
newProduct.innerHTML=`
    <button class="cartbtn">Add to Cart ${i}</button>
`;

//step5: append the new product card to the product list
productlist1.appendChild(newProduct);
}

// //change the height and width of the product list to see the effect of event delegation
// productlist1.style.height="300px";
// productlist1.style.width="300px";
// productlist1.style.overflow="auto"; //add scroll to see the effect of event delegation when new products are added

