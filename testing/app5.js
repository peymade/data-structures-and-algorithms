// let person = {name: 'yee', age: 41};

// let keys = Object.keys(person);


// let moo = keys.forEach(key => {
//   const boo = person[key];
//   return boo;
// })

// Object.values(person) // Array with values

// console.log(moo);

// let foo = Object.entries(person); // Array with two arrays - each contains the value/key pairs

// console.log(foo);


// const getCourseKeys = (obj) => {
  
//   for(let property in obj){
//     console.log(property);
//   }
// };



// console.log(getCourseKeys(person));


// const checkValues = (obj, value) => {
//   const valueArray = [];
//   let switchy = null;
//   for (let value in obj) {
//   valueArray.push(obj[value]);
// } 

// if (valueArray.includes(value)){
//   switchy = true;
// } else {
//   switchy = false;
// } console.log(valueArray);
// return switchy;
// };



const startingObj = {
  'Grace Hopper': '222-303-5938',
  'Ada Lovelace': '222-349-9842',
  'Alan Turing': '222-853-5933'
};
const updateNumbers = (obj) => {
  let foo = Object.entries(obj);
  return foo;
};

console.log(updateNumbers(startingObj))




const characters = [
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
];

const hasChildrenValues = (arr, character) => {
  
  let characters = Object.values(arr);

  let charArr = characters.filter(function(char,i){
    if(char.name === character || char.spouse === character){
      return char;
    }
  }); 

  if(charArr[0].children){
    return true;
  } else{
    return false;
  }
}

console.log(hasChildrenValues(characters, 'Sansa'))