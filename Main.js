let player = [];
let computer = [];
let playersCard = [];
let computersCard = [];
let playerOne = document.querySelector(".player-one")
let computerOne = document.querySelector(".computer-one")
let countCompCards = document.querySelector(".computer-cards")
let countPlayerCards = document.querySelector(".player-cards")
// player & computer will be empty arrays that get random cards pushed into them in a later function

let display = document.querySelector(".winner")
let startButton = document.querySelector(".start")
let drawButton = document.querySelector(".deal")
let playAgainButton = document.querySelector(".play-again")

let activeGame = true;
let activeWar = false;

const jack = 11;
const queen = 12;
const king = 13;
const ace = 14;
// making the face cards have a const value of a number so they can be compared to other cards

let cards = [ 2, 3, 4, 5, 6, 7, 8, 9, 10, jack, queen, king, ace, 2, 3 , 4, 5, 6, 7, 8, 9]

// console.log(cards)
// face cards show in the array with the const values assigned to them
startButton.addEventListener('click', () => {
    initializeGame()
    display.innerHTML = "Play by clicking draw"
})

function initializeGame() {
    shuffle(cards)
}

playAgainButton.addEventListener('click', () => {
    reset()      
    initializeGame()
})
// button to start the game and deal cards

function shuffle(array) {
    array.sort(() => Math.random() - 0.5); // javascript.info/task/shuffle for shuffle function
    for (let i = 0; i <= cards.length; i++) {
        let randomCard = cards.splice(11, 21)
        player.push(randomCard)
        player = player.flat()
    }
    console.log(player)
    for (let i = 0; i <= cards.length; i++) {
            let randomCard = cards.splice(0, 10)
            computer.push(randomCard)
            computer = computer.flat()
    }
    console.log(computer)
}
// console.log(cards)
// shuffle function works


// // the for loop is going through the array of cards
// // splice opens the card array, we then pick a spot in the array and pick a desired amount after that
// // we then push the cards into the player array and use flat to make one array


drawButton.addEventListener('click', () => {
    if (player.length > 0 && computer.length > 0) {
        challenge()
    } else {
        winner()
        playerOne.innerHTML = "Game Over"
        computerOne.innerHTML = "Game Over"
    }
    for (let i = 0; i <= computer.length; i++) {
        countCompCards.innerHTML = `Computer has ${[i]} cards`
    }
    for (let j = 0; j <= player.length; j++) {   
        countPlayerCards.innerHTML = `Player has ${[j]} cards`
    }
    //     // action button to draw a card
})

function challenge() {
    drawCards()
    compareCards()
    // we are grabbing the first card in both arrays and comparing to one another
    return
}

function drawCards() {
    playersCard = player.shift(0)
    playerOne.innerHTML = playersCard
    computersCard = computer.shift(0)
    computerOne.innerHTML = computersCard      
}

function compareCards() {
    if (playersCard > computersCard) {
        player.push(playersCard)
        player.push(computersCard)
        if (activeWar) {
            player.push(cardStack)
            player = player.flat()
            activeWar = false
        }
        console.log(player)
        display.innerHTML = "The Player Won!"
    } else if (playersCard < computersCard) {
        computer.push(playersCard)
        computer.push(computersCard)
        if (activeWar) {
            computer.push(cardStack)
            computer = computer.flat()
            activeWar = false;
        }
        console.log(computer)
        display.innerHTML = "The Computer Wins"
        } else if (playersCard === computersCard) {
            cardStack.push(playersCard)
            cardStack.push(computersCard)
            war()
    } else {
        return
    }
}

function winner() {
    if (player.length === 0 || player.length < 3) {
            display.innerHTML = "The Computer Has Beat You"
    } else if (computer.length === 0 || computer.length < 3) {
            display.innerHTML = "You Beat the COMPUTER"
    } else {
        return
    }
}

function reset() {
    for (let i = 0; i <= player.length; i++) {
        let randomCard = player.splice(0, 52)
        cards.push(randomCard)
        cards = cards.flat()
    }
    // console.log(player)
    for (let i = 0; i <= computer.length; i++) {
        let randomCard = computer.splice(0, 52)
        cards.push(randomCard)
        cards = cards.flat()
    }
}
            

let cardStack = []
function war() {
    activeWar = true;
    if (player.length > 3 && computer.length > 3) {
        cardStack.push(player.splice(0, 3))
        cardStack.push(computer.splice(0, 3))
        cardStack = cardStack.flat()
        console.log(cardStack)
    drawCards()
    compareCards()
    cardStack = []
    } else {
        winner()
    }
    return
}

