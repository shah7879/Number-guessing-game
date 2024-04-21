import { match } from "assert";
import inquirer from "inquirer";

// 1)computer will generate a random number -Done.

// user input for guessing number Done.

// compare user input with computer generated number and show  result Done

const randomNumber = Math.floor(Math.random() * 10 + 1);

const answers =await inquirer.prompt([
{
    name: "userGuessedNumber",
    type: "number",
    message: "please guess a number between 1-10", 
}])

if (answers.userGuessedNumber === randomNumber){
    console.log("congratulations! you guessed right number.");
}
    else {
        console.log("you guessed wrong number");
    }
    
