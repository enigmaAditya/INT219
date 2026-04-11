//domContentLoaded event is fired when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
//when javaScript is placed in the head of the document, it can block the parsing of the HTML document until the script is downloaded and executed. This can lead to a delay in the rendering of the page, which can negatively impact the user experience. By using the DOMContentLoaded event, you can ensure that your JavaScript code runs only after the HTML document has been fully loaded and parsed, allowing for a faster and smoother user experience.
//when javascript runs before the DOM is fully loaded, it may not be able to access or manipulate the elements on the page, which can lead to errors or unexpected behavior. By using the DOMContentLoaded event, you can ensure that your JavaScript code runs only after the DOM is fully loaded and ready to be manipulated, which can help prevent errors and improve the overall functionality of your web page.
//whenjavascript is placed at the end of the body, it can access and manipulate the elements on the page as soon as they are loaded, which can lead to a faster and smoother user experience. By using the DOMContentLoaded event, you can ensure that your JavaScript code runs only after the HTML document has been fully loaded and parsed, allowing for a faster and smoother user experience.


document.addEventListener("DOMContentLoaded", () => {

    for(let i=1; i<=4; i++){
        const divs=document.createElement("div");
        divs.className="box";
        divs.textContent=`Box ${i}`;
        document.body.appendChild(divs);
    }
    console.log("DOM fully loaded and parsed");
    // Your code to run after the DOM is ready goes here
});