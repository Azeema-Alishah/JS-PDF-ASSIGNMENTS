                          //Events Assign 43-48//

//TASK 1//
//Show an alert box on click on a link.//
function AlertIs(clickk) {
   var clickk= alert ("You clicked on this link")
}

//TASK 2//
//Display some Mobile images in browser.
//On click on an image Show the message in alert to user.
function alertt () {
  alert("Thank you for purchasing a phone from us")
}

//TASK 3//
//Display 10 student records in table and each row should contain a delete button.
//If you click on a button to delete a record, entire row should be deleted. 
function deleteRow(row) {
    var i = row.parentNode.parentNode.rowIndex
    document.getElementById("studentTable").deleteRow(i)
  }

//TASK 4//
//Display an image in browser.
//Change the picture on mouseover and set the first picture on mouseout.
function hover(img)
{
 img.src  = "https://healthwire.pk/wp-content/uploads/2022/03/strawberry-benefits.jpg" 
}
function picc1(e){
  e.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTzJZlB0oX8mMUfx3LBwu-54hsaVC_pOTHwg&usqp=CAU"
}

//TASK 5//
//Show a counter in browser.
//Counter should increase on click on increase button and decrease on click on decrease button.
//And show updated counter value in browser.
var counterr = 0
function increaseVal() {
    counterr++
    updateCounter()
}
function decreaseVal() {
    if (counterr > 0) {
        counterr--
        updateCounter()
    }
}
function updateCounter() {
    var counterElement = document.getElementById("counter")
    counterElement.innerHTML = counterr
}
