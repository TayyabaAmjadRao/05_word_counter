#! /usr/bin/env node
//importing inquirer and chalk packeges
import inquirer from "inquirer";
import chalk from "chalk";
//display a welcome message
console.log(chalk.bold.cyanBright("\n \t\tTayyaba Rao Word_Counter project"));
console.log("=".repeat(60));
//Prompt the user to enter a sentence
let answer = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter a sentence",
    }
]);
//triming the sentence and splitting it into word base on "spaces"
let words = answer.sentence.trim().split(" ");
//Analysis of user input sentence
console.log("=".repeat(60));
console.log(chalk.bold("-Sentence Words:"));
console.log(words);
console.log(chalk.bold(`\n - Word Count: ${chalk.bold.redBright(words.length)}`));
console.log("=".repeat(60));
