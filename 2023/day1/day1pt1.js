const fs = require('fs');
const findSumOfPairs = () => {
  const data = fs.readFileSync('./input.txt', { encoding: 'utf8', flag: 'r' }).split('\n')
  let sum = 0;
  data.forEach(string => {
    let i = 0;
    let j = string.length - 1;
    while (               
      isNaN(parseInt(string[i])) ||
      isNaN(parseInt(string[j]))
    ) {
      if (isNaN(parseInt(string[i]))) {
        i++;
      } else j--;
    }
    sum += parseInt([string[i], string[j]].join(''));
  })
  return sum
}

console.log(findSumOfPairs());