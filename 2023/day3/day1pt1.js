const fs = require('fs');
const findSumOfNums = () => {
  let data = fs.readFileSync('./input.txt', { encoding: 'utf8', flag: 'r' }).split('\n')
  data = data.map(str => Array.from(str))
  let sum = 0;
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].length; j++) {
      if (data[i][j] === '.') continue;
      else {
        
      }
    }
  }
}

findSumOfNums()