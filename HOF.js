const foods = ['pizza', 'burger', 'fingerChips', 'donuts', 'springRoll'];
const numberArray = [12, 324, 213, 4, 2, 3, 45, 4234];
const myArray = [11, 34, 20, 5, 53, 16];

// Progression 1:

function slice(start, end) {
  let modifiedFood = foods.slice(start, end);
  return modifiedFood;
}

// Progression 2:

function spliced() {
  foods.splice(2, 0, 'noodles', 'icecream');
  return foods;
}

// Progression 3:

function isEven(number) {
  return number % 2 == 0;
}

function isPrime(number) {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i == 0) {
      return false;
    }
  }
  return true;
}

function checkNumber(numberArray, operation) {
  let resArray = numberArray.filter((ele) => {
    return operation(ele);
  });
  return resArray;
}

// Progression 4:

function reject(numberArray) {
  return nonPrime(numberArray);
}

function nonPrime(numberArray) {
  let filteredArray = numberArray.filter((ele) => {
    return !isPrime(ele);
  });
  return filteredArray;
}

// Progression 5:

// lambda expression
const isEvenUsingLambda = (number) => number % 2 == 0;

// Progression 6:

function square(number) {
  return number * number;
}

function findSquareOfNumbers(myArray) {
  let squareArray = myArray.map((ele) => {
    return square(ele);
  });
  return squareArray;
}

// Progression 7:

function multiply(myArray) {
  let multipliedValues = myArray.reduce((res, ele) => {
    return res * ele;
  });
  return multipliedValues;
}

function sumOfSquares(myArray) {
  let squareArr = findSquareOfNumbers(myArray);
  let reducedRes = squareArr.reduce((res, ele) => {
    return res + ele;
  });
  return reducedRes;
}
