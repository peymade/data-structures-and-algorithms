
const addTwo = (arr) => {
  let newAddTwoValue;
  let newAddTwoValueArray = [];
  for(let i=0; i<arr.length; i++){
    newAddTwoValue = arr[i] + 2;
    newAddTwoValueArray.push(newAddTwoValue);
  } 
  console.log(newAddTwoValueArray);
  return newAddTwoValueArray;
};

addTwo([1,2,3,4,5,6]);

const typeNum = (arr) => {

  let typeNumArray = arr.filter(function(n,i){
    if(Number.isFinite(n)){
      return n;
    }
  }); return typeNumArray;
}


console.log(typeNum([1, 'bob', 3]))


const containsAnd = (arr) => {
  
};


containsAnd(['panda', 'ran', 'and'])

const notInFirstArray = (forbiddenValues, arr) => {

  let NIFArray = arr.filter(function(value,i){
    return !forbiddenValues.includes(value)
  }); return NIFArray;
}

const firstNums = [1, 2, 3];
  const secondNums = [1, 2, 3, 4];

  const firstStrings = ['Demi', 'Gregor', 'Hound'];
  const secondStrings = ['Gary', 'Charlotte', 'Demi', 'Gregor', 'Hound'];

notInFirstArray(firstNums, secondNums);
console.log(notInFirstArray(firstNums, secondNums));




const snorlaxData = {
  stats: [
    {
      stat: {
        url: 'https://pokeapi.co/api/v2/stat/6/',
        name: 'speed',
      },
      effort: 5,
      baseStat: 30,
    },
    {
      stat: {
        url: 'https://pokeapi.co/api/v2/stat/5/',
        name: 'special-defense',
      },
      effort: 2,
      baseStat: 110,
    },
    {
      stat: {
        url: 'https://pokeapi.co/api/v2/stat/4/',
        name: 'special-attack',
      },
      effort: 9,
      baseStat: 65,
    },
  ],
  name: 'snorlax',
  weight: 4600,
};


const getStatName = (arr, minBaseStatz) => {
  let newNum = minBaseStatz;
  let statzArray = arr.filter(function(value, idx){
    return (newNum<value.baseStat);
  }); 

  console.log(statzArray);
  
  let finalArray = statzArray.map(function(object,indx){
    return object.stat.name;
  });
  return finalArray;
};

console.log(getStatName(snorlaxData.stats, 50));