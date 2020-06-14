// ...........................arithmeticvariable....................//

var result = "Result:";
document.write(result);

var value = ("<br>" + "The value of a is: " + 10);
document.write(value);

var line = ("<br><br>" + "---------------------------------------" + "<br><br>");
document.write(line);

var a = 10;
var a1 = ++a;
document.write(a1);

var arithmetic = ("<br>" + "The value of ++a is: " + 11);
document.write(arithmetic);

var arithmetic = ("<br>" + "Now the value of a is: " + 11 + "<br><br>");
document.write(arithmetic);

var a = 11;
var a1 = a++;
document.write(a1);

var arithmetic = ("<br>" + "The value of a++ is: " + 11);
document.write(arithmetic);

var arithmetic = ("<br>" + "Now the value of a is: " + 12 + "<br><br>");
document.write(arithmetic);

var a = 12;
var a1 = --a;
document.write(a1);

var arithmetic = ("<br>" + "The value of --a is: " + 11);
document.write(arithmetic);

var arithmetic = ("<br>" + "Now the value of a is: " + 11 + "<br><br>");
document.write(arithmetic);

var a = 11;
var a1 = a--;
document.write(a1);

var arithmetic = ("<br>" + "The value of a-- is: " + 11);
document.write(arithmetic);

var arithmetic = ("<br>" + "Now the value of a is: " + 10 + "<br><br>");
document.write(arithmetic);

// ....................variablesafterexecution...........................//

var a = 2 , b = 1;
var result = --a - --b + ++b + b--;
document.write(result);

var explain = ("<br>" + "Explain --a: Value of a is: " + 2 + " when we subract " + 2 + " into " + 1 + " become " + 1 + " this is because that before a two times is minuse sign so firstly " + 1 + " will be subtract then will answe come " + 1);
document.write(explain);

var explain = ("<br>" + "Explain --a - --b : Value of a is: " + 2 + " when we subract " + 2 + " into " + 1 + " become " + 1 + " this is because that before a two times is minuse sign so firstly " + 1 + " will be subtract then answer will come " + 1 + " and value of b is: " + 1 + " now first " + 1 + " will be subtract because before b two times is minuse so " + 1 + " will be subtract into " + 1 + " then answer will come " + 0 + " Now we subtract answer of a and answer of b so after subtacting answer will come " + 1);
document.write(explain);

var explain = ("<br>" + "Explain --a - --b + ++b : Value of a is: " + 2 + " when we subract " + 2 + " into " + 1 + " become " + 1 + " this is because that before a two times is minuse sign so firstly " + 1 + " will be subtract then answer will come " + 1 + " and value of b is: " + 1 + " now first " + 1 + " will be subtract because before b two times is minuse so " + 1 + " will be subtract into " + 1 + " then answer will come " + 0 + " ++b in this situation first we add " + 1 + " so answer will be come " + 2. + " As we know answer of --a - --b is " + 1 + "Now answers of --a - --b and ++b will be add so after adding these answer will come " + 3);
document.write(explain);

var explain = ("<br>" + "Explain --a - --b + ++b + b-- : Value of a is: " + 2 + " when we subract " + 2 + " into " + 1 + " become " + 1 + " this is because that before a two times is minuse sign so firstly " + 1 + " will be subtract then answer will come " + 1 + " and value of b is: " + 1 + " now first " + 1 + " will be subtract because before b two times is minuse so " + 1 + " will be subtract into " + 1 + " then answer will come " + 0 + " ++b in this situation first we add " + 1 + " so answer will be come " + 2. + " Now firsly we add " +  2 + " into " + 1 + "because first is coming b then b-- so firtly add " + 1 + " into " + 2 + " it will become " + 3 + " now we will subtract " + 1 + " into " + 3 + " answer will become " + 2. + " As we know answers o --a - --b + ++b is: " + 3. + "<br><br><br>");
document.write(explain);


// ............................Takeinputbyuser......................//

// var a = prompt("Enter your name" , " ");
// alert("Hello, " + a + "!");

// var a = prompt("Enter a number" , " ");
// alert(a*1);
// alert(a*2);
// alert(a*3);
// alert(a*4);
// alert(a*5);
// alert(a*6);
// alert(a*7);
// alert(a*8);
// alert(a*9);
// alert(a*10);



// .......................SubjectMarksheet...................//

var headings = ("<b>Subject " + " Total Marks " + " Obtained Marks " + " Percentage </b>");
document.write(headings);

var subject1 = " <br> " + prompt("Enter 1st subject name" , "");
document.write(subject1);

var subject2 = " <br> " + prompt("Enter 2nd subject name" , "");
document.write(subject2);

var subject3 = " <br> " + prompt("Enter third subject name" , "");
document.write(subject3);







