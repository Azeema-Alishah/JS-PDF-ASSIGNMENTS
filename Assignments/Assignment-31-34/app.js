                      //Date Methods ASSIGN 31-34//

//TASK  1//
//Write a program that displays current date and time in your browser.
document.write("<h3>Time</h3>")
var currentDatee = new Date()
document.write("Current date and time: " + currentDatee + "<br>" + "<br>")

//TASK 2//
//Write a program that alerts the current month in words.
//For example December.
var datee =  new Date()
var CurrentMonthh = datee.getMonth()
var Months = [ "January" , "Feburary" , "March" , "April" , "May" , "June" , "July" , "August" , "September" , "October" , "November" , "December"]
var Monthh = Months[CurrentMonthh]
alert("Current month: " + Monthh )

//TASK 3//
//Write a program that alerts the first 3 letters of the current day, for example if today
//is Sunday then alert will show Sun.
var Datee = new Date()
var CurrentDay = Datee.getDay()
var Dayss = ["Sun", "Mon" , "Tue" , "Wed" , "Thu" , "Fri" , "Sat" ]
var DayIs = Dayss[CurrentDay]
alert("Today is: " + DayIs)

//TASK 4//
//Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today.
var whatDAY = new Date()
var DAYis = whatDAY.getDay()
if (DAYis === 5 || DAYis === 6) {
    alert("It's Fun day!")
}

//TASK 5//
//Write a program that shows the message “First fifteen days of the month” 
//if the date is less than 16th of the month else shows “Last days of the month”.
var days = new Date()
var datesss = days.getDate
if (datesss < 16){
    alert("First fifteen days of the month")
} 
else{
    alert("Last days of the month")
}

//TASK 6//
//Write a program that determines the minutes since midnight, Jan. 1, 1970 and 
//assigns it to a variable that hasn't been declared beforehand.
//Use any variable you like to represent the Date object.
var currenttDate = new Date()
var millisecondsSince = currenttDate.getTime()
var minutesSince = Math.floor(millisecondsSince / (1000 * 60))
document.write("Elapsed milliseconds since January 1, 1970: " + millisecondsSince + "<br>")
document.write("Elapsed minutes since January 1, 1970: " + minutesSince + "<br>" + "<br>")

//TASK 7//
//Write a program that tests whether it's before noon and alert “Its AM” else “its PM”.
var DATe = new Date()
var HourIs = DATe.getHours()
if (HourIs > 12){
    alert("It's AM")
} 
else  {
    alert("It's PM")
}

//TASK 8//
//Write a program that creates a Date object for the last day of the last month of 2020 and
//assigns it to variable named laterDate.
var laterDatee = new Date(2020 , 11 , 31)
document.write("Later date: " + laterDatee + "<br>" + "<br>")

//TASK 9//
//. Create a date object of the starting date of this Ramadan and alert the number of days past since 1st Ramadan?
//Note: 1st Ramadan was on June 18, 2015
var todayIs = new Date()
var RamadanStarted = new Date (2023 , 2 , 23)
var DifferenceIs = todayIs - RamadanStarted 
var DaysPassed = Math.floor(DifferenceIs / (86400000))
alert(DaysPassed + " days have passed since 1st Ramadan ,2023")

//TASK 10//
//Write a program that displays in your browser the seconds that elapsed between
//the reference date and the beginning of 2015.
var refDate = new Date("January 1, 2010")
var begi = new Date("January 1, 2015")
var timeDiffIs = (begi.getTime() - refDate.getTime()) / 1000
document.write("On refernce date " + begi + " ," + timeDiffIs + " seconds had passed since " + refDate + "<br>" + "<br>")

//TASK 11//
//Create a Date object for the current date and time.
//Extract the hours, reset the date object an hour ahead and
//finally display the date object in your browser.
var currrentDate = new Date()
currrentDate.setHours(currrentDate.getHours() - 1)
document.write("1 hour ago, it was " + currrentDate + "<br>" + "<br>")

//TASK 12//
//Write a program that creates a date object and show the date in an alert box that is reset to 100 years back?
var cuurrentDate = new Date()
cuurrentDate.setFullYear(cuurrentDate.getFullYear() - 100)
alert("100 years back, it was " + cuurrentDate)

//TASK 13//
//Write a program to ask the user about his age.
//Calculate and show his birth year in your browser.
var AskAge = Number(prompt("Enter your age please:"))
var YearIs = new Date()
var years = YearIs.getFullYear()
var BirthYearIs = years - AskAge
document.write("Your age is " + AskAge + "<br>")
document.write("Your birth year is " + BirthYearIs + "<br>" + "<br>")

//TASK 14//
//Write a program to generate your K-Electric bill in your browser.
//All the amounts should be rounded off to 2 decimal places.
//Display the following fields:
//a. Customer Name
document.write("<h3>K-Electric Bill</h3>")
var CustomerName = prompt("Customer's name:")
document.write("Customer name: " + CustomerName + "<br>")

//b. Current Month
var CurrentmOnth = prompt("Current month:")
document.write("Month:" + CurrentmOnth +"<br>")

//c. Number of units
var UnitsNo = Number(prompt("No. of units:"))
document.write("Number of units:" + UnitsNo + "<br>")

//d. Charges per unit
var ChargesUnit = Number(prompt("Charges per unit:"))
document.write("Charges per unit:" + ChargesUnit + "<br>" + "<br>")

//e. Net Amount Payable (within Due Date)
var AmountPayable = UnitsNo * ChargesUnit
document.write("Net amount payable (within due date):" + AmountPayable + "<br>")

//f. Late Payment Surcharge
var Latepayment = 350
document.write("Late payment surcharge:" + Latepayment + "<br>")

//g. Gross Amount Payable (after Due Date)
//Where,
//Net Amount Payable (within Due Date) = Number of units * Charges per unit
//& Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge
var GrossAmount = AmountPayable + Latepayment
document.write("Gross amount payable (after due date):" + GrossAmount)
