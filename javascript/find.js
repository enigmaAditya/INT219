//returns first element in the array that satisfies the condition
//stops after finding the first match
//returns undefined if no match is found
let numbers=[1,2,3,4,5];
let result=numbers.find((num)=>{
    return num>10;
})
console.log(result); //undefined, as no number is greater than 10

let result1=numbers.find((num)=>{
    return num%2==0;
})
console.log(result1); //2, as it is the first even number in the array