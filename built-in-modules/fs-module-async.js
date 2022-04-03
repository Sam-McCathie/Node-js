import {readFile, writeFile} from "fs";

// read and create files with aync code.

console.log("start");
readFile("./content/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.error(err);
  }
  const first = result;
  readFile("./content/subfolder/second.txt", "utf-8", (err, result) => {
    if (err) {
      console.error(err);
    }
    const second = result;
    writeFile(
      "./content/subfolder/result-async.txt",
      `Here is the result : ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.error(err);
        }
        console.log("completed");
      }
    );
  });
});
console.log("next task");
