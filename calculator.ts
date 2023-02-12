import inquirer from "inquirer";

type answerType = {
    firstNum: number,
    secondNum: number,
    operator: string
}

let answer: answerType = await inquirer.prompt([
    {
        type: "number",
        name: "firstNum",
        message: "Enter First Number:"
    },
    {
        type: "number",
        name: "secondNum",
        message: "Enter Second Number:"
    },
    {
        type: "list",
        name: "operator",
        choices: ["+", "-", "/", "*"],
        message: "What operation you want to perform?"
    }
]);
let { firstNum, secondNum, operator } = answer;

if (firstNum && secondNum && operator) {
    let result: number = 0;
    switch (operator) {
        case "+":
            result = firstNum + secondNum;
            break;
        case "-":
            result = firstNum - secondNum;
            break;
        case "/":
            result = firstNum / secondNum;
            break;
        case "*":
            result = firstNum * secondNum;
            break;
    }
    console.log(result);
}