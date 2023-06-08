                   //IF ELSE AND ELSE IF STATEMENTS ASSIGN 12-13//

//TASK 1//                   
//Write a program that takes a character (number or string) in a variable & checks 
//whether the given input is a number, uppercase letter or lower case letter.
//(Hint: ASCII codes:- A=65, Z=90, a=97, z=122).
document.write('<h3>Caps</h3>')
var characterss = prompt("Any character:")
if (characterss == characterss.toUpperCase()) {
    document.write(characterss + " is an uppercase letter")
}
else if (characterss == characterss.toLowerCase()) {
    document.write(characterss + " is a lowercase letter")
}

//else if (characterss == parseFloat()) {
  //  document.write(characterss + " is a number")
//}

//TASK 2//
//Write a JavaScript program that accept two integers and display the larger.
//Also show if the two integers are equal.
var IntegerOne = Number(prompt("Your first integer:"))
var IntegerTwo = Number(prompt("Your second integer:"))
if (IntegerOne > IntegerTwo) {
    alert("The larger integer is: " + IntegerOne)
} else if (IntegerTwo > IntegerOne) {
    alert("The larger integer is: " + IntegerTwo)
} else {
    alert("Both integers are equal.")
}

//TASK 3//
// Write a program that takes input a number from user & state whether the number is positive, negative or zero.
var NUmber = Number(prompt("Enter a number:"))
if (NUmber > 0) {
    alert("The number is positive")
} else if (NUmber < 0) {
    alert("The number is negative")
} else {
    alert("The number is zero")
}

//TASK 4//
//Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise
var character = prompt("Your character:")
//character = character.toLowerCase()
// Check if the character is a vowel
var VowelIs = false
if (
    character === "a" ||
    character === "e" ||
    character === "i" ||
    character === "o" ||
    character === "u"
) {
    VowelIs = true
}
if (VowelIs) {
    alert("The character is a vowel")
} else {
    alert("The character is not a vowel")
}

//TASK 5//
//Write a program that:
//a. Store correct password in a JS variable.
var PwdIs= "MyPwd"

//b. Asks user to enter his/her password
var Pwd = prompt("Enter your password:")

//c. Validate the two passwords:
//i. Check if user has entered password. If not, then give message “ Please enter your password”
if (!Pwd){
    alert("Please enter your password")
}

//ii. Check if both passwords are same.
//If they are same, show message “Correct! The password you entered matches the original password”.
//Show “Incorrect password” otherwise.
else if (Pwd === PwdIs){
    alert("Correct! The password you entered matches the original password.")
}
else {
    alert("Incorrect password")
}

//TASK 6//
//This if/else statement does not work. Try to fix it:
var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
}
else {
greeting = "Good evening";
}

//TASK 7//
//7. Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm. 
//Implement the following case using if, else & else if statements
var time = Number(prompt("Enter your time in 24-hour format like: 1900 = 7pm"))
if (time >= 0000 && time < 1200) {
    alert("Good morning!")
} else if (time >= 1200 && time < 1700) {
    alert("Good afternoon!")
} else if (time >= 1700 && time < 2100) {
    alert("Good evening!")
} else if (time >= 2100 && time <= 2359) {
    alert("Good night!")
} else {
    alert("Invalid time entered!")
}

