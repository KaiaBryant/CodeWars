// Terminal game move function
// In this game, the hero moves from left to right. The player rolls the die and moves the number of spaces indicated by the die two times.
// Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.
// EXAMPLE: move(3, 6) should equal 15

//PSUEDO
// 1) Create a function that takes two arguments of the position and the dice (1-6) 
// 2) Return position + dice * 2

function move(position, dice) {
    return position + dice * 2;
}


console.log("****CHALLENGE 1********")
console.log(move(2, 3)); // 8
