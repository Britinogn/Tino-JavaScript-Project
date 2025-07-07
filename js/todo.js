let todoMenu = [];

function userName() {
    console.log("\n.... ToDo List.....");
    console.log("1. Add New Tasks");
    console.log("2. View Tasks");
    console.log("3. Delete Task \n");
}

function viewTasks() {
    if (todoMenu.length === 0) {
        console.log("Not Completed Task\n");
        
    } else {
        console.log("\nCompleted Task");
        for (let i = 0; i < todoMenu.length; i++) {
            console.log(todoMenu[i]);
        }
    }
}

function addTasks(task) {
    todoMenu.push(task)
    console.log("Added Task:"+ task);
}


userName();

addTasks("Welcome to Class");
addTasks("Welcome to onBoard");

viewTasks();

