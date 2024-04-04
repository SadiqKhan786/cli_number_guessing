#! /usr/bin/env node
// number guessing game by sadiq_khan
import inquirer from 'inquirer';
console.log('Guess a number between 1 to 10');
const a = Math.floor(Math.random() * 10);
while (true) {
    let input = await inquirer.prompt({
        name: "guess", type: "number",
        message: "guess your number:"
    });
    let ans = input.guess;
    if (a == ans) {
        console.log("your guess number is correct");
        break;
    }
    else {
        console.log("your guess number is incorrect, try again");
    }
}
