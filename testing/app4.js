// const arr = ['BeAr', 'lIon'];

// function upper(str) {
//   return str.toUpperCase();
// }

// function lower(str) {
//   return str.toLowerCase();
// }

// const updateAnimal = (arr, callback) => {
//   let meme = arr.map(function(val,idx){
//     return callback(val);
//   }); 
// return meme;
// };


// updateAnimal(arr, upper);

// ///////


// const sortNames = (arr) => {

//   arr.sort((a,b) => {

//     console.log(a.charAt(0).toUpperCase)

//     console.log(a.charAt(0) == a.charAt(0).toUpperCase());
//     console.log(b.charAt(0) === b.charAt(0).toLowerCase());
//     console.log(b.charAt(0))
//     console.log(a.charAt(0));

//     if((a.charAt(0) === a.charAt(0).toUpperCase())&&(b.charAt(0) === b.charAt(0).toLowerCase())) {
//       return -1;
//     } else if ((a.charAt(0) === a.charAt(0).toLowerCase())&&(b.charAt(0) === b.charAt(0).toUpperCase())) {
//       return 1;
//     } else {
//       return 0;
//     }
  
//   }); return arr;
// }

// console.log(sortNames(['able','Bob']));






// const alphabetize = (arr) => {
//   arr.sort();
//   return arr;
// };






// console.log(alphabetize(['moo', 'boo', 'cat']));



// const sortNumbersByLength = (arr) => {

//   arr.sort((a,b) => {
//     var numA = a.toString();
//     var numB = b.toString();
//     if (numA.length > numB.length){
//       return 1;
//     } else if (numA.length < numB.length){
//       return -1;
//     } else {
//       return 0;
//     }
//   }); return arr;
// };


// console.log((sortNumbersByLength([10, 2.8, 1, -47.75])));





// function Person(firstName, lastName, age) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.age = age;
// }

// const people = [
//   new Person('Wes', 'Washington', 25),
//   new Person('Casey', 'Codefellow', 38),
//   new Person('Stan', 'Seattle', 67),
// ];

// const sortPeople = (arr) => {

//   let nameArray = arr.map(function(person, idx){
//     return person.lastName;
//   });

//   console.log(nameArray);
  
//   heyArray = nameArray.sort((a,b) => {
//     if (a > b) {
//       return 1;
//     } else if (a < b) {
//       return -1;
//     } else {
//       return 0;
//     }
//   }); return heyArray;

// };

// console.log(sortPeople(people));





// let meep = [
//   {name: 'Jacob', age: 31},
//   {name:'Chance', age: 28}
// ]

// // let totalAge = meep.reduce((acc, person) => {
// //   return acc + person.age;
// // });

// // console.log(acc[meep]);

// // let people = [
// //   {name: 'Jacob', age: 31},
// //   {name: 'Chance', age: 38},
// //   {name: 'Hexx', age: 28}
// // ];


// // let peopleNum = people.reduce((acc, person) => {
// //   acc = acc + person.age;
// //   return acc;
// // }, 0);

// // console.log(peopleNum)




// // // const people = [{ firstName: 'Jane', lastName: 'Doe' }, { firstName: 'James', lastName: 'Bond' }];

// // // const toLastNames = people => {
// // //   let newNames = people.map(function(person,idx){
// // //     return person.firstName + ' ' + person.lastName;
// // //   }); return newNames
// // // };

// // // console.log(toLastNames(people));


// // const countNumberOfElements = (arr) => {
// //   let numElemArray = arr.reduce((acc,num) => {
// //     return acc + 1;
// //   },0); return numElemArray;};

// // // console.log(countNumberOfElements([1,2,3,4,5]));



// // // const returnNames = (arr) => {
// // //   let starNames = arr.reduce((acc,starName) => {
// // //     acc = arr.push(starName.name);
// // //     return acc;
// // //   },[]); return acc;
// // // };

// // // console.log(returnNames([{
// // //   name: 'Luke Skywalker',
// // //   height: '172',
// // //   mass: '77',
// // //   hair_color: 'blond',
// // //   skin_color: 'fair',
// // //   eye_color: 'blue',
// // //   birth_year: '19BBY',
// // //   gender: 'male',
// // // },
// // // {
// // //   name: 'C-3PO',
// // //   height: '167',
// // //   mass: '75',
// // //   hair_color: 'n/a',
// // //   skin_color: 'gold',
// // //   eye_color: 'yellow',
// // //   birth_year: '112BBY',
// // //   gender: 'n/a'},
// // // {
// // //   name: 'R2-D2',
// // //   height: '96',
// // //   mass: '32',
// // //   hair_color: 'n/a',
// // //   skin_color: 'white, blue',
// // //   eye_color: 'red',
// // //   birth_year: '33BBY',
// // //   gender: 'n/a'
// // // // },
// // // // {
// // // //   name: 'Darth Vader',
// // // //   height: '202',
// // // //   mass: '136',
// // // //   hair_color: 'none',
// // // //   skin_color: 'white',
// // // //   eye_color: 'yellow',
// // // //   birth_year: '41.9BBY',
// // // //   gender: 'male'
// // // // },
// // // // {
// // // //   name: 'Leia Organa',
// // // //   height: '150',
// // // //   mass: '49',
// // // //   hair_color: 'brown',
// // // //   skin_color: 'light',
// // // //   eye_color: 'brown',
// // // //   birth_year: '19BBY',
// // // //   gender: 'female'
// // // // }]));





// // // const countNumberOfChildren = (arr) => {
// // //   let newArray = arr.filter((function(val,idx){
// // //     if (val.children){
// // //       return val.children;
// // //     } else if (val.children == undefined){
// // //       return false;
// // //     }
// // //   })); console.log(newArray);

// // //   let childArray = newArray.reduce((acc,child) => {
// // //     console.log(child.children)
// // //     acc = acc + child.children.length;
// // //     return acc;
// // //   },0); return childArray;
// // // };


// // // console.log(countNumberOfChildren([
// // //   {
// // //     name: 'Eddard',
// // //     spouse: 'Catelyn',
// // //     children: ['Robb', 'Sansa', 'Arya', 'Bran', 'Rickon'],
// // //     house: 'Stark',
// // //   },
// // //   {
// // //     name: 'Jon',
// // //     spouse: 'Lysa',
// // //     children: ['Robin'],
// // //     house: 'Arryn',
// // //   },
// // //   {
// // //     name: 'Cersei',
// // //     spouse: 'Robert',
// // //     children: ['Joffrey', 'Myrcella', 'Tommen'],
// // //     house: 'Lannister',
// // //   },
// // //   {
// // //     name: 'Daenarys',
// // //     spouse: 'Khal Drogo',
// // //     children: ['Drogon', 'Rhaegal', 'Viserion'],
// // //     house: 'Targaryen',
// // //   },
// // //   {
// // //     name: 'Mace',
// // //     spouse: 'Alerie',
// // //     children: ['Margaery', 'Loras'],
// // //     house: 'Tyrell',
// // //   },
// // //   {
// // //     name: 'Sansa',
// // //     spouse: 'Tyrion',
// // //     house: 'Stark',
// // //   },
// // //   {
// // //     name: 'Jon',
// // //     spouse: null,
// // //     house: 'Snow',
// // //   },
// // // ]));

// // slice
// let names = ['Jacob', 'Chance', 'Hexx', 'Aliya'];

// let noJacob = names.slice(1,4);
// console.log(noJacob);

// let justJacob = names.slice(0,1);
// console.log(justJacob);


// // splice
// names.splice(1,0,'Kristian');
// console.log(names);



// // //join

// // const words = ['i', 'am', 'happy']
// // console.log(words.join(' '))


// // // split
// // let string = 'Jacob';
// // const mew = string.split('');

// // console.log(mew);






// // const sentence = 'one plus equals two'; 

// // // break into an array of words

// // const brokenSentence = sentence.split(' ');
// // console.log(brokenSentence)

// // // insert one after plus using splice

// // brokenSentence.splice(2,0,'one');
// // console.log(brokenSentence);

// // const newSentence = brokenSentence.join(' ');
// // console.log(newSentence);


// let starWarsPeople = [
//   {
//     "name": "C-3PO",
//     "height": "167",
//     "eye_color": "yellow"
//   },
//   {
//     "name": "Luke Skywalker",
//     "height": "172",
//     "eye_color": "blue"
//   },
//   {
//     "name": "R2-D2",
//     "height": "96",
//     "eye_color": "red"
//   }
// ];

// const sortStarWarsCharacters = (starWarsArr) => {
  
//   return starWarsArr.sort((a,b) => {
//     let newA = parseInt(a.height);
//     let newB = parseInt(b.height);
//     console.log(newA)
//    if(newA > newB){
//      return -1;
//    } else {
//      return 0;
//    }
//   }); 
// }

// console.log(sortStarWarsCharacters(starWarsPeople))

// const removeThree = (idx, arr) => {
//   const newThree = arr.splice(idx,3)
//   return newThree;
// };

// console.log(removeThree(2, [1,2,3,4,5,6,8,9]))




// const howMuchPencil = (str) => {
//   let result = [];
//   result.push(str)
//   if(str.length>3){
//     for(let i=-4; i<str.length; i++){
//       str=str.slice(1);
//       result.push(str);
//     }  result.push('');
//   } else if(str.length ===3 ){
//       for(let i=0; i<str.length; i++){
//         str=str.slice(1);
//         result.push(str);
//     }
//   result.push('');
//   }
//   return result;
// };



// console.log(howMuchPencil('Welcome'))




const phone = (number) => {

  var first =  /[0-9]{3}-[0-9]{3}-[0-9]{4}/

  return number.match(first);
}



console.log(phone('111-222-4444'))

const go = (bl) => {
  let mroo = bl;
  return mroo.replace(/[A-Z]/g, '-');
}

console.log(go('kokokoKokoKOko'));



const containsWorld = (input) => {
  const word = /(world)/;
  return word.test(input);
};



const isCapitalized = (str) => {
  const capMatch = /\b[A-Z][a-z]+/g;
  const array = str.match(capMatch) || [];
  return array;
};


const citiesAtoJ = (arr) => {
  const cityMatch = /^[A-J]/;
  let cityArray = arr.filter(function(word,idx){
    if(cityMatch.test(word)){
      return word;
    }});
    return cityArray;
};


console.log(citiesAtoJ(['Albuquerque', 'Chicago', 'Philadelphia', 'Newark', 'Sacramento', 'Eugene']));

