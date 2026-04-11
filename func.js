function greeting(name) {
    console.log("hello everyone");
}
greeting();

function add(a,b){
    let result=a+b;
    return result;
}
console.log(add(5,8));

const greet=()=>{
    console.log("Hi Everyone!")
}
greet()

function print(n){
    for(let i =0; i<=n; i++){
        console.log(i);
    }
}
print(10)

const even=(n)=>{
    if(n%2==0){
        console.log(n+" is even.")
    }
}

even(15)
even(10)

const displayEven=(n)=>{
    for(let i=0; i<=n; i++){
        if(i%2==0){
            console.log(i)
        }
    }
}

displayEven(16)

//using callback function

const add1=(a,b,result)=>{
    result(a+b)
}
const display=(sum)=>{
    console.log(`sum is ${sum}`)
}
add1(5,2,display)

const even2=(n, displayEven2)=>{
    for(let i = 0;i<=n; i++){
        if(i%2==0){
            displayEven2(i)
        }
    }
}

const displayEven2=(num)=>{
    console.log(`${num}`)
}

even2(10, displayEven2)
