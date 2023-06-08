                     //ARRAYS ASSIGN 13-15//

//TASK 1//
//Declare an empty array using JS literal notation to store student names in future.
var StudentNmaes = []

//TASK 2//
//Declare an empty array using JS object notation to store student names in future.
var StudentNames = {}

//TASK 3//
//Declare and initialize a strings array.
var ExampleNames = ["Sara" , "Ayesha" , "Maryam" , "Aliza" , "Laiba" , "Fatima"]

//TASK 4//
//Declare and initialize a numbers array.
var ExampleNumbers = [10 , 20 , 30 , 40 , 50 , 60]

//TASK 5//
//Declare and initialize a boolean array.
var ExampleBoolean = [true , false , true , true , false , false]

//TASK 6//
//Declare and initialize a mixed array.
var ExampleMixed= ["Ayesha" , 10 , false , 50 , "Burger" , true , 30 , false , "Sara"]

//TASK 7//
//Declare and Initialize an array and store available education qualifications
//in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD). 
//Show the listed qualifications in your browser 
var Qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"]
document.write("<h2>Qualifications:</h2>")
document.write("<ol>")
for (var i = 0; i < Qualifications.length; i++) {
  document.write("<li>" + Qualifications[i] + "</li>")
}
document.write("</ol>")

//TASK 8//
//Write a program to store 3 student names in an array.
//Take another array to store score of these three students.
//Assume that total marks are 500 for each student, display the scores & percentages of students 
// Store student names in an array
document.write("<h2>Scores and Percentages:</h2>")
var studentNamess = ["Ali", "Sham", "Zain"]
var scoress = [320, 230, 480]
var totalMarks = 500
var percentages = []
for (var i = 0; i < scoress.length; i++) {
  var percentage = (scoress[i] / totalMarks) * 100;
  percentages.push(percentage)}
  document.write("Score of "+studentNamess[0]+ " "+ "is " + scoress[0]+ ". "+ "Percentage: " + percentage + "%"+ "<br>" )
    document.write("Score of "+studentNamess[1]+ " "+ "is " + scoress[1]+ ". "+ "Percentage: " + percentage[1] + "<br>" )
      document.write("Score of "+studentNamess[2]+ " "+ "is " + scoress[2]+ ". "+ "Percentage: " + percentage[2] + "<br>" )
//}
// Display scores and percentages in the browser
//document.write("<h2>Scores and Percentages:</h2>")
//document.write("<table>")
//document.write("<tr><th>Name</th><th>Score</th><th>Percentage</th></tr>")
//for (var i = 0; i < studentNames.length; i++) {
        //document.write("<tr>")
        ///document.write("Score of " + studentNamess + " is " + i + ". Percentage: " + percentages + "%<br>")
        //document.write("Score of "+studentNamess[0]+ " "+ "is " + scoress[0]+ ". "+ "Percentage: " + percentage + "<br>" )
        //document.write("Score of "+studentNamess[1]+ " "+ "is " + scoress[1]+ ". "+ "Percentage: " + percentage[1] + "<br>" )
        //document.write(scores[i])
        //document.write(percentages[i])
        //document.write("</tr>")
     // }
      //document.write("</table>")

//TASK 9//
//Initialize an array with color names. Display the array elements in your browser.
//a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array.
//Display the updated array in your browser.
var Colourss = ["Black" , "White" , "Green" , "Blue" , "Lilac"]
document.write("<h2>Original Array Before addition of any colour:</h2>")
document.write(Colourss.join(", "))
var AskColor = prompt("Enter a color to add to the beginning of the array:")
Colourss.unshift(AskColor);
document.write("<h2>Array After adding to the beginning:</h2>");
document.write(Colourss.join(", "));

//b. Ask the user what color he/she wants to add to the end & add that color to the end of the array.
//Display the updated array in your browser.
var Colourss = ["Black" , "White" , "Green" , "Blue" , "Lilac"]
var AskColor = prompt("Enter a color to add to the end of the array:")
Colourss.push(AskColor)
document.write("<h2>Array After adding to the end:</h2>")
document.write(Colourss.join(", "))

//c. Add two more color to the beginning of the array.
//Display the updated array in your browser.
var Colourss = ["Black" , "White" , "Green" , "Blue" , "Lilac"]
var AskColor1 = prompt("Enter color1 to add to the start of the array:")
var AskColor2 = prompt("Enter color2 to add to the start of the array:")
Colourss.unshift(AskColor1 , AskColor2 )
document.write("<h2>Array After adding 2 colours in the beginning:</h2>")
document.write(Colourss.join(", "))

//d. Delete the first color in the array.
//Display the updated array in your browser.
var Colourss = ["Black" , "White" , "Green" , "Blue" , "Lilac"]
Colourss.shift()
document.write("<h2>Array After deleting the first colour:</h2>")
document.write(Colourss.join(", "))

//e. Delete the last color in the array.
//Display the updated array in your browser.
var Colourss = ["Black" , "White" , "Green" , "Blue" , "Lilac"]
Colourss.pop()
document.write("<h2>Array After deleting the last colour:</h2>")
document.write(Colourss.join(", "))

//f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index.
//. Display the updated array in your browser.
var Colourss = ["Black" , "White" , "Green" , "Blue" , "Lilac"]
var indexAdd = Number(prompt("Enter the index at which you want to add a color:"))
var AddColourr = prompt("Enter the color to add at desired position/index:")
Colourss.splice(indexAdd, 0, AddColourr)
document.write("<h2>Array After addition to desired index:</h2>")
document.write(Colourss.join(", "))

//g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete.
//Then remove the same number of color(s) from user-defined position/index. 
//Display the updated array in your browser.
var Colourss = ["Black" , "White" , "Green" , "Blue" , "Lilac"]
var indexDelete = Number(prompt("Enter the index at which you want to delete color:"))
var ColorsToDelete = Number(prompt("Enter the number of colors to delete:"))
Colourss.splice(indexDelete, ColorsToDelete)
document.write("<h2>Array After deletion from desired index:</h2>" )
document.write(Colourss.join(", ") + "<br>" + "<br>")

//TASK 10//
//Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method.
var StudentScores = [320 , 230 , 480 , 120]
document.write ("<h2>Student Scores</h2>")
document.write("Score of students : " + StudentScores + "<br>")
StudentScores.sort(function(a, b)
{return a - b})
document.write ("Ordered score of students : " + StudentScores + "<br>" + "<br>")

//TASK 11//
//Write a program to initialize an array with city names.
//Copy 3 array elements from cities array to selectedCities array.
var CityNames = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"]
document.write ("<h2>Cities</h2>")
document.write ("Cities list : " + CityNames + "<br>")
var SelectedCities = []
SelectedCities = CityNames.slice(2, 4)
document.write("Selected cities list : " + SelectedCities + "<br>" + "<br>")

//TASK 12//
//Write a program to create a single string from the below mentioned array:
//var arr = [“This ”, “ is ”, “ my ”, “ cat”];
//(Use array’s join method)
var arr = ["This", "is", "my", "cat"];
document.write ("<h2>Single string array</h2>")
document.write ("Array : " + arr + "<br>")
var SingleString = arr.join(" ")
document.write("Single String : " + SingleString + "<br>" + "<br>")

//TASK 13//
//Create a new array. Store values one by one in such a way that you can access the
//values in the order in which they were stored. (FIFO-First In First Out)
var NewArr = ["keyboard" , "mouse" , "printer" , "monitor"]
document.write("<h2>Values in FI-FO order:</h2>")
document.write ("Devices : " + NewArr  + "<br>")
document.write(NewArr.shift() + "<br>")
document.write(NewArr.shift() + "<br>")
document.write(NewArr.shift() + "<br>")
document.write(NewArr.shift() + "<br>")

//TASK 14//
//Create a new array. Store values one by one in such a way that you can access the values in reverse order.
//(Last In-First Out)
var RevArray = ["keyboard" , "mouse" , "printer" , "monitor"]
document.write("<h2>Values in Reverse order:</h2>")
document.write(RevArray.pop() + "<br>")
document.write(RevArray.pop() + "<br>")
document.write(RevArray.pop() + "<br>")
document.write(RevArray.pop() + "<br>" + "<br>")

//TASK 15//
//Write a program to store phone manufacturers (Apple, Samsung, Motorola, Nokia, Sony & Haier) in an array.
//Display the following dropdown/select menu in your browser using document.write() method:
document.write("<h2> Phone Manufacturers </h2>")
var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"]
document.write("<select id='manufacturer'>")
for (var i = 0; i < manufacturers.length; i++) {
  document.write("<option>" + manufacturers[i] + "</option>")
}
document.write("</select>")

