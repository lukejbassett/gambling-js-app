// js learning through slot machine

// tasks to do vvv
// deposit money DONE
// determine lines on bet DONE
// collect bet amount
// spin slot machine
// check user winnings
// give winnings / take bet
// leave or play again (force quit with no money)

// prompt package
const prompt = require("prompt-sync")();

// es6 function
const depositAmount = () => {
  while (true) {
    const depositAmount = prompt("Enter your deposit amount: ");
    const depositAmountNumber = parseFloat(depositAmount);

    if (isNaN(depositAmountNumber) || depositAmountNumber <= 0) {
      console.log("Invalid amount, try again.");
    } else {
      return depositAmountNumber;
    }
  }
};

const getNumberOfLines = () => {
  while (true) {
    const lines = prompt("How many lines do you want to bet: ");
    const numberOfLines = parseFloat(lines);
    if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
      console.log("Invalid amount, try again.");
    } else {
      return numberOfLines;
    }
  }
};

depositAmount();
getNumberOfLines();
