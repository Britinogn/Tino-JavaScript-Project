// function without parameter
function greet() {
    console.log("Hello World");
}

greet();


// function with parameter
function greeting(name) {
    console.log("Hello" , name);
    
}
greeting("Tino");


// function with parameter that returns a value
function sum(a, b) {
    return a + b ;
}
console.log(sum(8,9));

function sub(a,b) {
    return a - b ;
}

console.log(sub(20,12));

function div(x,y){
    return x / y;
}

console.log(div(10,5));

function prod(x,y) {
    return x * y;
}
console.log(5*5);


//  functions with for loops and if & else statements

function evenOdd() {
    for (let i = 1; i <= 10; i++) {

        if (i % 2 === 0) {
            console.log( i + " " + "is an even number");
            
        }else{
              console.log( i + " " + "is an odd number"); 
        }
    }
}

evenOdd();