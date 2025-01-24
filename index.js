// <----------Naming Variables

// num1 = 10

// <---camelcasing 

// firstNumber

// <---snake_case
// first_number

// <---pascal 

// FirstNumber


// <-------------->
// function addNumbers(){ //fn definition
//     let num1 = 23;
//     let num2 = 45;
//     console.log(num1+num2);
//     console.log(num1-num2);
//     // return num1+num2;
// }

// let num1 = 25;
// let num2 = 45; 
// // console.log(num1, num2);
// // addNumbers(); //fn calling

// <--------------->


// let sumOfNumbers = (num1, num2)=>{
//     console.log(num1 + num2);
// }

// sumOfNumbers(num1, num2);



// <----------------...----------------->

// Writing Functions
// Formatting & Commenting

// let and const

// var let const 

// var num1 = 10;
// // redeclaration

// console.log(num1 + "value is 10");

// num1 = 20;

// console.log(num1 + "value is 10");
// num1 = 40;

// <----------------...----------------->


// if(true){
//     console.log("value is " + value);
//     let value = 10; //local scope 

// }
// console.log("value is " + value);

// const num29 = 100; 

// //re-initialize
// //re-declare
// num29 = 200;
// console.log(num29);

// global and local

// <----------------...----------------->

// Arrow functions
// Template Literals
// Destructuring

// template literals

// let name1  = "Dilasa Thapa"
// let name2 = "DDD"
// let age1 = 45;

// function printName(name1){
//     console.log(`Hey this is ${ name1} and the age is ${age1}`);
// }

// printName(name1);
// printName(name2)

// destructuring

// let arr = [23, 5, 6, 788, 83];
// let person = { name: "John", age: 25 };

// console.log(arr[0])
// console.log(person.name)

// let {name} = person
// console.log(name);

// let [num1, num2, num3] = arr;
// console.log(num1, num2, num3); 

// <----------------------...--------------------------->

// ternary operator


// if(condition){ 
//     true statement
// }else{
//     false statement
// }

// syntax:
// (condition) ? (true statement) : (false statment)



// let add = function(x, y) {
//     return x + y;
// }
// console.log(add(1, 2)); // 3
// console.log(add(45, 28745)); // 3


// function generateMultiplier(factor) {
//     console.log("factor", factor)
//     return function(x) {
//       return x * factor;
//     }
//   }
  
//   let double = generateMultiplier(2);
//   console.log(double(5)); // 10


// HOF

// Map 

// apply the logic/operation and return a new array
// take the callback fn as parameter

// Array.map(parameters)




// let doubledNumbers = numbers.map(function(number) {
    //   return number * 2;
    // });
    // console.log("originalarray ", numbers)
    // console.log("modified array ", doubledNumbers); // [2, 4, 6, 8, 10]
    
    
    // forEach
    
    // doesn't return a new array
    
    // let doubledNumbers = numbers.forEach(function(number) {
        //     console.log(number * 2)
        //     return number * 2;
        // });
        // console.log("originalarray ", numbers)
        // console.log("modified array ", doubledNumbers); 
        
        
        
        // reduce 
        // filter


// let numbers = [1, 2, 3, 4, 5];

// let evenNumbers = numbers.filter(function(number) {
//   return number % 2 !== 0;
// });
// console.log(evenNumbers); // [2, 4]

// customized

// function callFunction(fn, x) {
//     return fn(x);
// }

// let square = function(x) { return x*x; }
// console.log(callFunction(square,5)); // 25


// slice()


// 1. removing the elements
// 2. return a new array

// arr.slice(start point, end point)

// let arr = [2, 5, 7, 8, 9];
// let res = arr.slice(-2);

// console.log("original", arr)
// console.log(res)


// splice

// 1. add/remove 
// 2. modify the original array

// arr.splice(starting, No. of elements) //deleting of elements
// arr.splice(starting, no. of elements to be deleted, add the elements) //adding the elements


// arr.splice(1, 1, 46678);
// console.log(arr);

// reduce method HOF\

// 1 2 4 5 

// sum = 0
// sum += num sum = 1
// sum = 12


// Array.reduce((accumulator, ele)=>{

// })

// Recursion


// 1. fn will call itself
// 2. base case - terminate the calls --> errors 

function factorial(n) {
    if (n === 0) {
      return 1;
    }// base case 
    return n * factorial(n - 1); //recursive code
}
console.log(factorial(5)); // 120


// 5 * (4 * 3 * 2 * 1 )= 120

// num * 4 * 3!


// num * num-1 * num-1-1 * num-1-1-1 * num-1-1-1-1 = 120



































