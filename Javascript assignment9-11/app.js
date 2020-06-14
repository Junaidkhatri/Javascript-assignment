// .....................CityNames........................//

var city = prompt("Enter your city name" , "" );
var change = city.toUpperCase();
if (city === "Islamabad" || city === "islamabad"){
    alert("Welcome to Islamabad" + "!")
}
else if (city === "Karachi" || city === "karachi"){
    alert("Welcome to city of lights" + "!")
}
else if (city === "Faisalabad" || city === "faisalabad"){
    alert("Welcome to Faisalabad" + "!")
}
else if (city === "Hyderabad" || city === "hyderabad"){
    alert("Welcome to city of Bangles" + "!")
}
else if (city === "Multan" || city === "multan"){
    alert("Welcome to Multan" + "!")
}
else if (city === "Sukker" || city === "sukker"){
    alert("Welcome to Sukker" + "!")
}
else if (city === "Rawalpindi" || city === "rawalpindi"){
    alert("Welcome to Rawalpindi" + "!")
}
else if (city === "Peshawar" || city === "peshawar"){
    alert("Welcome to Peshawar" + "!")
}
else{
    alert("It is not shown in code")
}
  

// .......................gender.........................//

var gender = prompt("Enter your gender", "");
if(gender === "male" || gender === "Male"){
    alert("Good Morning Sir");
}
else if(gender === "female" || gender === "Female") {
    alert("Good Morning Ma'am"); 
} 
else{
    alert("Sorry it is not shown");
}


// .......................TraficSignals......................//

var traficSignals = prompt("Enter anyone color of road trafic signal", "");
if(traficSignals === "red" || traficSignals === "Red"){
    alert("Must Stop!");
}
else if(traficSignals === "yellow" || traficSignals === "Yellow"){
    alert("Ready to move");
}
else if(traficSignals === "green" || traficSignals === "Green"){
    alert("Move now");
}
else{
    alert("You can only enter three colors which are Red,Yellow and Green");
}


// ...................CarFuel..................................//

var carFuel = prompt("Enter remaining fuel in your car in liters", "");
if(carFuel > 0.25 + "liters" || carFuel > 0.25 + "Liters" || carFuel > 0.25 + " " + "liters" || carFuel > 0.25 + " " + "Liters"){
    alert("You can drive easily this remaining fuel");
}
else if(carFuel <= 0.25 + "liters" || carFuel <= 0.25 + "Liters" || carFuel <= 0.25 + " " + "liters" || carFuel <= 0.25 + " " +                                                                                                                                                       "Liters"){
    alert("Please refill the fuel in your car");
}
else{
    alert("Please write Correctly");
}

// ..........................RunScript.......................//

var a = 4; 
if (++a === 5){ 
    alert("given condition for variable a is true"); 
}

var b = 82; 
if (b++ === 83){ 
    alert("given condition for variable b is true"); 
}  

var c = 12; 
if (c++ === 13){ 
    alert("condition 1 is true"); 
} 
if (c === 13){ 
    alert("condition 2 is true"); 
} 
if (++c < 14){ 
    alert("condition 3 is true"); 
} 
if(c === 14){ 
    alert("condition 4 is true"); 
}  
var materialCost = 20000; 
var laborCost = 2000; 
var totalCost = materialCost + laborCost; 
if (totalCost === laborCost + materialCost){ 
    alert("The cost equals"); 
}  
if (true){ 
    alert("True"); 
} 
if (false){ 
    alert("False");
} 
if("car" < "cat"){ 
    alert("car is smaller than cat"); 
}


// .....................InputMarksheet.....................//
var headingMarksheet = ("<h1>Mark Sheet</h1>" + "<br><br><br>");
document.write(headingMarksheet);


var obtainedMarks = prompt("Enter obtained marks", "");
if(obtainedMarks >= 270 && obtainedMarks <= 300){
    var totalMarks = ("Total marks : " + 300 + "<br>");
    document.write(totalMarks);
    document.write("Obatined marks : " + obtainedMarks + "<br>");
    document.write("Percentage : " + (obtainedMarks / 300) * 100 + "%" + "<br>");
    document.write("Grade : " + "A-one-plus" + "<br>");
    document.write("Remarks : " + "Super Excellent");
}
else if(obtainedMarks >= 240 && obtainedMarks <= 270){
    var totalMarks = ("Total marks : " + 300 + "<br>");
    document.write(totalMarks);
    document.write("Obatined marks : " + obtainedMarks + "<br>");
    document.write("Percentage : " + (obtainedMarks / 300) * 100 + "%" + "<br>");
    document.write("Grade : " + "A-one" + "<br>");
    document.write("Remarks : " + "Excellent");
}
else if(obtainedMarks >= 210 && obtainedMarks <= 240){
    var totalMarks = ("Total marks : " + 300 + "<br>");
    document.write(totalMarks);
    document.write("Obatined marks : " + obtainedMarks + "<br>");
    document.write("Percentage : " + (obtainedMarks / 300) * 100 + "%" + "<br>");
    document.write("Grade : " + "A" + "<br>");
    document.write("Remarks : " + "Good");
}
else if(obtainedMarks >= 180 && obtainedMarks <= 210){
    var totalMarks = ("Total marks : " + 300 + "<br>");
    document.write(totalMarks);
    document.write("Obatined marks : " + obtainedMarks + "<br>");
    document.write("Percentage : " + (obtainedMarks / 300) * 100 + "%" + "<br>");
    document.write("Grade : " + "B" + "<br>");
    document.write("Remarks : " + "You need to improve");
}
else if(obtainedMarks >= 150 && obtainedMarks <= 180){
    var totalMarks = ("Total marks : " + 300 + "<br>");
    document.write(totalMarks);
    document.write("Obatined marks : " + obtainedMarks + "<br>");
    document.write("Percentage : " + (obtainedMarks / 300) * 100 + "%" + "<br>");
    document.write("Grade : " + "Fail" + "<br>");
    document.write("Remarks : " + "Sorry");
}
else{
    document.write("Sorry");
}


// .........................GuessGame......................//

var secretNumber = (7);
var guessSecretNumber = prompt("Enter a secret number", "");
if(guessSecretNumber == secretNumber){
    alert("Bingo" + "!" + " Correct answer");
}
if (guessSecretNumber != secretNumber){
    alert("Close enough to the correct answer");
}

// .......................InputTemperature..................//

var temperature = prompt("Enter Tempertaure", "");
if(temperature > 40){
    alert("It is too hot outside.");
}
else if(temperature > 30){
    alert("The Weather today is Normal.");
}
else if(temperature > 20){
    alert("Today’s Weather is cool.");
}
else if(temperature > 10){
    alert("OMG! Today’s weather is so Cool.");
}
else{
    alert("Sorry");
}

// ......................InputCalculater.....................//

var number1 = prompt("Enter your first number for calculating");
var operator = prompt("Enter your operator for calculating");
var number2 = prompt("Enter your second number for calculating");


if(operator === "+"){
    alert((+number1)+(+number2));
}
else if(operator === "-"){
    alert(number1-number2);
}
else if(operator === "*"){
    alert(number1*number2);
}
else if(operator === "/"){
    alert(number1/number2);
}
else if(operator === "%"){
    alert(number1%number2);
}