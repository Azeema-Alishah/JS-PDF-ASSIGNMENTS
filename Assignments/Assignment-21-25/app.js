                         //Sring Methods ASSIGN 21-21//

//TASK 1//
//Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable
//titled fullName. Greet the user using his full name.
var FirstName = prompt ("Enter your first name:")
var LastName = prompt ("Enter yor last name: ")
var FullName = FirstName + " " + LastName
alert ("Hi " + FullName )
console.log(FullName)

//TASK 2//
//Write a program to take a user input about his favorite mobile phone model.
//Find and display the length of user input in your browser
document.write ("<h3>Fav Phone Model</h3>")
var FavPhoneModel = prompt ("What is your favourite phone model?")
document.write ("My favourite phone model is: " + FavPhoneModel + "<br>") 
var length = FavPhoneModel.length
document.write("Length of string is: " + length)

//TASK 3//
//Write a program to find the index of letter “n” in the word “Pakistani” and
//display the result in your browser .
document.write ("<h3>Find indexs</h3>")
var StringWord = "Pakistani"
var FindIndex = StringWord.indexOf("n")
document.write ("String: " + StringWord + "<br>")
document.write ("Index of 'n': " + FindIndex + "<br>" + "<br>")

//TASK 4//
//Write a program to find the last index of letter “l” in the word “Hello World” and
//display the result in your browser.
var wordIs = "Hello World"
var LastIndex = wordIs.lastIndexOf("l")
document.write ("String: " + wordIs + "<br>")
document.write("Last index of 'l' in 'Hello World' is: " + LastIndex + "<br>" + "<br>")

//TASK 5//
//Write a program to find the character at 3rd index in the word “Pakistani” and
//display the result in your browser
var wordis = "Pakistani"
var characterIs = wordis.charAt(3)
document.write ("String: " + wordis + "<br>")
document.write ("Character at index 3: " + characterIs + "<br>" + "<br>")

//TASK 6//
//Repeat Q1 using string concat() method.
var Firstname = prompt ("Your first name:")
var Lastname = prompt ("Your last name:")
var Fullname = Firstname.concat(" " , Lastname)
alert("Greetings " + Fullname)
console.log(Fullname)

//Task 7//
//Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and
//display the result in your browser
var cityReal = "Hyderabad"
var ReplaceCity = cityReal.replace("Hyder", "Islam")
document.write("City: " + cityReal + "<br>")
document.write("After replacement: " + ReplaceCity + "<br>" + "<br>")

//TASK 8//
//8. Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser.
//var message = “Ali and Sami are best friends. They play cricket andfootball together.”;
var message = "Ali and Sami are best friends. They play cricket and football together.";
var NewMessage = message.replace (/and/g , "&")
document.write(NewMessage + "<br>" + "<br>")

//TASK 9//
//9. Write a program that converts a string “472” to a number 472.
//Display the values & types in your browser.
var strIng = "472"
var NumNahi = "string"
var NumHai = Number(strIng)
document.write("Value: " + strIng + "<br>")
document.write("Type: " + typeof + NumNahi + "<br>")
document.write("Value: " + NumHai + "<br>")
document.write("Type: " + typeof + NumHai + "<br>" + "<br>")

//TASK 10//
//Write a program that takes user input.
//Convert and show the input in capital letters.
var opinion = prompt ("Any word:")
var upperOpinion = opinion.toUpperCase()
document.write("User input: " + opinion + "<br>")
document.write("Upper case:  " + upperOpinion + "<br>" + "<br>")

//TASK 11//
//Write a program that takes user input.
//Convert and show the input in title case.
var oP = prompt("Your word:")
var titleCaseInput = toTitleCase(oP)
document.write("User input: " + oP + "<br>")
document.write("Title case: " + titleCaseInput + "<br>" + "<br>")
  function toTitleCase(str) {
    return str.replace(
      /\w\S*/g,
      function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
      }
    )
  }

//TASK 12//
//Write a program that converts the variable num to string.
//var num = 35.36 ;
//Remove the dot to display “3536” display in your browser.
var NumToStr = 35.36
var ConvertToNumStr = NumToStr.toString().replace("." , "")
document.write ("Number: " + NumToStr + "<br>")
document.write ("Result: " + ConvertToNumStr + "<br>" + "<br>")

//TASK 13//
//. Write a program to take user input and store username in a variable.
//If the username contains any special symbol among [@ . , !], prompt the user to enter a valid username.
//For character codes of [@ .
//Note:
//ASCII code of ! is 33
//ASCII code of , is 44
//ASCII code of . is 46
//ASCII code of @ is 64
var usernamees = prompt("Enter your username:")
var specialSymbols = ["@", ".", ",", "!"]
function SpecialSymbol(char) {
  var charCode = char.charCodeAt(0)
  return (charCode === 33 || charCode === 44 || charCode === 46 || charCode === 64)
}
var containssSpecialSymbol = false;
for (var i = 0; i < usernamees.length; i++) {
  if (SpecialSymbol(usernamees[i])) {
    containssSpecialSymbol = true;
    break
  }
}
if (containssSpecialSymbol) {
  alert("Please enter a valid username without special symbols [@ . , !]")
} else {
  alert("Username: " + usernamees)
}

//TASK 14//
//You have an array
//A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
//Write a program to enable “search by user input” in an array.
//After searching, prompt the user whether the given item is found in the list or not.
//Note: Perform case insensitive search. Whether the user enters cookie, Cookie, COOKIE or coOkIE, program
//should inform about its availability. Example:
var A = ["cake", "apple pie", "cookie", "chips", "patties"]
var uSerInput = prompt("Item to search:")
var userInputLowercase = uSerInput.toLowerCase()
var isItemFound = false
for (var i = 0; i < A.length; i++) {
  var currentItem = A[i].toLowerCase()
  if (currentItem === userInputLowercase) {
    isItemFound = true
    break
  }
}
if (isItemFound) {
  alert("Item found in the list!")
} else {
  alert("Item not found in the list.")
}

//TASK 15//
//Write a program to take password as an input from user. 
//The password must qualify these requirements:
//a. It should contain alphabets and numbers
var Passwordis = prompt("Enter your password: ")
var PwdQualify = /^[A-Za-z0-9]*$/
if (PwdQualify.test(Passwordis)){
    alert("Correct")
} else {
    alert("Incorrect")
}

//TASK 16//
//Write a program to convert the following string to an array using string split method.
//var university = “University of Karachi”;
//Display the elements of array in your browser
var Uni= "University of Karachi"
var array = Uni.split("")
for (var i = 0; i < array.length; i++) {
  document.write(array[i] + "<br>" ) 
  document.write("<br>")
}

//TASK 17//
//Write a program to display the last character of a user input.
var LastChar = prompt("Your input:")
var CharIs = LastChar.charAt(LastChar.length -1)
document.write ("User input: " + LastChar + "<br>")
document.write("Last character of input: " + CharIs + "<br>" + "<br>")

//TASK 18//
//You have a string “The quick brown fox jumps over the lazy dog”.
//Write a program to count number of occurrences of word “the” in given string.
var sentence = "The quick brown fox jumps over the lazy dog"
var wordToCount = "the"
var lowercaseSentence = sentence.toLowerCase()
var words = lowercaseSentence.split(" ")
var count = 0
for (var i = 0; i < words.length; i++) {
  if (words[i] === wordToCount) {
    count++
  }
}
document.write( "Text: " + sentence + "<br>")
document.write("There are 2 occurrences of the word: " + wordToCount )


