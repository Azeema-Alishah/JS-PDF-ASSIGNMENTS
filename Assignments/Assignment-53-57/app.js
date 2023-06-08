                         //EVENTS ASSIGN 53-57//

//Task 1//
//onsider you have 4 images in a file as shown below:
//Now When you click on an image it should display in a modal.
function openModal(img) {
  var modal = document.getElementById("MyModal")
  var modalImg = document.getElementById("modall")
  modal.style.display = "block"
  modalImg.src = img.src
}
function closeModal() {
  var modal = document.getElementById("MyModal")
  modal.style.display = "none"
}


//TASK 2//
//Create a paragraph and two buttons “zoom in ”(+) and “zoom out”(-).
//On each click on “zoom in”(+) , add 10px in font size of paragraph.
//And on each click on “zoom out”(-) , minus 10px in font size of paragraph.
var paragraph = document.getElementById("myParagraph")
var zoomInButton = document.getElementById("zoomIn")
var zoomOutButton = document.getElementById("zoomOut")
zoomInButton.addEventListener("click", function() {
  var fontSize = parseInt(window.getComputedStyle(paragraph).fontSize)
  paragraph.style.fontSize = (fontSize + 10) + "px"
})
zoomOutButton.addEventListener("click", function() {
  var fontSize = parseInt(window.getComputedStyle(paragraph).fontSize)
  if (fontSize >= 20) {
    paragraph.style.fontSize = (fontSize - 10) + "px"
  }
})












