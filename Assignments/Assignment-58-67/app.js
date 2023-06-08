                         // DOM ASSIGN 58-67//

//TASK 1//
//Consider you have following code snippet:
// (Copy it in your HTML file)
//i. Get element of id “main-content” and assign them in a variable.
var mainContent = document.getElementById("main-content")

//ii. Display all child elements of “main-content” element.
var childElements = mainContent.children
for (var i = 0; i < childElements.length; i++) {
    console.log(childElements[i])
}

//iii. Get all elements of class “render” and show their innerHTML in browser.
var renderElements = document.getElementsByClassName("render")
for (var j = 0; j < renderElements.length; j++) {
    console.log(renderElements[j].innerHTML)
}

//iv. Fill input value whose element id first-name using javascript.
var firstName = document.getElementById("first-name")
firstName.value = "Alex"

//v. Repeat part iv for id ”last-name” and “email”.
var lastName = document.getElementById("last-name")
lastName.value = "Bank"

var email = document.getElementById("email")
email.value = "alexbank@example.com"


//TASK 2//
//2. use HTML code of question 1 and show the result on browser.
//i. What is node type of element having id “form-content”.
var formContentElement = document.getElementById("form-content")
        console.log("Node type of element with id 'form-content':", formContentElement.nodeType)

//ii. Show node type of element having id “lastName” and its child node.
var lastNameElement = document.getElementById("lastName")
console.log("Node type of element with id 'lastName':", lastNameElement.nodeType)
console.log("Child node of element with id 'lastName':", lastNameElement.childNodes[0].nodeType)

//iii. Update child node of element having id “lastName”.
lastNameElement.childNodes[0].nodeValue = "New Last Name: Bank"

//iv. Get First and last child of id “main-content”.
var mainContentElement = document.getElementById("main-content")
var firstChild = mainContentElement.firstChild
var lastChild = mainContentElement.lastChild
console.log("First child of element with id 'main-content':", firstChild)
console.log("Last child of element with id 'main-content':", lastChild)

//v. Get next and previous siblings of id “lastName”.
var nextSibling = lastNameElement.nextSibling
var previousSibling = lastNameElement.previousSibling
console.log("Next sibling of element with id 'lastName':", nextSibling)
console.log("Previous sibling of element with id 'lastName':", previousSibling)

//vi. Get parent node and node type of element having id “email”
var emailElement = document.getElementById("email")
var parentNode = emailElement.parentNode
console.log("Parent node of element with id 'email':", parentNode)
console.log("Node type of element with id 'email':", emailElement.nodeType)

