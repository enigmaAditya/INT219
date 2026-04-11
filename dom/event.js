let button1= document.querySelector('#myButton');
button1.onclick=()=>{
    console.log("button clicked!");
    let l=10;
    let b=20;
    let area=l*b;
    console.log("Area of rectangle is: "+area);
}

let box1=document.querySelector('.box');
box1.onmouseover=(evt)=>{
    console.log("You are inside the box!");
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
}
let output=document.querySelector('#output');
let button2=document.querySelector('#myButton1');
button2.onclick=()=>{
    let date=new Date();
    output.textContent="Current date and time is: "+date.toLocaleString();
    let time=date.getHours();
    console.log("Current time is: "+time);
    if(time<12){
        console.log("Good morning!");
    console.log("Today's date is: "+date.toDateString());
    }
    else if(time<18){
        console.log("Good afternoon!");
    console.log("Today's date is: "+date.toDateString());
    }
    else{
        console.log("Good evening!");
    console.log("Today's date is: "+date.toDateString());
    }
}


