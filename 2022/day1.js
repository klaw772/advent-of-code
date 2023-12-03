const { promises: fsPromises } = require("fs");
async function asyncReadFile(filename) {
  try {
    const contents = await fsPromises.readFile(filename, "utf-8");

    let elvesArray = contents.split("\n\n");
    let elvesArrayWithArrays = elvesArray.map((elf) =>
      elf.split("\n").map(Number)
    );
    elvesArrayWithSummedArrays = elvesArrayWithArrays.map((elvesArray) =>
      elvesArray.reduce((acc, value) => acc + value, 0)
    );
    const max = elvesArrayWithSummedArrays.reduce(
      (a, b) => Math.max(a, b),
      -Infinity
    );
    elvesArrayWithSummedArrays.splice(49, 1);
    const max2 = elvesArrayWithSummedArrays.reduce(
      (a, b) => Math.max(a, b),
      -Infinity
    );
    elvesArrayWithSummedArrays.splice(167, 1);
    const max3 = elvesArrayWithSummedArrays.reduce(
      (a, b) => Math.max(a, b),
      -Infinity
    );
    console.log(max + max2 + max3);
  } catch (err) {
    console.log(err);
  }
}

asyncReadFile("./input.txt");
