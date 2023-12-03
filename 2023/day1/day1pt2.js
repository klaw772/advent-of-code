const fs = require('fs');
const numberStrings = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
const numberStringsObj = [
  { one: 1 },
  { two: 2 },
  { three: 3 },
  { four: 4 },
  { five: 5 },
  { six: 6 },
  { seven: 7 },
  { eight: 8 },
  { nine: 9 },
];
// keeping this for posterity but wow this did not work
const findSumOfPairs = () => {
  const data = fs.readFileSync('./input.txt', { encoding: 'utf8', flag: 'r' }).split('\n')
  let sum = 0;
  data.forEach(string => {
    let i = 0;
    let j = 5;
    let leftWindow = string.slice(i, j);
    let rightWindow = string.slice(string.length - j, string.length - i);
    while (               
      notANumberLeft(leftWindow) ||
      notANumberRight(rightWindow)
    ) {
      if (notANumberLeft(leftWindow)) {
        i++, j++;
        leftWindow = string.slice(i, j);
      } else {
        i++, j++;
        rightWindow = string.slice(string.length - j, string.length - i);
      }
    }
    console.log([leftWindow, rightWindow])
    // sum += parseInt([data[2][i], data[2][j]].join(''));
  })
  // return sum
}

const notANumberLeft = (str) => {
  return (
    !str.includes("one") &&
    !str.includes("two") &&
    !str.includes("three") &&
    !str.includes("four") &&
    !str.includes("five") &&
    !str.includes("six") &&
    !str.includes("seven") &&
    !str.includes("eight") &&
    !str.includes("nine") &&
    isNaN(parseInt(str[0]))
  );
}


const notANumberRight = (str) => {

  return !str.includes("one") &&
    !str.includes("two") &&
    !str.includes("three") &&
    !str.includes("four") &&
    !str.includes("five") &&
    !str.includes("six") &&
    !str.includes("seven") &&
    !str.includes("eight") &&
    !str.includes("nine") && isNaN(parseInt(str.slice(-1)));
};

findSumOfPairs();