const fs = require("fs");
const findPossibleGames = () => {
  const data = fs
    .readFileSync("./input.txt", { encoding: "utf8", flag: "r" })
    .split("\n");
  let sum = 0;
  data.forEach((string) => {
    string = string.split(', ').join(',').split('; ').join(',').split(': ').join(',').split(',')
    let gameId = string[0].split(" ")[1]
    let isPossibleCheck = true;
    string.forEach(cubePull => {
      if (
        (cubePull.includes("red") &&
        parseInt(cubePull.split(" ")[0]) > 12) ||
        (cubePull.includes("green") &&
        parseInt(cubePull.split(" ")[0]) > 13) ||
        (cubePull.includes("blue") &&
        parseInt(cubePull.split(" ")[0]) > 14)
      ) {
        isPossibleCheck = false;
      } else return;
    })
    if (isPossibleCheck) {
      sum += parseInt(gameId)
    }
  });
  return sum;
};

console.log(findPossibleGames());
