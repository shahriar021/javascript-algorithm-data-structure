// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// const linearSearch = (arr, target) => {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == target) {
//       return i;
//     }
//   }
//   return -1;
// };

// rl.question("Enter the target element: ", (userInput) => {
//   const target = Number(userInput); // Convert input to a number if needed
//   const result = linearSearch([5, 6, 9, 4, 1], target);

//   if (result !== -1) {
//     console.log(`Element found at index ${result}`);
//   } else {
//     console.log("Element not found");
//   }

//   rl.close();
// });

// --------------------------------------------------


const readline = require("readline");

let r1 = readline.createInterface(process.stdin, process.stdout);

// Function to perform an action based on inputs
const processInputs = (number1, number2) => {
  // Do something with the inputs (e.g., calculate sum)
  const sum = Number(number1) + Number(number2);
  console.log(`Sum: ${sum}`);

  r1.close();
};

r1.question("Enter the first number: ", (number1) => {
  r1.question("Enter the second number: ", (number2) => {
    processInputs(number1, number2);
  });
});
