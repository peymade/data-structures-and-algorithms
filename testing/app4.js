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

// let totalAge = meep.reduce((acc, person) => {
//   return acc + person.age;
// });

// console.log(acc[meep]);

// let people = [
//   {name: 'Jacob', age: 31},
//   {name: 'Chance', age: 38},
//   {name: 'Hexx', age: 28}
// ];


// let peopleNum = people.reduce((acc, person) => {
//   acc = acc + person.age;
//   return acc;
// }, 0);

// console.log(peopleNum)




// // const people = [{ firstName: 'Jane', lastName: 'Doe' }, { firstName: 'James', lastName: 'Bond' }];

// // const toLastNames = people => {
// //   let newNames = people.map(function(person,idx){
// //     return person.firstName + ' ' + person.lastName;
// //   }); return newNames
// // };

// // console.log(toLastNames(people));


// const countNumberOfElements = (arr) => {
//   let numElemArray = arr.reduce((acc,num) => {
//     return acc + 1;
//   },0); return numElemArray;};

// console.log(countNumberOfElements([1,2,3,4,5]));



// const returnNames = (arr) => {
//   let starNames = arr.reduce((acc,starName) => {
//     acc = arr.push(starName.name);
//     return acc;
//   },[]); return acc;
// };

// console.log(returnNames([{
//   name: 'Luke Skywalker',
//   height: '172',
//   mass: '77',
//   hair_color: 'blond',
//   skin_color: 'fair',
//   eye_color: 'blue',
//   birth_year: '19BBY',
//   gender: 'male',
// },
// {
//   name: 'C-3PO',
//   height: '167',
//   mass: '75',
//   hair_color: 'n/a',
//   skin_color: 'gold',
//   eye_color: 'yellow',
//   birth_year: '112BBY',
//   gender: 'n/a'},
// {
//   name: 'R2-D2',
//   height: '96',
//   mass: '32',
//   hair_color: 'n/a',
//   skin_color: 'white, blue',
//   eye_color: 'red',
//   birth_year: '33BBY',
//   gender: 'n/a'
// },
// {
//   name: 'Darth Vader',
//   height: '202',
//   mass: '136',
//   hair_color: 'none',
//   skin_color: 'white',
//   eye_color: 'yellow',
//   birth_year: '41.9BBY',
//   gender: 'male'
// },
// {
//   name: 'Leia Organa',
//   height: '150',
//   mass: '49',
//   hair_color: 'brown',
//   skin_color: 'light',
//   eye_color: 'brown',
//   birth_year: '19BBY',
//   gender: 'female'
// }]));





const countNumberOfChildren = (arr) => {
  let newArray = arr.filter((function(val,idx){
    if (val.children){
      return val.children;
    } else if (val.children == undefined){
      return false;
    }
  })); console.log(newArray);

  let childArray = newArray.reduce((acc,child) => {
    console.log(child.children)
    acc = acc + child.children.length;
    return acc;
  },0); return childArray;
};


console.log(countNumberOfChildren([
  {
    name: 'Eddard',
    spouse: 'Catelyn',
    children: ['Robb', 'Sansa', 'Arya', 'Bran', 'Rickon'],
    house: 'Stark',
  },
  {
    name: 'Jon',
    spouse: 'Lysa',
    children: ['Robin'],
    house: 'Arryn',
  },
  {
    name: 'Cersei',
    spouse: 'Robert',
    children: ['Joffrey', 'Myrcella', 'Tommen'],
    house: 'Lannister',
  },
  {
    name: 'Daenarys',
    spouse: 'Khal Drogo',
    children: ['Drogon', 'Rhaegal', 'Viserion'],
    house: 'Targaryen',
  },
  {
    name: 'Mace',
    spouse: 'Alerie',
    children: ['Margaery', 'Loras'],
    house: 'Tyrell',
  },
  {
    name: 'Sansa',
    spouse: 'Tyrion',
    house: 'Stark',
  },
  {
    name: 'Jon',
    spouse: null,
    house: 'Snow',
  },
]));
