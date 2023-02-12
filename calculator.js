import inquirer from "inquirer";
let answer = await inquirer.prompt([
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
    let result = 0;
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
