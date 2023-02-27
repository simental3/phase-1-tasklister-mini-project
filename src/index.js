// ADDITIONAL PRACTICE: TASKLISTER MINI-PROJECT

/*
document.addEventListener("DOMContentLoaded", () => {
    let form = document.querySelector("#create-task-form")
    form.addEventListener('submit', newTask)
});

const newTask = function(event) {
    event.preventDefault()
    let input = event.target.description.value
    let color = event.target.selectPriority.value
    let date = event.target.dueDate.value
    console.log(color)
    appendTask(input, color, date)
    event.target.description.value = ""
    event.target.dueDate.value = ""
}

const appendTask = function(input, color, date) {
    // selectors, elements, variables
    let ul = document.querySelector('#tasks')
    let li = document.createElement('li')
    let deleteButton = document.createElement('button')
    let editButton = document.createElement('button')

    // assigns values
    li.innerText = `${input} Due: ${date}   `
    li.style.color = color
    deleteButton.innerText = 'X'
    editButton.innerText = 'EDIT'


    // appends to the DOM
    li.append(deleteButton, editButton)
    ul.appendChild(li)

    // event listeners
    deleteButton.addEventListener('click', () => li.remove())
    editButton.addEventListener('click', () => editForm(ul, li))
}

const editForm = function(ul, li) {
    let form = document.createElement('form')
    let inputField = document.createElement('input')
    let submitButton = document.createElement('submit')

    inputField.type = 'text'
    inputField.name = 'editTask'

    submitButton.type ='submit'
    submitButton.value = 'Change'

    form.append(inputField, submitButton)
    li.append(form)

    form.addEventListener('submit', (event) => editTask(event, ul, li))
}

const editTask = function(event, ul, li) {
    event.preventDefault()
    li.textContent = event.target.editTask.value
}

*/




/*
// DELIVERABLES
    - As a user, I should be able to type a task into the input field.
    - As a user, I should be able to click some form of a submit button.
    - As a user, I expect to see the task string that I provided appear in the DOM after the submit button has been activated.

// STRETCH DELIVERABLES
Once you've got the required deliverables working, you may want to try to implement one or more of the following:
    - A delete function that will remove tasks from your list
    - A priority value selected from a dropdownLinks to an external site. that is used to determine the color of the text in the list (e.g. red for high priority, yellow for medium, green for low)
    - As an additional challenge, implement a sorting functionality that displays the tasks in ascending or descending order based on priority
    - An additional input field (e.g. user, duration, date due)
    - Ability to edit tasks
    - Something of your choice! The main objective is to add a feature that allows the user's input to affect the DOM
*/



document.addEventListener("DOMContentLoaded", () => {
    //grab all the necessary DOM elements
  
    //form and relevant input fields
    const newTaskForm = document.getElementById("create-task-form");
    const newTaskDescription = document.getElementById("new-task-description");
    const newTaskPriority = document.getElementById("new-task-priority");
  
    //ul where new tasks will live on the DOM
    const newTaskUl = document.getElementById("tasks");
  
    //attach event listeners
    newTaskForm.addEventListener("submit", createNewTask);
});
  
const createNewTask = event => {
    event.preventDefault();
    //stop form from trying to submit
    const newTaskDescription = document.getElementById("new-task-description");
    const newTask = document.createElement("li");
    newTask.innerText = newTaskDescription.value;
  
    appendNewTask(newTask);
    event.target.reset();
};
  
const appendNewTask = task => {
    document.getElementById("tasks").appendChild(task);
};