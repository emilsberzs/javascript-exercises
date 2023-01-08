const add = function (first, second) {
  return first + second;
};

const subtract = function (first, second) {
  return first - second;
};

const sum = function (arr) {
  // return arr.reduce((total, current) => total + current, 0); //with a reduce
  result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result;
};

const multiply = function (arr) {
  result = 1;
  for (let i = 0; i < arr.length; i++) {
    result *= arr[i];
  }
  return result;
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (number) {
  start = number;
  if (start == 0) {
    return 1
  } else {
    for (let i = start - 1; i > 0; i--) {
      start *= i;
    }
    return start;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
