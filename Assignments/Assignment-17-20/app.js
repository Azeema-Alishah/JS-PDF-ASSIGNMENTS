                     //Arrays and Loops ASSIGN 17-20//

//TASK 1//
//Declare and initialize an empty multidimensional array.
//(Array of arrays)
var MultiArr = [[] , [] , []]

//TASK 2//
//Declare and initialize a multidimensional array representing the following matrix:
var MatrixNum = [[0, 1, 2, 3],[1, 0, 1, 2],[2, 1, 0, 1]]
  document.write ("<h2>Multidimensional Matrix Array</h2>")
  for (var i = 0; i < MatrixNum.length; i++) {
    for (var j = 0; j < MatrixNum[i].length; j++) {
      document.write(MatrixNum[i][j] + " " )
    }
    document.write("<br>" + "<br>")
  }

//TASK 3//
//Write a program to print numeric counting from 1 to 10.
document.write ("<h2>Numeric coding</h2>")
for (var i = 1; i <= 10; i++) {
    document.write(i)
    document.write("<br>")
  }
  
//TASK 4//
//Write a program to print multiplication table of any number using for loop.
//Table number & length should be taken as an input from user.
var TableNum = Number ( prompt ("Enter a number to show its multiplication table"))
var TableLength = Number ( prompt ("Enter length of multiplication table"))
document.write("<h2>Multiplication Table of " + TableNum + "</h2>")
document.write("<h2> Length " + TableLength + "</h2>")
for (var i = 1; i <= TableLength; i++) {
  document.write(TableNum + " x " + i + " = " + (TableNum * i))
  document.write("<br>")
}

//TASK 5//
//Write a program to print items of the following array using for loop:
//fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]
document.write("<h2>Fruits</h2>")
var fruits = [ "apple" , "banana" , "mango" , "orange" , "strawberry"]
for ( var i = 0 ; i < fruits.length ; i++){
    document.write(fruits[i] + " " + "<br>")
}
document.write("Element at index 0 is " + fruits[0] + "<br>")
document.write("Element at index 1 is " + fruits[1] + "<br>")
document.write("Element at index 2 is " + fruits[2] + "<br>")
document.write("Element at index 3 is " + fruits[3] + "<br>")
document.write("Element at index 4 is " + fruits[4] + "<br>")

//TASK 6//
//Generate the following series in your browser. See example output.
//a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
document.write("<h2>Number Series</h2>")
var NumSeries = "<h4>Counting:</h4> "
for (var i = 0 ; i <= 15 ; i++) {
    NumSeries += i + ", "
}
NumSeries = NumSeries.slice(0, -2)
document.write ( NumSeries)

//b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
var RevNumSeries = "<h4>Reverse counting:</h4>"
for (var i = 10 ; i >= 1 ; i-- ) {
    RevNumSeries += i + ", "
}
RevNumSeries = RevNumSeries.slice(0, -2)
document.write(RevNumSeries)

//c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
var EvenSeries = "<h4>Even:</h4>"
for (var i = 0 ; i <= 20 ; i += 2 ){
    EvenSeries += i + ", "
}
EvenSeries = EvenSeries.slice(0 , -2)
document.write(EvenSeries)

//d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
var OddSeries = "<h4>Odd:</h4>"
for ( var i = 1 ; i <= 19 ; i += 2 ){
    OddSeries += i + ", "
}
OddSeries = OddSeries.slice(0 , -2)
document.write(OddSeries)

//e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
var kSeries = "<h4>K Series:</h4>"
for ( var i = 2 ; i <= 20 ; i += 2 ){
    kSeries += i + "k, "
}
kSeries = kSeries.slice(0 , -2)
document.write(kSeries)

//TASK 7//
//You have an array
//A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
//Write a program to enable “search by user input” in an array.
//After searching, prompt the user whether the given item is found in the list or not. Example:
var snackss = ["cake", "apple pie", "cookie", "chips", "patties"]
var urorder = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?")
var index = snackss.indexOf(urorder)
if (index >= 0) {
  alert(urorder + " is available at index " + index + " in our bakery.")
} else {
  alert("We are sorry. " + urorder + " is not available in our bakery.")
}

//TASK 8//
//Write a program to identify the largest number in the given array.
//A = [24, 53, 78, 91, 12]
document.write("<h3>Largest Number</h3>")
var AA = [24 , 53 , 78 , 91 , 12]
document.write ("Array items: " + AA + "<br>")
var LargestNum = AA[0]
for ( var i = 1 ; i < AA.length ; i++){
if ( AA[i] > LargestNum ) {
    LargestNum = AA[i]
}
}
document.write ("The largest number is " + LargestNum)

//TASK 9//
//Write a program to print multiples of 5 ranging 1 to 100.
document.write("<h3>Multiples of 5</h3>")
for (var i = 1; i <= 100; i++) {
    if (i % 5 === 0) {
      document.write(i + ", ")
    }
  }


