                        //MATH EXPRESSIONS ASSIGN5//

//TASK 1//
//Write a program that take two numbers & add them in a new variable.
//Show the result in your browser.
var a = 3
var b = 5
var sum = a + b
console.log (sum)
var ResultIs = document.getElementById("Results")
ResultIs.textContent = "Sum of"+ " " + a + " " + "and"+ " " + b + " " + "is"+ " " + sum 

//TASK 2//
//Repeat task1 for subtraction, multiplication, division & modulus.
//SUBTRACTION
var differnce = a - b
console.log (differnce)
document.write ("Differnce of"+ " " + a + " " + "and"+ " " + b + " " + "is"+ " " + differnce + "<br>");

//MULTIPLICATION
var product = a * b
console.log(product)
document.write (" Product of"+ " " + a + " " + "and"+ " " + b + " " + "is"+ " " +  product + "<br>")

//DIVISION
var quotient = a / b
console.log(quotient)
document.write (" Quotient of"+ " " + a + " " + "and"+ " " + b + " " + "is"+ " " +  quotient +"<br>")
 
//MODULUS
var remainder = a % b
console.log(remainder)
document.write (" Remainder of"+ " " + a + " " + "and"+ " " + b + " " + "is"+ " " +  remainder + "<br>" + "<br>")

// TASK 3// 
//Do the following using JS Mathematic Expressions
//a. Declare a variable.
var  Variable

//b. Show the value of variable in your browser like “Value after variable declaration is: ??”.
document.write ("Value after variable declaration is" +  " " + Variable + "<br>")

//c.  Initialize the variable with some number.
var Variable =  20

//d. Show the value of variable in your browser like “Initial value: 5”.
document.write("Initial value: " +  Variable +"<br>")

//e. Increment the variable.
Variable++

//f. Show the value of variable in your browser like “Value after increment is: 6”
document.write("Value after increment is: " + Variable + "<br>")

//g. Add 7 to the variable
Variable += 7

//h. Show the value of variable in your browser like “Value after addition is: 13”
document.write("Value after addition is: " + Variable + "<br>")

//i. Decrement the variable.
Variable--

//j. Show the value of variable in your browser like “Value  after decrement is: 12”.
document.write("Value after decrement is: " + Variable+ "<br>" )

//k. Show the remainder after dividing the variable’s value by 3. 
var Variable = 20
var Remainder = Variable % 3

//l. Output : “The remainder is : 0”.
document.write("The remainder is: " + Remainder + "<br>" + "<br>")

//TASK 4//
//Cost of one movie ticket is 600 PKR. Write a script to store ticket
//price in a variable & calculate the cost of buying 5 tickets to a movie. 
var TicketPrice = 600
var TicketAmount = 5
var cost = TicketPrice * TicketAmount
console.log(cost)
document.write("Total cost to buy 5 tickets to a movie is" + " "+ cost + "<br>" + "<br>")

//TASK 5//
//Write a script to display multiplication table of any number in your browser. 
var MyNumber= 5
document.write("Table of" + " " + MyNumber + "<br>")
for(i=1 ; i<11 ; i++){
    multi=i*5
    document.write(5 +"x"+ i + "=" + multi + "<br>"+ "<br>" )
}

//TASK 6//
//The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
//a. Store a Celsius temperature into a variable
var TempInCelsius = 50

//b. Convert it to Fahrenheit & output “NNoC is NNoF”.
var FahConversion = TempInCelsius * 1.8 + 32
console.log (FahConversion)
document.write(TempInCelsius +"°C"+ " " + "is" + " "+ FahConversion + "°F"+ "<br>")

//c. Now store a Fahrenheit temperature into a variable
var TempInFah = 60

//d. Convert it to Celsius & output “NNoF is NNoC”.
var CelsiusConversion = (TempInFah - 32) * 0.55
console.log (CelsiusConversion)
document.write(TempInFah +"°F"+ " " + "is" + " "+ CelsiusConversion + "°C"+ "<br>"+ "<br>")

//TASK 7//
//Write a program to implement checkout process of a shopping cart system for an e-commerce website.
// Store the following in variables
//a. Price of item 1
var PriceOne = 650
 
//b. Price of item 2
var PriceTwo = 100

//c. Ordered quantity of item 1
var QuantityItemOne = 3

//d. Ordered Quantity of item 2
var QuantityItemTwo = 7

//e. Shipping charges
var ShipmentCharges = 100

//Compute the total cost & show the receipt in your browser
document.write("<h1>Shopping Cart</h1>")
document.write("Price of item 1 is" + " " + PriceOne+ "<br>")
document.write("Quantity of item 1 is "+ " "+ QuantityItemOne + "<br>")
document.write("Price of item 2 is" + " " + PriceTwo+ "<br>")
document.write("Quantity of item 2 is "+ " "+ QuantityItemTwo + "<br>")
document.write("Shipping charges are" + " " + ShipmentCharges+ "<br>" + "<br>")
var TotalOrderCost= (PriceOne*QuantityItemOne) + (PriceTwo*QuantityItemTwo) + ShipmentCharges
console.log(TotalOrderCost)
document.write("Total cost of your order is"+ " " + TotalOrderCost +"<br>" + "<br>" + "<br>")

//Task 8//
//Store total marks & marks obtained by a student in 2 variables.
//Compute the percentage & show the result in your browser
var TotalMarks = 980
var MarksObtained = 804
var Percentage= (804/980) * 100
console.log(Percentage)
document.write("<h1>Mark Sheet</h1>")
document.write("Total Marks :" + " " + TotalMarks+ "<br>")
document.write("Marks Obtained :" + " " + MarksObtained+ "<br>")
document.write("Percentage :" + " " + Percentage+"%" + "<br>"+ "<br>")

//TASK 9//
//Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees.
//Perform all calculations in a single expression.
//(Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee)
var UsDollar = 10 * 104.80
var SaudiRiyal = 25 * 28
var PakistaniRupees = UsDollar + SaudiRiyal
console.log(PakistaniRupees)
document.write("<h1>Currency In PKR</h1>")
document.write("Total currency in PKR:"+ " " + PakistaniRupees + "<br>" + "<br>")

//TASK 10//
//Write a program to initialize a variable with some number and do arithmetic in following sequence:
document.write("<h1>Aritmetic</h1>")
var NumberIs= 20
document.write("Initial number: " + NumberIs + "<br>")

//a. Add 5
var num5 = NumberIs += 5
document.write("After adding five: " + num5 + "<br>")

//b. Multiply by 10
var num10 = NumberIs * 10
document.write("After multiplying by ten: " + num10 + "<br>")

//c. Divide the result by 2
var num2 = num10 / 2
document.write("After dividing by two: " + num2 + "<br>")


//TASK 11//
//The Age Calculator: Forgot how old someone is?Calculate it!
//a. Store the current year in a variable
var CurrentYear = 2023

//b. Store their birth year in a variable.
var BirthYear = 2004

// Calculate their 2 possible ages based on the stored values.
//Output them to the screen like so: “They are either NN or NN years old”.
var age1 = CurrentYear - BirthYear
var age2 = age1 - 1
document.write("<h1>Age Calculation</h1>")
document.write("Current year: " + CurrentYear + "<br>")
document.write("Birth year: " + BirthYear + "<br>" )
document.write("They are either " + age1 + " or " + age2 + " years old.")

//TASK 12//
//The Geometrizer: Calculate properties of a circle.
//a. Store a radius into a variable.
var radius = 10

//b. Calculate the circumference based on the radius, and output “The circumference is NN”.
//(Hint : Circumference of a circle = 2 π r , π = 3.142)
var circumference = 2 * 3.142 * radius
console.log(circumference)

//Calculate the area based on the radius, and output “The area is NN”. (Hint : Area of a circle = π r2, π = 3.142)
var area = 3.142 * radius * radius
console.log(area)
document.write("<h1>The Geometrizer</h1>")
document.write("Radius of a circle :" + " " + radius + "<br>")
document.write("The circumference is :"+ " " + circumference + "<br>")
document.write("The area is : "+ " " + area + "<br>" + "<br>") 

//TASK 13//
//The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more.
//a. Store your favorite snack into a variable
var FavSnack = "Chips"

//b. Store your current age into a variable
var AgeCurrent = 19

//c. Store a maximum age into a variable.
var MaxAge = 70

//d. Store an estimated amount per day (as a number).
var PerDay = 2

//e. Calculate how many would you eat total for the rest of your life.
var RestLeft = (MaxAge - AgeCurrent) * PerDay
console.log(RestLeft)

//Output the result to the screen like so: “You will need NNNN to last you until the ripe old age of NN”.
document.write("<h1>The LifeTime Supply Calculator</h1>")
document.write("Favourite snack : " + " " + FavSnack+ "<br>")
document.write("Current age : " + " " + AgeCurrent + "<br>")
document.write("Estimated maximum age : " + " " + MaxAge + "<br>")
document.write("You will need "+ RestLeft+ " "+ FavSnack+ " "+ "to last you until the ripe old age of"+" "+ MaxAge + "<br>" + "<br>")



