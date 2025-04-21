var num1 = 10;
var num2 = 20;

// Using ternary operator with correct structure
var result = num1 > num2 ? "num1 is greater" : "num2 is greater";
console.log(result);

// Nested ternary operator with correct structure
var comparison = num1 > num2 
    ? (num1 === 10 ? "num1 is 10" : "num1 is greater than num2") 
    : "num2 is greater";
console.log(comparison);
