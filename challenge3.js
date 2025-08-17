// Your goal is to write a function that removes the first and last characters of a string. You're given one parameter, the original string.
// Important: Your function should handle strings of any length ≥ 2 characters. For strings with exactly 2 characters, return an empty string.

// PSEUDO
// create a function accepting only one parameter of the orginal string
// slice first and last character/element of the string
// retutn string 


function removeChar(str) {
    return str.slice(1, -1);
}
console.log("****CHALLENGE 3********")
console.log(removeChar("hello im kaia"));
console.log(removeChar("hello"));
console.log(removeChar("hi"))
