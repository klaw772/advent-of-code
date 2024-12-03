const fs = require("fs");
const { indexOf } = require("lodash");
const day3 = () => {
  const computerMemory = fs.readFileSync("./input.txt", {
    encoding: "utf8",
    flag: "r",
  });
  const mulRegexPattern = /mul\((\d+),(\d+)\)/g;
  const matchesPt1 = computerMemory.matchAll(mulRegexPattern);
  let sumOfMatchesPt1 = 0;
  for (const match of matchesPt1) {
    sumOfMatchesPt1 += match[1] * match[2];
  }
  console.log("part 1 sum of matches: ", sumOfMatchesPt1);

  const firstMulPattern = /[\s\S](.*?)don't\(\)/g;
  const doRegexPattern = /(?:do)\(\)(.*?)(?:don't\(\))/g;
  const lastMulPattern = /do\(\)(?:.*?)$/g;
  const firstEnabledMul = computerMemory.match(firstMulPattern)[0];
  let stringsToMultiply = [];

  // gets first matching set of muls before first dont
  stringsToMultiply.push(firstEnabledMul);

  // gets other matching sets of muls in between dos and donts
  const matchesPt2 = computerMemory.matchAll(doRegexPattern);
  for (const match of matchesPt2) {
    stringsToMultiply.push(match[0]);
  }

  //gets the first do after the last dont
  const indexToBeginLastDont =
    computerMemory.indexOf(stringsToMultiply[stringsToMultiply.length - 1]) +
    stringsToMultiply[stringsToMultiply.length - 1].length;

  const last = computerMemory.substring(indexToBeginLastDont);
  stringsToMultiply.push(last.match(lastMulPattern));

  let sumOfMatchesPt2 = 0;
  stringsToMultiply.forEach((string) => {
    let temp = String(string).matchAll(mulRegexPattern);
    temp.forEach((match) => {
      sumOfMatchesPt2 += match[1] * match[2];
    });
  });

  console.log("sum of matches pt 2: ", sumOfMatchesPt2);
};

day3();
