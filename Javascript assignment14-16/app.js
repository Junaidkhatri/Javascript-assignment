// ..........................Task1....................................//




// ..........................Task2....................................//




// ........................Task3...............................//

// var stringArray0 = ["Hyderabad"]; 
// var stringArray1 = ["Karachi"];
// var stringArray2 = ["Sukker"];
// alert("Welcome to " + stringArray0);

// // .....................Task4............................//

// var numbersArray = [0,1,2,3,4,5];
// alert(numbersArray);

// // .....................Task5..........................//

// var booleanArray = ["hyderabad", "karachi", "sukker"];
// alert(booleanArray);

// // .......................Task6...........................//

// var mixedArray = [0, "fantastic", "what", "ok", true];
// alert(mixedArray);

// ....................Task7..............................//

// var qualiicaion = "Qualiications:" + "<br><br><br>";
// document.write(qualiicaion);

// var qualiicaions = ["SSC" + "<br>" +"HSC" + "<br>" +"BSC" + "<br>" +"BS" + "<br>" +"BCOM" + "<br>" +"MS" + "<br>" +"M.Phil." + "<br>" +"phD" + "<br><br><br>"];
// document.write(qualiicaions);

// ......................Task8..............................//

// var studentsNames = ["Score of Michael is " + 320 + ". " + "Percentage: " + 64 + "%" + "<br>" + "Score of John is " + 230 + ". " + "Percentage: " + 46 + "%" + "<br>" + "Score of Tony is " + 480 + ". " + "Percentage: " + 96 + "%"];
// document.write(studentsNames);


// ........................Task9..................................//

var colors = ["Green ", "Yellow ", "Blue ", "black ", "White ", "Maganda ", "Red ", "Cyan ", "Purple ", "Pink ", "Brown ", "Gray" + "<br>"];
document.write(colors);

// ........................Task9 Part(a)..................................//

var askColors = prompt("What color you want to add to the begining of the array", "");
var colors = ["Green ", "Yellow ", "Blue ", "black ", "White ", "Maganda ", "Red ", "Cyan ", "Purple ", "Pink ", "Brown ", "Gray" + "<br>"];
colors.unshift(askColors);
document.write(colors);

// ........................Task9 Part(b)..................................//

var askColors = prompt("What color you want to add to the end of the array", "");
var colors = ["Green ", "Yellow ", "Blue ", "black ", "White ", "Maganda ", "Red ", "Cyan ", "Purple ", "Pink ", "Brown ", "Gray"];
colors.push(askColors);
document.write(colors);

// ........................Task9 Part(c)..................................//

var colors = ["Green ", "Yellow ", "Blue ", "black ", "White ", "Maganda ", "Red ", "Cyan ", "Purple ", "Pink ", "Brown ", "Gray" + "<br>"];
colors.unshift("<br>" + "Sky blue", "Light blue");
document.write(colors);

// ........................Task9 Part(d)..................................//

var colors = ["Green ", "Yellow ", "Blue ", "black ", "White ", "Maganda ", "Red ", "Cyan ", "Purple ", "Pink ", "Brown ", "Gray" + "<br>"];
colors.shift();
document.write(colors);

// ........................Task9 Part(e)..................................//

var colors = ["Green ", "Yellow ", "Blue ", "black ", "White ", "Maganda ", "Red ", "Cyan ", "Purple ", "Pink ", "Brown ", "Gray" + "<br>"];
colors.pop();
document.write(colors);

// ........................Task9 Part(f)..................................//




// ........................Task9 Part(g)..................................//




// ........................Task10..................................//

var scoresOfStudents = ["<br>" + "Scores of stdents : " + 320 , 230 , 480, 120 + "<br>"];
document.write(scoresOfStudents);
var orderedScoresOfStudents = ["Ordered Scores of stdents : " + 120 , 480 , 230 , 320 + "<br>"];
document.write(orderedScoresOfStudents);

// ........................Task11..................................//

var citiesList = ("Cities list:" + "<br>");
document.write(citiesList);
var cities = ["Islamabad","Karachi","Peshawar","Multan","Quetta" + "<br>"];
document.write(cities);

var selectCities = cities.slice(1,4,5);
document.write(selectCities);

// ........................Task12..................................//

var array = ("<br>" + "Array:" + "<br>");
document.write(array);

var arr = ["This" , "is", "my", "cat"];
document.write(arr);

var array = ("<br>" + "String:" + "<br>");
document.write(array);

var arr = ["This " + "is " + "my " + "cat"];
document.write(arr);


// ........................Task13..................................//

var device = ("<br><br><br>" + "Devices:" + "<br>");
document.write(device);

var devices = ["keyboard" , "mouse" , "printer" , "monitor"];
document.write(devices);

var out = ["<br><br>" + "Out:" + "<br>" + "keyboard" + "<br>" + "Out:" + "<br>" + "mouse" + "<br>" + "Out:" + "<br>" + "printer" + "<br>" + "Out:" + "<br>" + "monitor"];
document.write(out);


// ........................Task14..................................//

var device = ("<br><br><br>" + "Devices:" + "<br>");
document.write(device);

var devices = ["monitor" , "printer" , "mouse" , "keyboard"];
document.write(devices);

var out = ["<br><br>" + "Out:" + "<br>" + "monitor" + "<br>" + "Out:" + "<br>" + "printer" + "<br>" + "Out:" + "<br>" + "mouse" + "<br>" + "Out:" + "<br>" + "keyboard"];
document.write(out);


// ........................Task15..................................//

var phones = ["<br><br><br>" + "Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write(phones);