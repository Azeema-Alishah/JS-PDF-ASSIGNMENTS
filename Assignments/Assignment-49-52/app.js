//                          //EVENTS ASSIGN 49-52//

// //TASK 1//
// //Create a signup form and display form data in your web page on submission.
 document.getElementById("signupForm").addEventListener("submit", function(event) {
   event.preventDefault()
    var name = document.getElementById("name1").value
     var dob = document.getElementById("dob1").value
    var email = document.getElementById("email1").value
    var password = document.getElementById("password1").value
    var formData = {
      name: name,
            dob: dob,
    email: email,
     password: password
   }
    var submittedData = document.getElementById("submittedData")
    submittedData.innerHTML = "<p>Name: " + formData.name + "</p>" +
                              "<p>Date of Birth: " + formData.dob + "</p>" +
                              "<p>Email: " + formData.email + "</p>" +
                              "<p>Password: " + formData.password + "</p>"
  })
 
// //TASK 2//
// //. Suppose in your webpage there is content area in which you have entered your item details,
// //but user can only see some details on first look.
// //When user clicks on “Read more” button, full detail of that particular item will be displayed. 
 function showDetails(button) {
    var item = button.parentElement
    var details = item.querySelector('.details')
    details.style.display = 'block'
     button.style.display = 'none'
 }


// //TASK 3//
// //In previous assignment you have created a tabular data using javascript
// //Let’s modify that.
// //Create a form which takes student’s details and show each student detail in table.
// //Each row of table must contain a delete button and an edit button. 
// //On click on delete button entire row should be deleted. 
// //On click on edit button, a hidden form will appear with the values of that row. 
let students = []

const studentForm = document.getElementById('studentForm')
const editForm = document.getElementById('editForm')
const studentTable = document.getElementById('studentTable').getElementsByTagName('tbody')[0]

studentForm.addEventListener('submit', function(e) {
  e.preventDefault()

  const name = document.getElementById('name').value
  const age = document.getElementById('age').value
  const grade = document.getElementById('grade').value

  if (editForm.style.display === 'none') {
    addStudent(name, age, grade)
  } else {
    const editIndex = document.getElementById('editIndex').value
    updateStudent(editIndex, name, age, grade)
  }

  studentForm.reset()
})

function addStudent(name, age, grade) {
  const student = {
    name: name,
    age: age,
    grade: grade
  }

  students.push(student)
  displayStudents()
}

function displayStudents() {
  studentTable.innerHTML = ''

  students.forEach(function(student, index) {
    const row = studentTable.insertRow()

    const nameCell = row.insertCell(0)
    nameCell.textContent = student.name

    const ageCell = row.insertCell(1)
    ageCell.textContent = student.age

    const gradeCell = row.insertCell(2)
    gradeCell.textContent = student.grade;

    const actionCell = row.insertCell(3)
    const deleteButton = document.createElement('button')
    deleteButton.textContent = 'Delete'
    deleteButton.addEventListener('click', function() {
      deleteStudent(index)
    })
    actionCell.appendChild(deleteButton)

    const editButton = document.createElement('button')
    editButton.textContent = 'Edit'
    editButton.addEventListener('click', function() {
      editStudent(index)
    })
    actionCell.appendChild(editButton)
  })
}

function deleteStudent(index) {
  students.splice(index, 1)
  displayStudents()
}

function editStudent(index) {
  const student = students[index]

  document.getElementById('editIndex').value = index
  document.getElementById('editName').value = student.name
  document.getElementById('editAge').value = student.age
  document.getElementById('editGrade').value = student.grade

  editForm.style.display = 'block'
}

function cancelEdit() {
  editForm.reset()
  editForm.style.display = 'none'
}

function updateStudent(index, name, age, grade) {
  const student = students[index]

  student.name = name
  student.age = age
  student.grade = grade
  editForm.style.display = 'block'

  editForm.reset()
  editForm.style.display = 'none'

  displayStudents()
}

