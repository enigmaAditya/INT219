let number=[1,2,3,4,5];
let newnumber=number.reduce((accumulator, currentValue)=>{
    return accumulator+currentValue;
}, 16);
console.log("Sum of numbers: " + newnumber);

let product=number.reduce((accumulator, currentValue)=>{
    return accumulator*currentValue;
}, 1);
console.log("Product of numbers: " + product);

let reducednumber=number.reduce((num, sum)=>{
    return sum+num;
})
console.log("Sum of numbers: " + reducednumber);