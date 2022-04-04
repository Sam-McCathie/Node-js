// The event loopis what allows Node.js to perform non-blocking input/output operations - despite the
// fact that Javascript is single-threaded - by offloading operations to the system kernel

// explained -> https://www.youtube.com/watch?v=8aGhZQkoFbQ

/* terms:
    non-blocking: Non-Blocking: It refers to the program that does not block the execution of further 
    operations. Non-Blocking methods are executed asynchronously.

    Asynchronously: program may not necessarily execute line by line.

    single-threaded: one thread == one callstack == one thing at a time

    Call stack: data structure that records where in the program we are.

*/

console.log("first");
setTimeout(() => {
  console.log("second"), 0;
});
console.log("third");

// first
// third
// second

// the timer from setTimeout is handled by the browser webapi
// -> after the timer is complete it is added to the task queue
// -> after the call stack is clear, the first item from the task queue is added to the call stack
// -> the timeout code is then run
