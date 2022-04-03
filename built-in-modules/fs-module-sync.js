import {readFileSync, writeFileSync} from "fs";

//outputs value to console
const first = readFileSync("./content/first.txt", "utf-8");
console.log(first);

const second = readFileSync("./content/subfolder/second.txt", "utf-8");
console.log(second);

// if file doesn't exist will create one.
// if file does exist will override it.
writeFileSync(
  "./content/subfolder/result-sync.txt",
  `Here is the result of both first and second files: ${first}, ${second}`
);

// read file created
const combine = readFileSync("./content/subfolder/result-sync.txt", "utf-8");
console.log(combine);
