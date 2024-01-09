import inquirer from "inquirer";
let Name = await inquirer.prompt([
    {
        type: "input",
        name: "userName",
        message: "Enter your name:"
    },
]);
let readytoguess = await inquirer.prompt([
    {
        type: "input",
        name: "ready",
        message: ("Hi" + Name.userName + "!") + "Are you ready to guess the right number?"
    },
]);
for (let i = 1; i <= 3; i++) {
    const systemGeneratedNo = Math.floor(Math.random() * 10);
    console.log(`Attempt No:${i}`);
    let ans = await inquirer.prompt({
        type: "list",
        name: "guessNumber",
        choices: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
        message: "Select your guess:"
    });
    if (systemGeneratedNo === ans.guessNumber) {
        console.log(`You guessed it right${Name.userName}`);
    }
    else {
        console.log(`Sorry you guessed it wrong correct answer was ${systemGeneratedNo} `);
    }
}
console.log("Better Luck Next Time");
