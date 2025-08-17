// Some people just have a first name; some people have first and last names and some people have first, middle and last names.
// You task is to initialize the middle names (if there is any)

// PSUEDO
// Create a function that take name as a string 
// Then, access the middle name is available 
// I available, take the first letter of each middle name only, remoce the rest and add a (.)
// Return the name 

// split name by the spcae, if length of arrays over 3 take all by first and last slice all but first letter and add a .
// Got stuck figuring out how to access the the first letter of the middle names 

function initializeNames(name) {
    var n = name.split(" ");
    if (n.length < 3) return name;
    for (i = 1; i < n.length - 1; i++) {
        n[i] = n[i][0] + ".";
    }
    return n.join(" ");
}

console.log("****CHALLENGE 4********")
console.log(initializeNames('kaia imani bryant'))
console.log(initializeNames('Brandon Brooklyn Bean Brooks'))
