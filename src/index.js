
  // your code here

  // TasK: Teaching material.  Describe how there are three solutions each reflecting differernt coding paragidms.  Each paradigm has its pros and cons. 

  // First, the simplest way but not the most robust in terms.   
  

document.addEventListener("DOMContentLoaded", function(e) {
  let form = document.querySelector("#create-task-form");
  let listItem = document.getElementById('tasks');
  form.addEventListener('submit', function(e) { 
    e.preventDefault();

    let isEditOn = true

    //Grab items
    let item = document.querySelector('#new-task-description')
    let li = document.createElement('li');
    let label = document.getElementById('taskDescriptionLabel')
    let inputForText = document.getElementById("new-task-description")
    let isTheQuestion = document.getElementById('isTheQuestion')
    let submitButton = document.getElementById('submitButton')
    // li.appendChild(document.createTextNode(`${form[0].value}`));
    listItem.append(li);
    li.append(item.value)

    // Options Menu

  

    // Delete button:
    let deleteButton = document.createElement('button')
    li.append( deleteButton )
    deleteButton.innerText = "Delete"
    deleteButton.addEventListener('click', function(e){
      li.remove()
    })
    // Edit button:  You would have this toggle a global variable 
    // that is a boolean.  It would set the condition for 
    // the main submit form.
    let editButton = document.createElement('button') 
    li.append ( editButton)
    editButton.innerText = "Edit"
    editButton.addEventListener('click', function(e) {
      // if isEditOn == false {
      //   isEditOn = true 
      // } else if isEditOn == true {
      //   isEditOn = false
      // } 
      // console.log(isTheQuestion)
      // debugger
      isTheQuestion.innerText = "Edit away! Godspeed"
      li.innerText = "Type it in the input box!"
      label.innerHTML = "Place Your Edit Here:"
      submitButton.value = "Submit Edited Text"
      inputForText.value = "Edit it here..."
      // SUBMIT BUTTON ADD EVENT LISTENER
      submitButton.addEventListener('click', function(e) {
      li.remove()
      label.innerHTML = "Task Description"
      submitButton.value = "Create New Task"
      isTheQuestion.innerText = "That is the question..."
      })
    })





  })
})


// Barrette's Code:

// let form = document.querySelector('#create-task-form')
// form.addEventListener('submit', function(e){
//   e.preventDefault()
//   let item = document.querySelector('#new-task-description')
//   console.log(item.value)
//   let list = document.querySelector('#tasks')
//   let element = document.createElement('li')
//   list.append(element)
//   element.append( item.value )

//   let button = document.createElement('button')
//   element.append( button )
//   button.innerText = "x"

//   button.addEventListener('click', function(e){
//     element.remove()
//   })

// })

  // Second, is to try and code it using oop way.  That is, instantiating objects while using methods. 




  // Third, is to try to use functional programming spoken of here: 











