                 //Variable Names : Illegal & Legal Assign4//

//TASK 1//
//Declare 3 variables in one statement.
var OneVariable , TwoVariable , ThreeVariable

//TASK 2//
//Declare 5 legal & 5 illegal variable names.
var LegalVar = "vegetables , TheVegetable , $The_Vegetables , Vegetable12 , VeGeTaBlEs"
document.write("Legal variable names can include: " + LegalVar + "<br>" + "<br>")

var IllegalVar = "Vege@tables , The/Vegetable , 12Vegetables , Vege table , var var"
document.write("Illegal variable names can include: " + IllegalVar + "<br>" + "<br>")

//TASK 3//
//Display this in your browser
//a) A heading stating “Rules for naming JS variables”
var x = document.getElementById("myHeading")

//b) Variable names can only contain ______, ______,______ and ______.
document.write('Variable names can only contain , numbers, $ and _ . For example : $my_1stVariable')

//c) Variables must begin with a ______, ______ or _____. 
//For example $name, _name or name
document.write("<p>Variables must begin with a letter, $ or _ . </p>")

//d) Variable names are case _________
document.write("<p> Variable names are case sensitive. </p>")

//e) Variable names should not be JS _________
document.write("<p>Variable names should not be JS keywords.</p>")
