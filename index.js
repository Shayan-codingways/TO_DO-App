#! /usr/bin/env node
import inquirer from "inquirer";
//empty array for tasks
let todos = [];
let condition = true;
while (condition) {
    let addTAsk = await inquirer.prompt([
        //object 1
        {
            name: 'todo',
            type: "input",
            message: "What you want to to add in to your Todos?"
        },
        //object 2
        {
            name: "addMore",
            type: "confirm",
            message: "Do you want to add more?",
            default: "false"
        }
    ]);
    //addition in todas array
    todos.push(addTAsk.todo);
    condition = addTAsk.addMore;
    console.log(todos);
}
