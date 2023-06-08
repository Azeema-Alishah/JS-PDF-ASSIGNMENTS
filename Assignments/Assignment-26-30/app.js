                          //Math Methods ASSIGN 26-30//

//TASK 1//
//Write a program that takes a positive integer from user & display the following in your browser.
//a. number
document.write("<h3>Numbers</h3>")
var posNumInput = Number(prompt("Enter your positive integer:"))
document.write ("Number: " + posNumInput + "<br>")

//b. round off value of the number
var RoundOffNum = Math.round(posNumInput)
document.write("Round off value: " + RoundOffNum + "<br>")

//c. floor value of the number
var FloorNum = Math.floor(posNumInput)
document.write("Floor value: " + FloorNum + "<br>")

//d. ceil value of the number
var CeilNum = Math.ceil(posNumInput)
document.write("Ceil value: " + CeilNum + "<br>" + "<br>")

//TASK 2//
//Write a program that takes a negative floating point number from user & display the following in your browser.
//a. number
var NegFloatPointNum = parseFloat (prompt("Enter a negative number:"))
document.write ("Number: " + NegFloatPointNum + "<br>")

//b. round off value of the number
var Rounded = Math.round(NegFloatPointNum)
document.write("Round off value: " + Rounded + "<br>")

//c. floor value of the number
var FloorVal = Math.floor (NegFloatPointNum)
document.write("Floor value: " + FloorVal + "<br>")

//d. ceil value of the number
var CeilVal = Math.ceil(NegFloatPointNum)
document.write("Ceil value: " + CeilVal + "<br>" + "<br>")

//TASK 3//
//Write a program that displays the absolute value of a number.
//E.g. absolute value of -4 is 4 & absolute value of 5 is 5
var AbsNum = Number(prompt("Absolute value:"))
var AbsVal = Math.abs(AbsNum)
document.write("The absolute value of " + AbsNum + "  is " + AbsVal + "<br>" + "<br>")

//TASK 4//
//Write a program that simulates a dice using random() method of JS Math class.
//Display the value of dice in your browser.:
var diceVal = Math.floor(Math.random() * 6) + 1
var diceValu = Math.floor(Math.random() * 6) + 1
document.write("Random dice value: " + diceVal + "<br>")
document.write("Random dice value: " + diceValu + "<br>" + "<br>")

//TASK 5//
//5. Write a program that simulates a coin toss using random() method of JS Math class.
//Display the value of coin in your browser
var randomNum = Math.random()
var coinValue = randomNum < 0.5 ? "Heads" : "Tails"
document.write("Random coin value: " +  coinValue + "<br>" + "<br>")

//TASK 6//
//Write a program that shows a random number between 1 and 100 in your browser.
var RndmNum = Math.floor(Math.random() * 100) + 1
document.write("Random no. bw 1 and 100: " + RndmNum + "<br>" + "<br>")

//TASK 7//
//Write a program that asks the user about his weight.
//Parse the user input and display his weight in your browser.
//Possible user inputs can be:
//a. 50
//b. 50kgs
//c. 50.2kgs
//d. 50.2kilograms
var WeightIs = Number(prompt("Your weight:"))
var YourWeight = parseFloat(WeightIs)
document.write("Your weight is " + YourWeight + "kgs")

//TASK 8//
//Write a program that stores a random secret number from 1 to 10 in a variable.
//Ask the user to input a number between 1 and 10.
//If the user input equals the secret number, congratulate the user.
var SecNum = Math.floor(Math.random() * 10) + 1
var GuessNm = Number(prompt("Guess a secret no between 1 and 10:"))
if (GuessNm === SecNum) {
    alert("Congratulations for guessing the correct number!")
}
 else {
    alert("Incorrect! Please try again")
 }

