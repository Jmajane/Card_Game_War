let player = [];
let computer = [];
// player & computer will be empty arrays that get random cards pushed into them in a later function


const jack = 11;
const queen = 12;
const king = 13;
const ace = 14;
// making the face cards have a const value of a number so they can be compared to other cards

const cards = [ 2, 3, 4, 5, 6, 7, 8, 9, 10, jack, queen, king, ace]
// console.log(cards)
// face cards show in the array with the const values assigned to them

function start(){
    // button to start the game and deal cards
}

function shuffle(array) {
    array.sort(() => Math.random() - 0.5); // javascript.info/task/shuffle for shuffle function
}
shuffle(cards)
console.log(cards)
// shuffle function works

for (let i = 0; i < cards.length; i = i + 2) {
    player.push(i)
}
console.log(player)

for (let j = 1; j < cards.length; j = j + 2) {
    computer.push(j)       
}
console.log(computer)
