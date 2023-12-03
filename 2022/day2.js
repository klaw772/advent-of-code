const { promises: fsPromises } = require("fs");
async function asyncReadFile(filename) {
  try {
    const contents = await fsPromises.readFile(filename, "utf-8");

    let matches = contents.split("\n");
    console.log(matches[0]);
  } catch (err) {
    console.log(err);
  }
}

asyncReadFile("./input-day-2.txt");
