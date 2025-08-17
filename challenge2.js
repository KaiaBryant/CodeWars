// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.
// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

// PSUEDO
// Create a function that accepts two parameters (n for classmatesn, m for pages)
// Return either two conditions 
// 

function paperwork(n, m) {
    return n > 0 && m > 0 ? n * m : 0
}


console.log("****CHALLENGE 2********")
console.log(paperwork(4, 10)); // 40
console.log(paperwork(0, 2)); // 0



