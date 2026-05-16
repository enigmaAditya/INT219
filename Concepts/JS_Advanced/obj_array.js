let fruits=[
    {name:"apple", color:"red", quantity:10, price:200},
    {name:"banana", color:"yellow", quantity:20, price:100},
    {name:"orange", color:"orange", quantity:15, price:150},
    {name:"grape", color:"purple", quantity:5, price:300}
]

console.log(fruits.length); //4, as there are 4 objects in the array
console.log(fruits[0].name);
console.log(fruits[1].color);
console.log(fruits[2].quantity);
console.log(fruits[3].price);

//accessing properties of objects in an array
fruits.forEach((fruit)=>{
    console.log("Name: " + fruit.name);
    console.log("Color: " + fruit.color);
    console.log("Quantity: " + fruit.quantity);
    console.log("Price: " + fruit.price);
    console.log("-------------------");
})


//filtering objects in an array based on a condition
let expensiveFruits=fruits.filter((fruit)=>{
    return fruit.price>150;
});
console.log("Expensive fruits: ");

expensiveFruits.forEach((fruit)=>{
    console.log("Name: " + fruit.name);
    console.log("Color: " + fruit.color);
    console.log("Quantity: " + fruit.quantity);
    console.log("Price: " + fruit.price);
    console.log("-------------------");
})


