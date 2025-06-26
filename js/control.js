// control flow


let score = 85;

if (score >= 70){
    console.log("Excellent");  
}
else if(score >= 50){
    console.log("Good"); 
}
else{
    console.log("Failed");
}

let age = 60;
if (age >= 65){
    console.log("Retired");  
}
else if (age >= 18){
    console.log("Employed");
}
else{
    console.log("Child");   
}



// switch statement


let color = "Red";

switch (color){
    case "red":
        console.log("The color is red");
        break;

    case "green":
        console.log("The color is blue");
        break;

    case "blue":
        console.log("The color is blue");
        break;

    default:
        console.log("Unknown Color");
        break;
} 


// loops in Js

// For Loops initialize , condition , increment

for (let i = 0 ; i < 10; i++){
    console.log(i);
    
}

// while loop

let num = 1 ;

while(num <11){
    console.log(num);
    num++
}


// do while
let num1 = 1;

do{
    console.log(num1);
    num1++

} while(num1 <= 10);
