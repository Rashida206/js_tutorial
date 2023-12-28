//Printing text or numbers in JS
console.log("hello world")
console.log(3+3)
document.write('This text will be displayed on the page.');
document.getElementById('elementId').innerHTML = 'New content here';
window.alert('This is an alert message!');
let n = prompt('Enter your name:');
console.log('Hello, ' + n);
 





// The "JS Console API" typically refers to the console object available in JavaScript within web browsers like Chrome, Firefox, and others. This console object provides developers with a set of methods to interact with the browser's debugging console.
// Common methods of the console object include:
let x="Hey there"
let e ="this is an error"
let w ="warning"
let a = 5;
console.log(x); //Outputs a message to the console.
console.error(e); //Outputs an error message to the console.
console.clear(); //Clears the console.
console.warn(w); //Outputs a warning message to the console.
console.info(x); //Outputs an informational message to the console.
console.assert(a === 4, 'Value of a is not 4'); //log an error message to the console if a given expression evaluates to false. If the assertion is true, nothing will happen.



// Primitive Data Types
let number = 10; // Number: Represents numeric values, including integers and floating-point numbers
let text = 'Hello, world!'; // String: Represents textual data, enclosed in single or double quotes
let isTrue = true; // Boolean: Represents logical values - true or false
let emptyValue = null; // Null: Represents the intentional absence of any object value
let undefinedValue; // Undefined: Represents a variable declared but not assigned any value

// Composite Data Types
let person = { // Object: Represents a collection of key-value pairs
    name: 'Rashida',
    age: 20,
    isStudent: false
};
let numbersArray = [1, 2, 3, 4, 5]; // Array: Represents a collection of elements, indexed by integers
let fruitsArray = ['apple', 'banana', 'orange'];
// Special Data Type
let uniqueSymbol = Symbol('description'); // Symbol: Represents a unique and immutable value, often used as an identifier for object properties




//declaring variables in JS
// Using var (Function-scoped or Globally-scoped)
var xy = 10;

// Using let (Block-scoped)
let ab = 5;

// Using const (Block-scoped Constant)
const PI = 3.14159;
