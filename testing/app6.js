const allHappy = (arr) => {
  let findMatch = /^:\)/g;
  let secMatch = /:\)/g
  let returnVal = false;

  
    let matches = arr.filter(phrase => {
      if( (secMatch.test(phrase))|| (findMatch.test(phrase))){
        return phrase;
      } 
    });

  if(matches.length === arr.length){
    returnVal = true;
  } else {
    returnVal = false;
  }
  return returnVal;
};



// const findHappiness = (arr) => {
//   let findMatch = /^:\)/g;
//   let secMatch = /:\)/g

//   let matches = arr.filter(phrase => {
//     if( (secMatch.test(phrase))|| (findMatch.test(phrase))){
//       return phrase;
//     } 
//   }); return matches;

// };


console.log(allHappy(['apple (:)', ':)banana', 'cant:)aloupe']))
