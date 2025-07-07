/*
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

*/


let movies = [];

function displayMovies() {
    console.log("\nList of Movies");
    console.log("Add Movie \n ");
    
}

function addMovie(moviename) {
    movies.push(moviename);
    console.log("Movie Added :", moviename);
}

displayMovies();

addMovie("A pursuit for happiness");
addMovie("Rango");
addMovie("Zootopia");
addMovie("Coach Carter");
addMovie("Wreck it Ralph");
addMovie("Prison Break");
addMovie("Vikings \n");

for (let i = 0; i < 7; i++) {
    console.log(movies[i]);
}
