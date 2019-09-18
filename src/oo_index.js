// OO solution
document.addEventListener("DOMContentLoaded", () => {
    // initialize taskList class
    const taskList = new TaskList();
    //grab all the necessary DOM elements
  
    //form and relevant input fields
    const newTaskForm = document.getElementById("create-task-form");
    const newTaskDescription = document.getElementById("new-task-description");
    const newTaskPriority = document.getElementById("new-task-priority");
  
    //ul where new tasks will live on the DOM
    const taskUl = document.getElementById("tasks");
  
    const renderApp = () => (taskUl.innerHTML = taskList.renderTasks());
    //attach event listeners
  
    newTaskForm.addEventListener("submit", (e) => {
      e.preventDefault();
      taskList.createNewTask(newTaskDescription.value);
      // reset form
      e.target.reset();
      renderApp();

      // You also want the edit button to be created and its 
      // event listener
      console.log("test1")
      let editButton = document.createElement('button') 
      li.append ( editButton)
      editButton.innerText = "Edit"
      editButton.addEventListener('click', function(e) {
        isEditOn = false
        li.innerText = ""
        label.innerHTML = "Place Your Edit Here:"
        submitButton.value = "Submit Edited Text"
        console.log("test2")
      })
      console.log("test3")



    });



  
    taskUl.addEventListener("click", (e) => {
      if (e.target.nodeName === "BUTTON") {
        taskList.deleteTask(e.target.dataset.description);
        renderApp();
      }
    });
  });