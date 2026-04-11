let array=[1,2,3,4,5,6,7,8,9];
console.log(array);
array=[1,"Hello",2,"how",3,'are',4,"you ?"]
console.log(array);
console.log(array.length);
console.log(array[3]);

//all  the arrays methods:

array.push("Aditya");
console.log(array);
array.pop();
console.log(array);
array.unshift("Welcome");
console.log(array);
array.shift();
console.log(array);
array.splice(2,0,"to");
console.log(array);
array.splice(4,1);
console.log(array);
array.reverse();
console.log(array);
 //storing the deleted element in a variable
let deletedElement=array.splice(2,1);
console.log("Deleted element: " + deletedElement);
console.log(array);
array.sort();
console.log(array);
let fruits=["Banana","Apple","Mango","Grapes"];
let fruits1=fruits.shift();
console.log("Removed fruit: " + fruits1);
console.log(fruits);
//unshift method
fruits.unshift("Strawberry");
console.log(fruits);
//slice method
let citrus=["Lemon","Orange","Lime","Grapefruit"];
let citrusSlice=citrus.slice(1,3);
console.log("Sliced citrus fruits: " + citrusSlice);
//splice method
let vegetables=["Carrot","Broccoli","Spinach","Peas"];
vegetables.splice(1,2,"Cabbage","Cauliflower");
console.log(vegetables);
//example problem
let company=["Amazon","Flipkart","Uber","Microsoft"];
company.pop();
company.shift();
company.splice(1,1,"Ola")
console.log(company);


//forEach method
let numbers=[1,2,3,4,5];
numbers.forEach(function(num){
    console.log(num);
});

//map method
let squaredNumbers=numbers.map(function(num){
    return num*num;
});
console.log("Squared numbers: " + squaredNumbers);

let numbers1=[1,2,3,4,5];
numbers1.forEach((num, index)=>{
    console.log(index, num*2);
});

let result=numbers.forEach(num => num*2);
console.log(result); //undefined, forEach does not return a new array

//difference between forEach and map: forEach is used for iterating over an array and performing side effects, while map is used for creating a new array by applying a function to each element of the original array.

//reduce method
let sum=numbers.reduce(function(accumulator, currentValue){
    return accumulator + currentValue;
}, 0);
console.log("Sum of numbers: " + sum);

//filter method
let evenNumbers=numbers.filter(function(num){
    return num%2===0;
});
console.log("Even numbers: " + evenNumbers);

let oddNumbers=numbers.filter(num => num%2!==0);
console.log("Odd numbers: " + oddNumbers);

