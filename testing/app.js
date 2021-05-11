// 'use strict'

// let newArray = [];

// const addOne = (arr) => {
  
//   arr.forEach( function(value, idx){
//   let newValue;
//   newValue = value + 1;
//   newArray.push(newValue);
//   return newArray;
//   });
// };

// console.log(newArray);


// addOne([1, 2, 3, 4, 5]);

// let newEArray = [];

// const addExclamation = (arr) => {
  
//   arr.forEach( function(Evalue, idx){
//   console.log(arr.length);
//   let newEValue;
//   newEValue = Evalue + '!';
//   newEArray.push(newEValue);
//   return newEArray;
//   }); return newEArray;
// };
// console.log(newEArray);




// // happy = addExclamation(['hi', 'how', 'are', 'you']) === ['hi!', 'how!', 'are!', 'you!'];



// // console.log(addExclamation(['hi', 'how', 'are', 'you']))

// // console.log(happy);
// console.log(addExclamation(['hi', 'how', 'are', 'you']));
// console.log(['hi!', 'how!', 'are!', 'you!']);


// let newUArray = [];

// const allUpperCase = (arr) => {
  
//   arr.forEach( function(UValue, idx){
//     let newUValue;
//     console.log(UValue);
//     newUValue = UValue.toUpperCase();
//     newUArray.push(newUValue);
//     return newUArray;
//   }); return newUArray;
// };

// console.log(newUArray);

// allUpperCase(['hi', 'how', 'are', 'you']);

// 4

// let newEUArray = [];



// const greeting = (arr) => {
  
//   arr.forEach( function(EUValue, idx){
//     let newEUValue;
//     newEUValue = EUValue.toUpperCase();
//     newEUValue = newEUValue + "!";
//     newEUArray.push(newEUValue);
//     return newEUArray;
//   }); return newEUArray;
// };

// console.log(newEUArray);


// CHALLENGE 6

// Write a function named createList that takes in an array of the current store intentory.

// The inventory is formatted like this:
// [
//   { name: 'apples', available: true },
//   { name: 'pears', available: true },
//   { name: 'oranges', available: false },
//   { name: 'bananas', available: true },
//   { name: 'blueberries', available: false }
// ]

// This function should use forEach to populate your grocery list based on the store's inventory. If the item is available, add it to your list. Return the final list.
// ------------------------------------------------------------------------------------------------ */

// const fizzbuzz = (arr) => {
//   let newBuzz = [];

//   arr.forEach(function(currentNum, idx){
//     if (currentNum % 3 == 0){
//       if ((currentNum % 3 == 0) && (currentNum % 5 ==0)){
//         newBuzz.push("Fizz Buzz");
//       } else {
//         newBuzz.push("Fizz");
//       }
//     } else if (currentNum % 5 == 0){
//       newBuzz.push("Buzz");
//     } else {
//       newBuzz.push(currentNum)
//     }
//   }); 
//   console.log(newBuzz);
//   return newBuzz;
// };


// fizzbuzz([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]);

// const numbers = [1,2,3,4,5];


// // const newArray = numbers.map(number => {
// //   let multipliedNumber = number * number;
// //   return multipliedNumber; 
// // })

// const newArray = numbers.map(item => item*item)

// console.log(newArray);


