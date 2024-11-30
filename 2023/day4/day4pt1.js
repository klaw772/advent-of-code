const fs = require("fs");
const findPoints = () => {
  const data = fs
    .readFileSync("./example.txt", { encoding: "utf8", flag: "r" })
    .split("\n");
  let sum = 0;
  data.forEach((string) => {
    string = string.split(' ').join(',')
    // .split(' | ').join(',').split(": ").join(',')
    console.log(string)
  });
  return sum;
};

console.log(findPoints());
