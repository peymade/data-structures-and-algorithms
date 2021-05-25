
const replaceZeros = (string) => {
  const zeros = /[0]/g;
  const replace = 'zero';

  console.log(zeros);

  let newString = string.replace(zeros, replace);

  return newString;
}

console.log(replaceZeros('hey0 hey0'));



const isCapitalized = (str) => {
  const capMatch = /\b[A-Z][a-z]+/g;
  const array = str.match(capMatch) || [];
  return array;
};

console.log(isCapitalized('momom Momo'))

const validateWord = (word) => {
  if(( /^[a-zA-Z]{5,10}$/.test(word))){
    return true;
  } else {
    return false
  }

};

console.log(validateWord('mo'));
