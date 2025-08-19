function change(params) {
    const paragraph = document.getElementById("demo").innerText = "Text change Successfully";
}


function changeText() {
    const changeColor = document.getElementById("demo").innerText = "Text changed Successfully!!";
}

function changeColor() {
    const changeColor = document.getElementById("feel").style.color = "blue";
}

function changeColorr() {
    const changeColor = document.getElementById("feell").style.color = "red";
} 

// input form

function result() {
    const input = document.getElementById("inputText") ;
    const inputx = document.getElementById("emailText") ;
    const inputy = document.getElementById("number") ;

    const output = document.getElementById("outputText");
    output.innerText = `Hello , ${input.value}, ${inputx.value},  ${inputy.value} `;
} 



// light and dark theme


function dark(){
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
}

function light(){
    document.body.style.backgroundColor = "#fff";
    document.body.style.color = "black";
} 



// numbers

function add(){
    result.innerText = "Added Result: " + (parseFloat(num1.value) + parseFloat(num2.value));
}

function sub(){
    result.innerText = "Added Result: " + (parseFloat(num1.value) - parseFloat(num2.value));
}

function div(){
    result.innerText = "Added Result: " + (parseFloat(num1.value) / parseFloat(num2.value));
}

function mod(){
    result.innerText = "Added Result: " + (parseFloat(num1.value) % parseFloat(num2.value));
}



let count = 0;
const display = document.getElementById("count");

function increase(){
    count++;
    // count = count + 1;
    display.innerText = count;
}

function decrease(){
    

    if (count > 0) {
        count--;
        display.innerText = count;
    } else {
        alert ("Count can not be less than zero")
    }
}

function reset(){
    count = 0;
    display.innerText = count;
}

