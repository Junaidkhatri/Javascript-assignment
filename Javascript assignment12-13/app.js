// ......................No:OrStringinVariable..................//





// .......................Integers..............................//


// .......................NumberFromUser...............................//

var numberFromUser = prompt("Enter a number", "");
if(numberFromUser >= 1 ){
    alert("It is positive");
}
else if(numberFromUser <= -1 ){
    alert("It is negative");
}
else if(numberFromUser == 0 ){
    alert("It is zero");
}

// // ..................Stringoflenght1.....................//




// // ..................AskPasswordFromUser.....................//

var password = ("webandmobile" + 123);
var inputPassword = prompt("Enter your correct password", "");
if(inputPassword === ""){
    alert("Please enter your password");
}
else if(inputPassword === password){
    alert("Correct! The password you entered matches the original password");
}
else{
    alert("Incorrect password");
}


// // ....................TryToFix.............................//

var greeting; 
var hour = 13; 
if (hour < 18) { 
    alert("Good day"); 
}
else {
    alert("Good evening"); 
}

// ......................24HoursClock........................//

var time = prompt("Enter time in 24 hour clock format like: 1900 =  7 pm", "");
if(time >= 0000 && time < 1200){
    alert("Good Morning!");
}
else if(time >= 1200 && time < 1700){
    alert("Good afternoon!");
}
else if(time >= 1700 && time < 2100){
    alert("Good evening!");
}
else if(time >= 2100 && time <= 2359){
    alert("Good night!");
}
else{
    alert("Don't match format");
}