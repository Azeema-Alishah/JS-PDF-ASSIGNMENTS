               //User Input And Conditional Statement ASSIGN 9-10//

//TASK 1//
//Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this:
//“Welcome to city of lights”               
var input = prompt("City Name?")
var cityy= "karachi"
if (input===cityy){
    alert ("Welcome to city of lights")
}

//TASK 2//
//Write a program to take “gender” as input from user.
//If the user is male, give the message: Good Morning Sir.
//If the user is female, give the message: Good Morning Ma’am.
var gender = prompt("Your gender is male or female?")
var gend = "male"
var gen = "female"
if (gender===gend)
  alert("Good morning Sir!")
else
  alert("Good morning Ma'am!")

//TASK 3//
//Write a program to take input color of road traffic signal from
//the user & show the message according to this table:
var traffcolour  = prompt("Colour of road traffic signal? red , yellow or green ?")
var colourOne = "red"
var colourTwo = "yellow"
var colourThree = "green"
if (traffcolour === colourOne){
    alert("Must Stop")
}
else if (traffcolour === colourTwo){
    alert("Ready to Move")
}
else if(traffcolour === colourThree){
    alert("Move Now")
}

//TASK 4//
//Write a program to take input remaining fuel in car (in litres) from user.
//If the current fuel is less than 0.25litres, show the message “Please refill the fuel in your car”
var petrolInput = prompt("Remaining fuel in  car in litres?")
var petrol = 0.25
if (petrolInput < petrol ) {
    alert("Please refill the fuel in your car.")
}

//TASK 5//
//Run this script, & check whether alert message would be displayed or not. Record the outputs.
//a. 
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}

//b.
 var b = 82;
if (b++ === 83){
    alert("given condition for variable b is true");
    }
    
//c.
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
    
//d. 
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}

//e.
if (true){
alert("True");
}
if (false){
alert("False");
}

//f.
if("car" < "cat"){
alert("car is smaller than cat");
}

//TASK 6//
//Write a program to take input the marks obtained in three subjects & total marks.
//Compute & show the resulting percentage on your page.
//Take percentage & compute grade as per following table:
//Show the total marks, marks obtained, percentage, grade & remarks like:
document.write('<h3> Task 6 </h3>');
var sub11Marks= Number(prompt("Enter subject 1 Marks"))
var sub22Marks=Number(prompt("Enter subject 2 Marks"))
var sub33Marks=Number(prompt("Enter subject 3 Marks"))
var marksObt= sub11Marks + sub22Marks + sub33Marks;
var perC=(marksObt/300)*100
document.write("Total marks : " + 300 + "<br>")
document.write("Marks obtained : " + marksObt + "<br>")
document.write("Percentage : " + perC + "<br>")
if(80<perC){
    document.write("Grade:  A-one" + "<br>")
    document.write("Reamrks : Excellent")
}
else
if(70<perC){
    document.write("Grade: A" + "<br>")
    document.write("Reamrks : Good")
}
else
if(60<perC){
    document.write("Grade:  B" + "<br>")
    document.write("Reamrks : You need to improve")
}
else
if(60>perC){
    document.write("Grade:  Fail" + "<br>")
    document.write("Remarks : Sorry")
}


//TASK 7//
//Guess game:
//Store a secret number (ranging from 1 to 10) in a variable.
//Prompt user to guess the secret number.
//a. If user guesses the same number, show “Bingo! Correct answer”.
var SecretNo = 6
var guess = Number(prompt("Guess the secret no bw 1-10?"))
if (guess === SecretNo) {
    alert("Bingo! Correct answer")
}

//b. If the guessed number +1 is the secret number, show
//“Close enough to the correct answer”.
else if (guess + 1 === SecretNo) {
    alert("Close enough to the correct answer");
}

//TASK 8//
//Write a program to check whether the given number is divisible by 3.
//Show the message to the user if the number is divisible by 3.
var numberDivisible = Number(prompt("Enter a number:"))
if (numberDivisible % 3 === 0) {
    alert("The number is divisible by 3")
} else {
    alert("The number is not divisible by 3")
}

//TASK 9//
//Write a program that checks whether the given input is an even number or an odd number.
var InputNo = Number(prompt("Enter a no"))
if (InputNo % 2 === 0) {
    alert("This is an even number")
} else {
    alert("This is an odd number")
}

//TASK 10//
//Write a program that takes temperature as input and shows a message based on following criteria
//a. T > 40 then “It is too hot outside.”
var temperatureIs = Number(prompt("Enter your temperature:"))
if (temperatureIs > 40) {
    alert("It is too hot outside")
}

//b. T > 30 then “The Weather today is normal.”
else if (temperatureIs > 30) {
    alert("The Weather today is Normal")
}

//c. T > 20 then “Today’s Weather is cool.”
else if (temperatureIs > 20) {
    alert("Today's Weather is cool.");
}

//d. T > 10 then “OMG! Today’s weather is so Cool.”
else if (temperatureIs > 10) {
    alert("OMG! Today's weather is so cool.");
}

//TASK 11//
//Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input:
//a. First number
var firstNumber = Number(prompt("Enter the first number:"))

//b. Second number
var secondNumber = Number(prompt("Enter the second number:"))

//c. Operation (+, -, *, /, %)
//Compute & show the calculated result to user.
var operation = prompt("Enter the operation (+, -, *, /, %):")
var resultss 
if (operation === "+") {
    resultss = firstNumber + secondNumber
} else if (operation === "-") {
    resultss = firstNumber - secondNumber
} else if (operation === "*") {
    resultss = firstNumber * secondNumber
} else if (operation === "/") {
    resultss = firstNumber / secondNumber
} else if (operation === "%") {
    resultss = firstNumber % secondNumber
}
alert("Result: " + resultss)

