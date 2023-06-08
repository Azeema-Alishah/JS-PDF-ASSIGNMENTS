                             //Functions ASSIGN 35-38//
            
//TASK 1//
//Write a function that displays current date & time in your browser.
document.write("<h3>Functions</h3>")
function displayDateTime() {
    var currrrentDate = new Date()
    document.write(currrrentDate + "<br>" + "<br>")
  }
  displayDateTime()

//TASK 2//
//Write a function that takes first & last name and then it greets the user using his full name.
function AskName () {
   var FirstNamee = prompt("Your first name?")
   var LastNamee =  prompt("Your last name?")
   var FullNamee = FirstNamee + " " + LastNamee
   document.write("Welcome " + FullNamee+ "<br>" + "<br>")
}
  AskName()

//TASK 3//
//Write a function that adds two numbers (input by user) and returns the sum of two numbers.
function AddNums () {
var FirstNumber = Number(prompt("Your first number?"))
var SecondNumber = Number(prompt("Youe second number?"))
var AddedNums = FirstNumber + SecondNumber
alert("Sum of your two numbers is " + AddedNums)
}
AddNums()

//TASK 4//
//Calculator:
//Write a function that takes three arguments num1, num2 & operator & compute the desired operation. 
//Return and show the desired result in your browser.
function calculate(num1, num2, operator) {
    var Num1 = Number(prompt("First number is?"))
    var Num2 = Number(prompt("Second number is?"))
    var operatorr = prompt("Your operator (either +, -, * or / )?")
    var resultt 
    switch (operatorr) {
      case "+":
        resultt = Num1 + Num2
        document.write(`${Num1} + ${Num2} = ${resultt}` + "<br>" + "<br>")
        break;
      case "-":
        resultt = Num1 - Num2
        document.write(`${Num1} - ${Num2} = ${resultt}`+ "<br>" + "<br>")
        break;
      case "*":
        resultt = Num1 * Num2
        document.write(`${Num1} * ${Num2} = ${resultt}`+ "<br>" + "<br>")
        break;
      case "/":
        resultt = Num1 / Num2
        document.write(`${Num1} / ${Num2} = ${resultt}`+ "<br>" + "<br>")
        break;
      default:
        document.write("Invalid operator"+ "<br>" + "<br>")
    }
  }
  calculate()

//TASK 5//
//Write a function that squares its argument.
function squareNumber(num) {
    var square = Number(prompt("Enter a number to square?"))
    var SquareIs = square * square
    document.write ("Square of " + square + " is: " + SquareIs + "<br>" + "<br>")
  }
  squareNumber()

//TASK 6//
//Write a function that computes factorial of a number.
  function factorialize(numB) {
    if (numB < 0) 
          return -1;
    else if (numB === 0 || numB === 1) 
        return 1;
    else {
        return numB * factorialize(numB - 1);
    }
  }
  var resulttt = factorialize(10);
  document.write("factorial is: "+ resulttt + "<br>" + "<br>")

//TASK 7//
//Write a function that take start and end number as inputs & display counting in your browser.
//document.write("<h3>Task 7</h3>");
var firstnums = prompt("Counting starts from:")
var secondnums = prompt("Counting ends at:")
for (i = firstnums ; i <= secondnums ; i++) {
  document.write(i + "<br>" )
}

//TASK 8//
//Write a nested function that computes hypotenuse of a right angle triangle.
//Hypotenuse2 = Base2 + Perpendicular2
//Take base and perpendicular as inputs.
//Outer function : calculateHypotenuse()
//Inner function: calculateSquare()
var base = Number(prompt("Enter base"))
var perpendicular = Number(prompt("Enter perpendicular"))
function calculateHypotenuse (base , perpendicular){
  function calculateSquare(side){
    return side * side
  }
    var baseSq = calculateSquare(base)
    var perpenSq  = calculateSquare(perpendicular)
    var hypnoSq = baseSq + perpenSq
    var hypot  = Math.sqrt(hypnoSq)
    document.write("Base= " + base + "<br>")
    document.write("Perpendicular= " + perpendicular + "<br>")
    document.write("Hypotenuse= " + hypot + "<br>" + "<br>")
 }
 calculateHypotenuse(base , perpendicular)

//TASK 9//
//Write a function that calculates the area of a rectangle.
//A = width * height
//Pass width and height in following manner:
//i. Arguments as value
//ii. Arguments as variables
//document.write("<h3>Task 9</h3>");
var widthIs = Number(prompt("Enter width of the rectangle"))
var heightIs = Number(prompt("Enter height of the rectangle"))
function RecArea(width, height) {
  var ItIs = width * height
  document.write("Width= " + widthIs + "<br>")
  document.write("Height= " + heightIs + "<br>")
  document.write("Area of rectangle= " + ItIs + "<br>" + "<br>")
}
RecArea(widthIs, heightIs)

//TASK 10//
//Write a JavaScript function that checks whether a passed string is palindrome or not?
//A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam.
function PalindromeIs(str) {
  var StrIs = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
  for (var i = 0; i < StrIs.length / 2; i++) {
    if (StrIs[i] !== StrIs[StrIs.length - 1 - i]) {
      return false
    }
  }
  return true
}
var inpuut = prompt("Enter a word to check if it's a palindrome:")
var reesult = PalindromeIs(inpuut)
document.write("Word : " + inpuut + "<br>")
if (reesult) {
  document.write("It is a palindrome" + "<br>" + "<br>")
} else {
  document.write("It is not a palindrome" + "<br>" + "<br>")
}

//TASK 11//
//Write a JavaScript function that accepts a string as a
//parameter and converts the first letter of each word of the string in upper case.
//EXAMPLE STRING : 'the quick brown fox'
//EXPECTED OUTPUT : 'The Quick Brown Fox'
function capitalizeFirstLetter(str) {
  var wordds = str.split(' ')
  for (var i = 0; i < wordds.length; i++) {
    var word = wordds[i]
    var capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1)
    wordds[i] = capitalizedWord
  }
  var result = wordds.join(' ')
  return result
}
var iinput = prompt("Enter a sentence:")
var output = capitalizeFirstLetter(iinput)
document.write("Input:" + iinput + "<br>" )
document.write("Output:" + output + "<br>" + "<br>")

//TASK 12//
//Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
//EXAMPLE STRING : 'Web Development Tutorial'
//EXPECTED OUTPUT : 'Development'
function LongestWord(str) {
  var woords = str.split(' ')
  var longestWord = ''
  for (var i = 0; i < woords.length; i++) {
    var wword = woords[i]
    if (wword.length > longestWord.length) {
      longestWord = wword
    }
  }
  return longestWord
}
var inputs = prompt("Any sentence:")
var outputs = LongestWord(inputs)
document.write("Output:", outputs + "<br>" + "<br>")

//TASK 13//
//Write a JavaScript function that accepts two arguments, a string and a letter 
//and the function will count the number of occurrences of the specified letter within the string.
//Sample arguments : 'JSResourceS.com', 'o'
function countLetterOccurrences(str, letter) {
  var count = 0;
  var lowerStr = str.toLowerCase();
  var lowerLetter = letter.toLowerCase();
  for (var i = 0; i < lowerStr.length; i++) {
    if (lowerStr[i] === lowerLetter) {
      count++
    }
  }
  return count
}
var inputString = 'JSResourceS.com'
var inputLetter = 'o'
var occurrenceCount = countLetterOccurrences(inputString, inputLetter)
document.write("Input word: " + inputString + "<br>")
document.write("Input letter: " + inputLetter + "<br>")
document.write("Number of occurrences:" + occurrenceCount + "<br>" + "<br>")


//TASK 14//
//The Geometrizer
//Create 2 functions that calculate properties of a circle, using the definitions here.
//Create a function called calcCircumference:
//• Pass the radius to the function.
//• Calculate the circumference based on the radius, and output
//"The circumference is NN".
//Create a function called calcArea:
//• Pass the radius to the function
//• Calculate the area based on the radius, and output 
//"The area is NN".
//Circumference of circle = 2πr
//Area of circle = πr2
var RadiusIs = Number(prompt("Enter radius:"))
function calcCircumferencee () {
    // var RadiusIs = Number(prompt("Enter radius:"))
     var Circum = Math.round(2 * Math.PI * RadiusIs)
     document.write("Radius:" + RadiusIs + "<br>")
     document.write("The circumfernce is " + Circum + "<br>")
}
calcCircumferencee() 
function calcAreaa (){
  var AreaIs = Math.round(Math.PI * RadiusIs * RadiusIs)
  document.write("The area is " + AreaIs + "<br>")
}
calcAreaa()

