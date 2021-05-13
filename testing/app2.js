const numbers = [1,2,3,4,5]

const evenNumbers = numbers.filter((number) => number % 2 === 0);

console.log(evenNumbers);

const kids = family.filter((member) => {
  if(member.role === 'kid') {
    return true; // True ends up in array
  } return false; // False gets filtered out
});