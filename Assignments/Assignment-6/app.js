                 //Math Expressions ASSIGN 6//

//TASK 1//
//Write a program to take a number in a variable, do the required arithmetic to
//display the following result in your browser:
document.write("<h1>Result:</h1>")
var a = 10
document.write("The value of a is: " + a + "</br>")
document.write("...................................." + "</br>" + "<br>");
var val = 10+1
document.write("The value of ++a is: " +val + "</br>"+ "Now the value of a " +" is: " + val + "</br>"+ "<br>")
var val2 = val+1
document.write("The value of a++ is: " +val + "</br>"+ "Now the value of a " +" is: " + val2 + "</br>"+ "<br>")
var val3 = --a+2
document.write("The value of --a is: " + val + "</br>" + "Now the value of a " +" is: " + val3 + "</br>" + "<br>")
var val4 = a-- +1
document.write("The value of a-- is: " + val + "</br>" + "Now the value of a " +" is: " + val4+ "</br>"+ "<br>"+ "<br>")

//TASK 2//
//What will be the output in variables a, b & result after execution of the following script:
//var a = 2, b = 1;
//var result = --a - --b + ++b + b--;
//Explain the output at each stage:
//--a;
//--a - --b;
//--a - --b + ++b;
//--a - --b + ++b + b--;
var a = 2, b= 1
var a1 = --a - --b
document.write("a is "+ a1 + "</br>")
var a2 = --a - --b + ++b;
document.write("b is "+ a2 + "</br>")
var a3 = --a - --b + ++b + b--;
document.write("result is "+ a3 + "</br>" + "<br>")

//TASK 3//
//Write a program that takes input a name from user & greet the user.
var userInput= prompt("Your Name?")
alert ("Hi" + " "+ userInput)
console.log(userInput)

//TASK 4//
//Write a program to take input a number from user & display it’s multiplication table on your browser.
//If user does not enter a new number, multiplication table of 5 should be displayed by default.
var userInputtt = prompt("Enter a number:")
var numberr = parseFloat(userInputtt)
if (isNaN(numberr)) {
  numberr = 5
}
var table = ""
for (var i = 1; i <= 10; i++) {
  var result = numberr * i
  table += numberr + " x " + i + " = " + result + "<br>"
}
document.write( table + "<br>" + "<br>");

//TASK 5//
//Take :
//a) Take three subjects name from user and store them in 3 different variables.
var subject1 = prompt("Subject 1:");
var subject2 = prompt("Subject 2:");
var subject3 = prompt("Subject 3:");

//b) Total marks for each subject is 100, store it in another variable.
var MarksForSubject1 = 100
var MarksForSubject2 = 100
var MarksForSubject3 = 100

//c) Take obtained marks for first subject from user and stored it in different variable.
var obtainedMarksSubject1 = Number(prompt("Enter the obtained marks for " + subject1 + ":"))

//d) Take obtained marks for remaining 2 subjects from user and store them in variables.
var obtainedMarksSubject2 = Number(prompt("Enter the obtained marks for " + subject2 + ":"))
var obtainedMarksSubject3 = Number(prompt("Enter the obtained marks for " + subject3 + ":"))

//e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table)
var totalMarks = MarksForSubject1 + MarksForSubject2 + MarksForSubject3

// Calculate the obtained marks
var obtainedMarks = obtainedMarksSubject1 + obtainedMarksSubject2 + obtainedMarksSubject3

// Calculate the percentage
var percentage = (obtainedMarks / totalMarks) * 100

// Display the results in the browser
document.write("<p>Subject 1: " + subject1 + "</p>")
document.write("<p>Total Marks for Subject 1: " + MarksForSubject1 + "</p>")
document.write("<p>Obtained Marks for Subject 1: " + obtainedMarksSubject1 + "</p>"+"<br>")
document.write("<p>Subject 2: " + subject2 + "</p>")
document.write("<p>Total Marks for Subject 2: " + MarksForSubject2 + "</p>")
document.write("<p>Obtained Marks for Subject 2: " + obtainedMarksSubject2 + "</p>"+ "<br>")
document.write("<p>Subject 3: " + subject3 + "</p>")
document.write("<p>Total Marks for Subject 3: " + MarksForSubject3 + "</p>")
document.write("<p>Obtained Marks for Subject 3: " + obtainedMarksSubject3 + "</p>"+ "<br>")
document.write("<p>Total Marks: " + totalMarks + "</p>")
document.write("<p>Obtained Marks: " + obtainedMarks + "</p>")
document.write("<p>Percentage: " + percentage + "%</p>")


