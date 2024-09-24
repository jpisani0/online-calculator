// Calculator Program

const display = document.getElementById("display"); // Get the display element from the html file

function appendToDisplay(input){
    display.value += input
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}
