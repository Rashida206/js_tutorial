// Function to parse an integer from a string
function parseIntFromString(value) {
    console.log("Original Value:", value);
    let result = parseInt(value);
    console.log("After parseInt:", result);
    console.log("\n");
  }
  
  // Example Usage for parseInt
  parseIntFromString("100");
  parseIntFromString("200px");
  parseIntFromString("3.75");
  
  // Function to parse a floating-point number from a string
  function parseFloatFromString(value) {
    console.log("Original Value:", value);
    let result = parseFloat(value);
    console.log("After parseFloat:", result);
    console.log("\n");
  }
  
  // Example Usage for parseFloat
  parseFloatFromString("3.14");
  parseFloatFromString("42.5");
  parseFloatFromString("99px");
  