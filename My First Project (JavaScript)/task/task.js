const input = require('sync-input');

// We have imported the 'sync-input' package for you.
// This package allows you to get user input.
// Like so:
// let name = input("Type your name: ");
// let age = Number(input("Type your age: "));
// You will need it in later stages.


let bubblegumEarned = 202;
let toffeeEarned = 118;
let iceCreamEarned = 2250;
let milkChocolateEarned = 1680;
let doughnutEarned = 1075;
let pancakeEarned = 80;
let income = bubblegumEarned + toffeeEarned + milkChocolateEarned + doughnutEarned + pancakeEarned + iceCreamEarned;
console.log("Earned amount:");
console.log("Bubblegum: $" + bubblegumEarned);
console.log("Toffee: $" + toffeeEarned);
console.log("Ice cream: $" + iceCreamEarned);
console.log("Milk chocolate: $" + milkChocolateEarned);
console.log("Doughnut: $" + doughnutEarned);
console.log("Pancake: $" + pancakeEarned);
console.log();
console.log("Income: $" + income);
const staffExpenses = Number(input("Staff expenses:\n"));
const otherExpenses = Number(input("Other expenses:\n"));
console.log("Net Income: $" + (income - staffExpenses - otherExpenses));
