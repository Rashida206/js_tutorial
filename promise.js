// What are Promises?
// Promises are objects representing the eventual completion or failure of an asynchronous operation. They allow you to write asynchronous code in a more manageable and readable way, avoiding the "callback hell" that can occur with nested callbacks.

// Creating a Promise
// You can create a new promise using the Promise constructor, which takes a function as an argument with two parameters: resolve and reject.




const myPromise = new Promise((resolve, reject) => {
  // Perform an asynchronous operation
  // If successful, call resolve(value)
  // If an error occurs, call reject(error)
});

//Basic code demo
let promise = new Promise(function(resolve, reject) {
    alert("Hello")
    resolve(56)
})

console.log("Hello One")
setTimeout(function() {
    console.log("Hello Two in 2 seconds")
}, 2000)

console.log("My name is " + "Hello Three")
console.log(promise)


// **Promise States**
// - Pending: Initial state, neither fulfilled nor rejected.
// - Fulfilled: The operation completed successfully.
// - Rejected: The operation failed.

// Handling Promises
// 1. .then() and .catch()
// .then() is used to handle the fulfilled state.
// .catch() is used to handle any errors that occur during the promise chain.

myPromise
  .then((result) => {
    // Handle successful operation
  })
  .catch((error) => {
    // Handle errors
  });




//   2. Chaining Promises
//   Promises can be chained together using .then().
  
myPromise
    .then((result) => {
      // Process the result
      return anotherAsyncOperation(result);
    })
    .then((newResult) => {
      // Handle the new result
    })
    .catch((error) => {
      // Handle any errors in the chain
    });