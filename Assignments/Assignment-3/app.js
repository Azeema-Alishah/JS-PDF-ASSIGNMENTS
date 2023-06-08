                    //Variables for Numbers ASSIGN 3//

//TASK 1//                    
//Declare a variable called age & assign to it your age. Show your age in an alert box.
var age = 19
alert("I am" + " " + age + " " + "years old")

//TASK 2//
//Declare & initialize a variable to keep track of how many times a visitor has visited a web page. 
//Show his/her number of visits on your web page. For example: “You have visited this site N times”.
var visitorCount = localStorage.getItem("VisitCount")
visitorCount++
localStorage.setItem("VisitCount", visitorCount)
document.write("<h3>Visitors Count</h3>")
document.write("You have visited this site " + visitorCount + " times" + "<br>" + "<br>")
                    
 
//TASK 3//
//Declare a variable called birthYear & assign to it your birth year.
//Show the following message in your browser:
var birthYear = 2004
document.write("My birth year is" + " " + birthYear)
document.write("<p>Data type of my declared variable is a number </p>")

//TASK 4//
//A visitor visits an online clothing store www.xyzClothing.com .
//Write a script to store in variables the following information:
//a. Visitor’s name
var VisitorName = "John Doe"

//b. Product title
var ProductTitle = "T-shirt(s)"

//c. Quantity i.e. how many products a visitor wants to order
var quantity = 5

//Show the following message in your browser: “John Doe ordered 5 T-shirt(s) on XYZ Clothing store”.
document.write(VisitorName + " " + "ordered" + " " + quantity + " " + ProductTitle + " " + "on XYZ Clothing store")
