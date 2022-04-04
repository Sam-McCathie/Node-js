import {writeFileSync} from "fs";

for (let i = 0; i < 10000; i++) {
  writeFileSync("./a-big-file.txt", `hello world ${i}\n`, {flag: "a"});
}

// note {flag: "a"} -> means to append
