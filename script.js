const todoInput = document.getElementById("todo-input")
const todoBtn = document.getElementById("todo-btn")
const todoList = document.getElementById("todo-list")

todoBtn.addEventListener('click',(event)=>{
    event.preventDefault()
 if(todoInput.value.trim()== ""){
    alert(
        "Add a new Task"     
    )
    return;
 } 
    addTodoList();
    todoInput.value = ""
})

function addTodoList (){
    const listItem = document.createElement('li')

    const newBtn = document.createElement('button')
newBtn.textContent= "Delete"

newBtn.addEventListener('click',()=>{
    todoList.removeChild(listItem)
})

    listItem.textContent = todoInput.value;

    todoList.appendChild(listItem)
    listItem.appendChild(newBtn)
   
}