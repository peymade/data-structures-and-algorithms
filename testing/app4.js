const arr = ['BeAr', 'lIon'];

function upper(str) {
  return str.toUpperCase();
}

function lower(str) {
  return str.toLowerCase();
}

const updateAnimal = (arr, callback) => {
  let meme = arr.map(function(val,idx){
    return callback(val);
  }); 
return meme;
};


updateAnimal(arr, upper);

///////


const sortNames = (arr) => {

  arr.sort((a,b) => {

    console.log(a.charAt(0).toUpperCase)

    console.log(a.charAt(0) == a.charAt(0).toUpperCase());
    console.log(b.charAt(0) === b.charAt(0).toLowerCase());
    console.log(b.charAt(0))
    console.log(a.charAt(0));

    if((a.charAt(0) === a.charAt(0).toUpperCase())&&(b.charAt(0) === b.charAt(0).toLowerCase())) {
      return -1;
    } else if ((a.charAt(0) === a.charAt(0).toLowerCase())&&(b.charAt(0) === b.charAt(0).toUpperCase())) {
      return 1;
    } else {
      return 0;
    }
  
  }); return arr;
}

console.log(sortNames(['able','Bob']));






const alphabetize = (arr) => {
  arr.sort();
  return arr;
};






console.log(alphabetize(['moo', 'boo', 'cat']));



const sortNumbersByLength = (arr) => {

  arr.sort((a,b) => {
    var numA = a.toString();
    var numB = b.toString();
    if (numA.length > numB.length){
      return 1;
    } else if (numA.length < numB.length){
      return -1;
    } else {
      return 0;
    }
  }); return arr;
};


console.log((sortNumbersByLength([10, 2.8, 1, -47.75])));





function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

const people = [
  new Person('Wes', 'Washington', 25),
  new Person('Casey', 'Codefellow', 38),
  new Person('Stan', 'Seattle', 67),
];

const sortPeople = (arr) => {

  let nameArray = arr.map(function(person, idx){
    return person.lastName;
  });

  console.log(nameArray);
  
  heyArray = nameArray.sort((a,b) => {
    if (a > b) {
      return 1;
    } else if (a < b) {
      return -1;
    } else {
      return 0;
    }
  }); return heyArray;

};

console.log(sortPeople(people));