//Given an array of Boolean values and a logical operator, return a Boolean result based on sequentially applying the operator to the values in the array.
// an array of Boolean values (1 <= array_length <= 50)
// a string specifying a logical operator: "AND", "OR", "XOR"


// PSUEDO 
// 1. Create function that takes two arguemnts of array and operator
// 2. 

function logicalCalc(array, op) {
    var result = array[0];
    for (var i = 1; i < array.length; i++) {
        if (op == "AND") {
            result = result && array[i];
        }
        if (op == "OR") {
            result = result || array[i];
        }
        if (op == "XOR") {
            result = result != array[i];
        }
    }
    return result;
}

console.log("****CHALLENGE 6********")
