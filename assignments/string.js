// Function to display the length of a string
function displayLength(str) {
    console.log("Original String:", str);
    console.log("Length:", str.length);
    console.log("\n");
  }
  displayLength("Hey, this is Rashida");

  
  // Function to find the index of a specific word within a string
  function findIndexOfWord(str, target) {
    console.log("Original String:", str);
    console.log("Index:", str.indexOf(target));
    console.log("\n");
  }
  findIndexOfWord("Hey, this is Rashida", "Rashida");
  

  // Function to find the last index of a word within a string
  function findLastIndexOfWord(str, target) {
    console.log("Original String:", str);
    console.log("Index:", str.lastIndexOf(target));
    console.log("\n");
  }
  findLastIndexOfWord("Hey, this is Rashida Rashida", "Rashida");
  

  // Function to extract a portion of a string using slice
  function extractSliceOfString(str, start, end) {
    console.log("Original String:", str);
    console.log("After slice:", str.slice(start, end));
    console.log("\n");
  }
  extractSliceOfString("Hey, this is Rashida", 0, 5);
  

  // Function to extract a substring within a string
  function extractSubstringOfString(str, start, end) {
    console.log("Original String:", str);
    console.log("After substring:", str.substring(start, end));
    console.log("\n");
  }
  extractSubstringOfString("Hey, this is Rashida", 0, 5);
  

  // Function to replace a word in a string
  function replaceSubstring(str, target, replacement) {
    console.log("Original String:", str);
    console.log("After replace:", str.replace(target, replacement));
    console.log("\n");
  }
  replaceSubstring("Hey, this is Rashida", "Rashida", "JavaScript");
  

  // Function to split a string based on a separator
  function splitStringBySeparator(str, separator) {
    console.log("Original String:", str);
    console.log("After split:", str.split(separator));
    console.log("\n");
  }
  splitStringBySeparator("Hey, this is Rashida", " ");
  

  // Function to trim excess spaces from a string
  function trimExcessSpaces(str) {
    console.log("Original String:", str);
    console.log("After trim:", str.trim());
    console.log("\n");
  }
  trimExcessSpaces(" Hey, this is Rashida ");
  

  // Function to convert a string to uppercase
  function convertToUppercase(str) {
    console.log("Original String:", str);
    console.log("After toUpperCase:", str.toUpperCase());
    console.log("\n");
  }
  convertToUppercase("Hey, this is Rashida");
  
  
  // Function to convert a string to lowercase
  function convertToLowercase(str) {
    console.log("Original String:", str);
    console.log("After toLowerCase:", str.toLowerCase());
    console.log("\n");
  }
  convertToLowercase("Hey, this is Rashida");
  