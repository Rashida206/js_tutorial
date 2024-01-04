// Function to add an element to the end of an array
function addToEndOfArray(arr, element) {
    console.log("Original Array:", arr);
    arr.push(element);
    console.log("After push:", arr);
    console.log("\n");
  }
  addToEndOfArray(["apple", "banana", "orange"], "grape");
  

  // Function to remove the last element from an array
  function removeFromEndOfArray(arr) {
    console.log("Original Array:", arr);
    arr.pop();
    console.log("After pop:", arr);
    console.log("\n");
  }
  removeFromEndOfArray(["apple", "banana", "orange"]);
  

  // Function to remove the first element from an array
  function removeFromStartOfArray(arr) {
    console.log("Original Array:", arr);
    arr.shift();
    console.log("After shift:", arr);
    console.log("\n");
  }
  removeFromStartOfArray(["apple", "banana", "orange"]);
  

  // Function to add an element to the beginning of an array
  function addToStartOfArray(arr, element) {
    console.log("Original Array:", arr);
    arr.unshift(element);
    console.log("After unshift:", arr);
    console.log("\n");
  }
  addToStartOfArray(["banana", "orange"], "apple");
  

  // Function to concatenate two arrays
  function concatenateArrays(arr1, arr2) {
    console.log("Original Arrays:", arr1, arr2);
    let arr3 = arr1.concat(arr2);
    console.log("After concat:", arr3);
    console.log("\n");
  }
  concatenateArrays(["apple", "banana"], ["orange", "grape"]);
  

  // Function to loop through each element in an array
  function forEachElement(arr) {
    console.log("Original Array:", arr);
    arr.forEach(function(item, index) {
      console.log(item, index);
    });
    console.log("\n");
  }
  forEachElement(["apple", "banana", "orange"]);
  

  // Function to create a new array by doubling each element of the original array
  function doubleEachElement(arr) {
    console.log("Original Array:", arr);
    let newArr = arr.map(function(item) {
      return item + item;
    });
    console.log("After map:", newArr);
    console.log("\n");
  }
  doubleEachElement(["apple", "banana", "orange"]);
  

  // Function to filter elements greater than 3 from an array
  function filterElementsGreaterThanThree(arr) {
    console.log("Original Array:", arr);
    let newArr = arr.filter(function(item) {
      return item.length > 6;
    });
    console.log("After filter:", newArr);
    console.log("\n");
  }
  filterElementsGreaterThanThree(["apple", "banana", "orange"]);
  

  // Function to find the first element greater than 3 in an array
  function findFirstElementGreaterThanThree(arr) {
    console.log("Original Array:", arr);
    let found = arr.find(function(item) {
      return item.length > 6;
    });
    console.log("After find:", found);
    console.log("\n");
  }
  findFirstElementGreaterThanThree(["apple", "banana", "orange"]);
  
  
  // Function to sort elements in an array
  function sortArray(arr) {
    console.log("Original Array:", arr);
    arr.sort();
    console.log("After sort:", arr);
    console.log("\n");
  }
  sortArray(["banana", "apple", "orange"]);
  