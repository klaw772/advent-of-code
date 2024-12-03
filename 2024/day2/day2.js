const fs = require("fs");
const day2 = () => {
  // parse file
  const reports = fs
    .readFileSync("./input.txt", { encoding: "utf8", flag: "r" })
    .split("\n");
  let safeReportsTotal = 0;
  let safeReportsTotalPt2 = 0;
  reports.forEach((report) => {
    let isSafeReport = true;
    let reportData = report.split(" ");
    let isIncreasing = reportData[reportData.length - 1] - reportData[0] > 0;
    if (isIncreasing) {
      for (let i = 0; i < reportData.length - 1; i++) {
        if (
          reportData[i + 1] - reportData[i] < 1 ||
          reportData[i + 1] - reportData[i] > 3
        ) {
          isSafeReport = false;
          break;
        }
      }
    } else {
      for (let i = 0; i < reportData.length - 1; i++) {
        if (
          reportData[i + 1] - reportData[i] > -1 ||
          reportData[i + 1] - reportData[i] < -3
        ) {
          isSafeReport = false;
          break;
        }
      }
    }
    safeReportsTotal = isSafeReport ? safeReportsTotal + 1 : safeReportsTotal;
  });
  console.log("safeReportsTotal part 1", safeReportsTotal);

  reports.forEach((report) => {
    let isSafeReportPt2 = true;
    let permutations = [];

    let reportData = report.split(" ");
    for (let i = 0; i < reportData.length; i++) {
      let slicedArr = reportData.slice(0, i).concat(reportData.slice(i + 1));
      permutations.push(slicedArr);
    }
    permutations.forEach((permutation) => {
      let isIncreasing =
        permutation[permutation.length - 1] - reportData[0] > 0;
      if (isIncreasing) {
        for (let i = 0; i < permutation.length - 1; i++) {
          if (
            permutation[i + 1] - permutation[i] < 1 ||
            permutation[i + 1] - permutation[i] > 3
          ) {
            permutation.push("unsafe");
            isSafeReportPt2 = false;
            break;
          }
        }
      } else {
        for (let i = 0; i < permutation.length - 1; i++) {
          if (
            permutation[i + 1] - permutation[i] > -1 ||
            permutation[i + 1] - permutation[i] < -3
          ) {
            permutation.push("unsafe");
            isSafeReportPt2 = false;
            break;
          }
        }
      }
    });
    // console.log(permutations);
    let filteredPermutations = permutations.filter(
      (permutation) => !permutation.includes("unsafe")
    );
    safeReportsTotalPt2 =
      filteredPermutations.length > 0
        ? safeReportsTotalPt2 + 1
        : safeReportsTotalPt2;
  });
  console.log("safeReportsTotal part 2", safeReportsTotalPt2);
};

day2();
