const fs = require("fs");
const findPossibleGames = () => {
  const data = fs
    .readFileSync("./input.txt", { encoding: "utf8", flag: "r" })
    .split("\n");
  let sum = 0;
  data.forEach((string) => {
    string = string.split(', ').join(',').split('; ').join(',').split(': ').join(',').split(',')
    let redNeeded, blueNeeded, greenNeeded;
    console.log(string)
    string.forEach(cubePull => {
      if (cubePull.includes("red")) {
        if (!redNeeded || parseInt(cubePull.split(" ")[0]) >= redNeeded) {
          redNeeded = parseInt(cubePull.split(" ")[0]);
        }
      }
      if (cubePull.includes("green")) {
        if (!greenNeeded || parseInt(cubePull.split(" ")[0]) >= greenNeeded) {
          greenNeeded = parseInt(cubePull.split(" ")[0]);
        }
      }
      if (cubePull.includes("blue")) {
        if (!blueNeeded || parseInt(cubePull.split(" ")[0]) >= blueNeeded) {
          blueNeeded = parseInt(cubePull.split(" ")[0]);
        }
      }
    })
    sum += (redNeeded * greenNeeded * blueNeeded);
  });
  return sum;
};

console.log(findPossibleGames());
