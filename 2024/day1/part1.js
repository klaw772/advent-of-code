const fs = require("fs");
const listDifferences = () => {
  // parse file
  // split each line into small array of 2
  const data = fs
    .readFileSync("./input.txt", { encoding: "utf8", flag: "r" })
    .split("\n");
  let list1 = [];
  let list2 = [];
  let sum = 0;
  data.forEach((items) => {
    items = items.split("   ");
    // put first index into array 1 and second index into array 2
    list1.push(Number(items[0]));
    list2.push(Number(items[1]));
  });
  // sort array 1 and array 2
  list1 = list1.sort();
  list2 = list2.sort();
  // iterate through array1 length and add the difference between the items at each array's index
  // bc arrays are now sorted in ascending order
  for (let i = 0; i < list1.length; i++) {
    sum += Math.abs(list1[i] - list2[i]);
  }
  return sum;
};

console.log(listDifferences());
