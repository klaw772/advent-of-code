// convert strings to digits before parsing
const fs = require("fs");

const numberStringsObj = [
  { 'one': '1' },
  { 'two': '2' },
  { 'three': '3' },
  { 'four': '4' },
  { 'five': '5' },
  { 'six': '6' },
  { 'seven': '7' },
  { 'eight': '8' },
  { 'nine': '9' },
];

const findSumOfPairs = () => {
  const data = fs
    .readFileSync("./input.txt", { encoding: "utf8", flag: "r" })
    .split("\n");
    let sum = 0;
  data.map((string) => {
    string = string.replaceAll('eightwo', 'eighttwo');
    string = string.replaceAll("oneight", 'oneeight');
    string = string.replaceAll("twone", "twoone");

    numberStringsObj.forEach((numString) => {
      let keyName = Object.keys(numString)[0];
      let val = numberStringsObj.find((num) => num[keyName]);
      string = string.replaceAll(
        keyName,
        val[keyName]
      );
    });
    let i = 0;
    let j = string.length - 1;
    while (isNaN(parseInt(string[i])) || isNaN(parseInt(string[j]))) {
      if (isNaN(parseInt(string[i]))) {
        i++;
      } else j--;
    }
    console.log([string[i], string[j]])
    sum += parseInt([string[i], string[j]].join(""));
  });
  console.log(sum)

};


findSumOfPairs();