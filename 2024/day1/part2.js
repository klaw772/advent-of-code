// parse file
// sort right list
// set temp variable for right list index tracker
// iterate through left list while keeping track in right list if next index exists and is larger than value in left list

const fs = require("fs");
const _ = require("lodash");
const calculateSimilarityScore = () => {
  // parse file
  // split each line into small array of 2
  const data = fs
    .readFileSync("./input.txt", { encoding: "utf8", flag: "r" })
    .split("\n");
  let list1 = [];
  let list2 = [];
  // set similarity score sum
  let similarityScore = 0;
  data.forEach((items) => {
    items = items.split("   ");
    // put first index into array 1 and second index into array 2
    list1.push(items[0]);
    list2.push(Number(items[1]));
  });
  // get counts of all items in right list
  let list2Counts = _.countBy(list2);
  list1.forEach((item) => {
    let multiplier = list2Counts[item] || 0;
    similarityScore += item * multiplier;
  });
  return similarityScore;
};

console.log(calculateSimilarityScore());
