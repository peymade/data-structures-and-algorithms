// let numbers = [1,2,3,4,5];

// for (let i = 0; i< numbers.length; i++){
//   for(let j=0; j<numbers.length; j++){
//     console.log('we looped')
//   }
// }


// let people = ['jacob', 'chance', 'hexx', 'kristian']; 

// function shakeHands() {

//   let current = '';
//   let secondcurrent = ''; 

//   for(let i = 0; i< people.length; i++){

//     current = people[i];

//     for(let j=0; j<people.length; j++){

//       secondcurrent = people[j];
//       if(current === secondcurrent){
//         console.log('NO')
//       } else {
//         console.log('ok');
//       }
//       console.log('shook');
//     }
//   } 
// }

// console.log(shakeHands(people));



// function returnTen(str){
//   var splitArray = str.split('');
//   var sliceArray = splitArray.slice(Math.max(splitArray.length-10,0))
//   return sliceArray;
//  }

 
//  console.log(returnTen('hello world'))




const errands = [
  {
    store: 'Grocery store',
    items: [{ name: 'Eggs', quantity: 12 }, { name: 'Milk', quantity: 1 }, { name: 'Apples', quantity: 3 }]
  },
  {
    store: 'Drug store',
    items: [{ name: 'Toothpaste', quantity: 1 }, { name: 'Toothbrush', quantity: 3 }, { name: 'Mouthwash', quantity: 1 }]
  },
  {
    store: 'Pet store',
    items: [{ name: 'Cans of food', quantity: 8 }, { name: 'Treats', quantity: 24 }, { name: 'Leash', quantity: 1 }]
  }
];

const howManyTreats = (arr) => {

treatNum = arr[2].items[1].quantity;
  return treatNum;
};



console.log(howManyTreats(errands));