// function x() {
//   console.log("x function");
// }

// //x is the call back function

// function y(x) {
//   x();
//   console.log("here y is the higher order function");
// }

// y();

const radius = [5, 8, 7, 4];
const calculateArea = function (radius) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(Math.PI * radius[i] * radius[i]);
  }
  return output;
};

console.log(calculateArea(radius));

const calculateCircumeference = function (radius) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(2 * Math.PI * radius[i]);
  }
  return output;
};

console.log(calculateCircumeference(radius));

const calculateDiameter = function (radius) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(2 * radius[i]);
  }
  return output;
};

console.log(calculateDiameter(radius));

/////those were not a good practice
// instead of that we should pracitce DRY
