#! /usr/bin/env node

import inquirer from "inquirer"

//1. computer will generate a random number - Done
//2. user's input for guessing number - Done
//compare user input with computer generated number and show result - Done

const randomNumber =Math.floor( Math.random() *6 + 1 );

const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1-6: ",
    }
]);

if (answer.userGuessedNumber === randomNumber){
    console.log("Congratulations! You Guessed right number.");
} else {
    console.log("Oops! You guessed wrong number.");
}