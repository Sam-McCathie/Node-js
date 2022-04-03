import os from "os";

// info about current user.
const user = os.userInfo();
console.log(user);

// method returns system uptime in seconds
console.log(`The system uptime is ${os.uptime() / 60 / 60} minutes`);

const currentOs = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};
console.log(currentOs);
