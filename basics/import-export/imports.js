// import methods
import {name} from "./exports.js";
import {lastName} from "./exports.js";
import {first, last} from "./exports.js";
import yes from "./exports.js";

// const Hugo = require("./exports-old.js");
// is the same as
import Hugo from "./exports-old.js";

console.log(name);
console.log(lastName);

console.log(yes);

console.log(first);
console.log(first + " " + last);

console.log(Hugo);
