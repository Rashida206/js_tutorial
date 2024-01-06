// Imagine you have tasks that take time, like cooking or waiting for a delivery. Async/await is like having a helper who waits for these tasks to finish before moving on to the next thing.

// async is like asking the helper to manage tasks that take time.
// await is like telling the helper to wait for a task to finish before moving to the next one.
// For example:


async function makeDinner() {
  // The helper starts cooking and waits until it's done
  const veggies = await chopVegetables();
  const chicken = await cookChicken();

  // The helper waits for both tasks to finish before serving
  serveMeal(veggies, chicken);
}
// So, async helps the code handle tasks that take time, and await helps it wait for those tasks to finish before moving on, making everything run more smoothly.



// async/await is a syntactical enhancement in JavaScript that allows you to write asynchronous code in a more synchronous style. It's built on top of promises and provides a cleaner and more readable way to work with asynchronous operations.

// **ASYNC FUNCTION**
// The async keyword is used to define an asynchronous function. It ensures that the function returns a promise implicitly and allows the use of await within the function.

async function myAsyncFunction() {
  // Asynchronous operations using await
}


// **AWAIT KEYWORD**
// The await keyword is used inside an async function to pause the execution and wait for a promise to resolve. It can only be used inside an async function.


async function myAsyncFunction() {
  const result = await someAsyncOperation();
  // Code here will wait until someAsyncOperation() completes
  return result;
}
// **Handling Errors with try/catch**
// You can use try/catch blocks to handle errors when using await. Errors thrown by an awaited promise can be caught using try/catch.


async function myAsyncFunction() {
  try {
    const result = await someAsyncOperation();
    return result;
  } catch (error) {
    // Handle errors here
  }
}

//CODE EXAMPLE

// Simulated asynchronous function that resolves after a delay
function simulateAsyncAPI(success) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (success) {
          resolve('Operation completed successfully!');
        } else {
          reject('Operation failed!');
        }
      }, 2000);
    });
  }
  
  // Using async/await
  async function myAsyncFunction() {
    try {
      const result = await simulateAsyncAPI(true);
      console.log(result); // Output: Operation completed successfully!
      return 'New result';
    } catch (error) {
      console.error(error); // Handle errors
    }
  }
  
  // Call the async function
  myAsyncFunction().then((newResult) => {
    console.log(newResult); // Output: New result
  });
  
