import {readFile, writeFile} from "fs";
import util from "util";

const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

const start = async () => {
  try {
    const first = await readFilePromise("./content/first.txt", "utf-8");
    const second = await readFilePromise(
      "./content/subfolder/second.txt",
      "utf-8"
    );
    await writeFilePromise(
      "./content/subfolder/result-async-2.txt",
      `Combined = ${first}, ${second}`
    );
    console.log(first, second);
  } catch (error) {
    console.error(error);
  }
};

start();

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf-8", (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };

// console.log("start");
// readFile("./content/first.txt", "utf-8", (err, result) => {
//   if (err) {
//     console.error(err);
//   }
//   const first = result;
//   readFile("./content/subfolder/second.txt", "utf-8", (err, result) => {
//     if (err) {
//       console.error(err);
//     }
//     const second = result;
//     writeFile(
//       "./content/subfolder/result-async.txt",
//       `Here is the result : ${first}, ${second}`,
//       (err, result) => {
//         if (err) {
//           console.error(err);
//         }
//         console.log("completed");
//       }
//     );
//   });
// });
// console.log("next task");
