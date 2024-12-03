import inquirer from "inquirer";
const answers = await inquirer.prompt([{
        type: "input",
        name: "userID",
        message: "Kindly enter your User ID:"
    },
    {
        type: "number",
        name: "userPIN",
        message: "Kindly enter your User PIN:"
    },
    {
        type: "list",
        name: "accountType",
        choices: ["Current", "Savings"],
        message: "Select your Account Type:"
    },
    {
        type: "list",
        name: "transactionType",
        choices: ["Fast Cash", "Withdraw"],
        message: "Select your transaction",
        when(answers) {
            return answers.accountType;
        }
    },
    {
        type: "list",
        name: "amount",
        choices: ["1000", "2000", "10000", "20000"],
        message: "Select your Amount",
        when(answers) {
            return answers.transactionType === "Fast Cash";
        }
    },
    {
        type: "number",
        name: "amount",
        message: "Enter your Amount",
        when(answers) {
            return answers.transactionType == "Withdraw";
        },
    }
]);
if (answers.userID && answers.userPIN) {
    const balance = Math.floor(Math.random() * 10000000);
    console.log(balance);
    const EnteredAmount = answers.amount;
    if (balance > EnteredAmount) {
        const remaining = balance - EnteredAmount;
        console.log("Your remaining balance is", remaining);
    }
    else {
        console.log("Insufficient Balance!");
    }
}
;
