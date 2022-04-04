import {createReadStream} from "fs";

// data Event Emitter reads files in sets of 65kb
// highwater mark flag will increase or descrease this number
// encoding with convert the bytes to readable text.

const stream = createReadStream("./a-big-file.txt", {
  highWaterMark: 90000,
  encoding: "utf-8",
});

stream.on("data", (result) => {
  console.log(result);
});

stream.on("error", (err) => {
  console.error(err);
});
