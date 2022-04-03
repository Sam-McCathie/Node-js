// module = a file that exports it's own code.

// different export methods

//  name export
export const name = "Sam";

// default export
export default "yes";

// rename export
const lName = "McCathie";
export {lName as lastName};

// export list + rename
const name2 = "Acacia";
const last = "Moore";
export {name2 as first, last};
