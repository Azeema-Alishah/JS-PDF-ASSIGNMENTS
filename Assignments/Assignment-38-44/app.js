                         //FUNCTIONS SWITCH STATEMENTS ASSIGN 38-44//

//TASK 1//
//Write a custom functio.n power ( a, b ), to calculate the value of a raised to b.
document.write("<h3>Power</h3>")
function powe (a , b){
     var ais = Number(prompt("Base value:"))
     var bis = Number(prompt("Exponent value:"))
    // var equalsTo = ais ** bis
     var equalsTo =Math.pow(ais , bis)
     document.write(ais + " to the power of " + bis + " is " + equalsTo + "<br>" + "<br>")
}
powe()

//TASK 2//
//Any year is entered through the keyboard.
//Write a function to determine whether the year is a leap year or not.
//Leap years ..., 2012, 2016, 2020, …
var yearss = prompt("Enter a year to know if it's a leap year :")
function LeapYears() {
    var leap = new Date(yearss, 1, 29).getDate() === 29
    if (leap) {
        document.write(yearss + " is a leap year" + "<br>" + "<br>")
    } else {
        document.write(yearss + " is not a leap year" + "<br>" + "<br>")
    }
}
LeapYears()

//TASK 3//
//If the lengths of the sides of a triangle are denoted by a, b, and c,
//then area of triangle is given by
//area = S(S − a)(S − b)(S − c)
//where, S = ( a + b + c ) / 2
//Calculate area of triangle using 2 functions
var a = Number(prompt("Enter the first length of a triangle: "))
var b = Number(prompt("Enter the second length of a triangle: "))
var c = Number(prompt("Enter the third length of a triangle: "))
var S = Number();
function calculation_of_S () {
    return S = (a+b+c) / 2 
}
function area () {
    return S*(S - a)*(S - b)*(S - c)
}
calculation_of_S()
alert("Area of triangle is: " + area())

//TASK 4//
//Write a function that receives marks received by a student in 3 subjects and returns 
//the average and percentage of these marks. 
//There should be 3 functions one is the mainFunction
//and other are for average and percentage. 
//Call those functions from mainFunction and display result in mainFunction.
document.write("<h3>Average & Percentage</h3>")
var Subj1Marks = Number(prompt("Subject 1 marks: "))
var Subj2Marks = Number(prompt("Subject 2 marks: "))
var Subj3Marks = Number(prompt("Subject 3 marks: "))
document.write("Subject 1 marks : " + Subj1Marks + "<br>")
document.write("Subject 2 marks : " + Subj2Marks + "<br>")
document.write("Subject 3 marks : " + Subj3Marks + "<br>")
function mainFunction(){
    function AverageIs () {
        var AverageIss = (Subj1Marks + Subj2Marks + Subj3Marks) / 3
        document.write("Average : " + AverageIss + "<br>")
    }
    AverageIs()
    function PercentageIs(){
        var ObtainedMarks = Subj1Marks + Subj2Marks + Subj3Marks
        var TotalMarkss = 150
        var PercentageIss = (ObtainedMarks / TotalMarkss) * 100
        document.write("Percentage : " +  PercentageIss + "<br>" + "<br>")
  }
  PercentageIs()
}
    mainFunction()

//TASK 5//
//You have learned the function indexOf. Code your own custom function that will perform the same functionality.
//You can code for single character as of now.


//TASK 6//
//Write a function to delete all vowels from a sentence.
//Assume that the sentence is not more than 25 characters long.
function delVowel () {
    var Vowels = [ "a" , "e" , "i" , "o" , "u" ]
    var res = ""
    for (var i = 0; i < sentence.length; i++) {
        var char = sentence[i].toLowerCase();
 
        if (Vowels.indexOf(char) === -1 ) {
            res += sentence[i]
        }
      }
return res
}
//delVowel(res)
var sentence = prompt("Sentence to delete vowels from:")
var vowelDelSen = delVowel (sentence)
document.write("Actual sentence: " + sentence + "<br>")
document.write("After deleting vowels: " + vowelDelSen + "<br>" + "<br>")

//TASKK 7//
//Write a function with switch statement to count the number of occurrences of 
//any two vowels in succession in a line of text.
//For example, in the sentence
//“Pleases read this application and give me gratuity”
//Such occurrences are ea, ea, ui.
var text = "Pleases read this application and give me gratuity"
text = text.toLocaleLowerCase()
function countsuccessivevowels() {
    var count = 0;
    var vowels = ['a' , 'e' , 'i' , 'o' , 'u']
    for (var i=0 ; i<text.length ; i++) {
        var currentcharacter = text[i]
        var nextcharacter = text[i+1]
        
            if (vowels.includes(currentcharacter) && vowels.includes(nextcharacter)){
                count ++
            }
    }
    return count
}
alert("No. of consecutive vowels are: " + countsuccessivevowels(text))

//TASK 8//
//The distance between two cities (in km.) is input through the keyboard.
//Write four functions to convert and print this distance in meters, feet, inches and centimeters.
var DistInKm = Number (prompt("Enter distance in km:"))
function InMeters () {
    var MeterDist = DistInKm * 1000
    document.write("Distance in km: " + DistInKm + "km"+ "<br>")
    document.write("Distance in meters: " + MeterDist + "m"+ "<br>")
}
   InMeters()
function InFeet () {
    var FeetDist = DistInKm * 3281
    document.write("Distance in feet: " + FeetDist + "ft"+ "<br>")
}
   InFeet()
function InInches () {
    var InchDist = DistInKm * 39370
    document.write("Distance in inches: " + InchDist + "in"+ "<br>")
}   
InInches()
function InCenti () {
    var CentiDist = DistInKm * 100000
    document.write("Distance in centimeters: " + CentiDist + "cm"+ "<br>" + "<br>")
}
InCenti()

//TASK 9//
//Write a program to calculate overtime pay of employees.
//Overtime is paid at the rate of Rs. 12.00 per hour for every hour worked above 40 hours.
//Assume that employees do not work for fractional part of an hour.
var Hourss = Number(prompt("Hours worked:"))
    var WorkingHours = 40;
    var overTimerate = 12.00;
function OverTimeCalc() {
  if (Hourss > WorkingHours){
    var overTime = Hourss - WorkingHours;
    var overPayy = overTime * overTimerate;
  }
  return overPayy;
}
//document.write ("")
document.write("Total hours worked: " + Hourss + "<br>")
document.write("Overtime pay:" + OverTimeCalc()+ "Rs"+ "<br>" + "<br>")

//TASK 10//
//A cashier has currency notes of denominations 10, 50 and 100.
//If the amount to be withdrawn is input through the keyboard in hundreds, find the total number of currency notes
//of each denomination the cashier will have to give to the withdrawer.
var WidthdrawlAmount = Number(prompt("Your amount to widthdraw in hundreds:"))
var hundred = WidthdrawlAmount / 100
WidthdrawlAmount %= 100
var fifty = WidthdrawlAmount / 50
WidthdrawlAmount %= 50
var ten = WidthdrawlAmount / 10
WidthdrawlAmount %= 10
//document.write("Amount widthdrawn: " + WidthdrawlAmount + "<br>")
document.write("100: " + Math.floor(hundred) + "<br>")
document.write("50: " + Math.floor(fifty) + "<br>")
document.write("10: " + Math.floor(ten) + "<br>")

