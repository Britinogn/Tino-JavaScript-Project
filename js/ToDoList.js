// to do list 
let todoList = [];

function showMenu() {
    console.log("\n--- To Do List ---");
    console.log("1. View Tasks");
    console.log("2. Add Tasks \n");
}



function viewTask() {
    if (todoList.length === 0) {
        console.log("You dont have any task yet.");
    } else{
        console.log("\nYour available task");
        for(let i = 0; i < todoList.length ; i++){
            console.log(todoList[i]);
            
        }
    }
}




function addTasks(task) {
    todoList.push(task);
    console.log("Task Added: ",  task );
    
}
showMenu();

addTasks("Buy Groceries");
addTasks("Hit the Gym");

viewTask();
