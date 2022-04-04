import EventEmitter from "events";

const customEmitter = new EventEmitter();

// listen for event
customEmitter.on("response", (name, id) => {
  console.log(`data recieved from ${name} : ${id}.`);
});

customEmitter.on("response", () => {
  console.log("more logic here");
});

// emit event
customEmitter.emit("response", "Sammy", 26);
