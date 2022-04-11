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

const J = 11;
const Q = 12;
const K = 13;
const A = 14;
// making the face cards have a const value of a number so they can be compared to other cards
let suits = ["spades", "diamonds", "clubs", "hearts"];
let cards = [ '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']

// console.log(cards)
// face cards show in the array with the const values assigned to them

startButton.addEventListener('click', () => {
    initializeGame()
    display.innerHTML = "Play by clicking draw"
})
// button to start the game and deal cards


playAgainButton.addEventListener('click', () => {
    reset()      
    initializeGame()
    console.log(player)
    console.log(computer)
    playerOne.innerHTML = "Start"
    computerOne.innerHTML = "Start"
})


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


function initializeGame() {
    shuffle(deck)
}


function getDeck() {  // https://www.thatsoftwaredude.com/content/6196/coding-a-card-deck-in-javascript
	let deck = new Array();
    for(let i = 0; i < suits.length; i++) {
		for(let j = 0; j < cards.length; j++)  {
			let card = {Value: cards[j], Suit: suits[i]};
			deck.push(card);
       
		}
	}
    // renderDeck(deck)
    return deck;
}
let deck = getDeck()
// console.log(getDeck())


function shuffle(deck) {
    deck.sort(() => Math.random() - 0.5); // javascript.info/task/shuffle for shuffle function
    for (let i = 0; i <= deck.length; i++) {
        let randomCard = deck.splice(26, 26)
        player.push(randomCard)
        player = player.flat()
    }
    // console.log(player)
    for (let i = 0; i <= deck.length; i++) {
            let randomCard = deck.splice(0, 26)
            computer.push(randomCard)
            computer = computer.flat()
    }
    // console.log(computer)
}
// console.log(cards)
// shuffle function works

// // the for loop is going through the array of cards
// // splice opens the card array, we then pick a spot in the array and pick a desired amount after that
// // we then push the cards into the player array and use flat to make one array


function challenge() {
    drawCards()
    compareCards()
    // we are grabbing the first card in both arrays and comparing to one another
    return
}


function drawCards() {
    playerOne.classList.remove("clubs")
    playerOne.classList.remove("diamonds")
    playerOne.classList.remove("spades")
    playerOne.classList.remove("hearts")
    computerOne.classList.remove("clubs")
    computerOne.classList.remove("diamonds")
    computerOne.classList.remove("spades")
    computerOne.classList.remove("hearts")
    playersCard[0] = player.shift([0])
    // console.log(playersCard)
    playerOne.innerHTML = playersCard[0].Value
    playerOne.classList.add("suit")
    playerOne.classList.add(playersCard[0].Suit)
    // console.log(playerOne.classList)
    computersCard[0] = computer.shift([0])
    computerOne.innerHTML = computersCard[0].Value      
    computerOne.classList.add("suit")
    computerOne.classList.add(computersCard[0].Suit)
}



function compareCards() {
    if (playersCard[0].Value > computersCard[0].Value) {
        player.push(playersCard[0])
        player.push(computersCard[0])
        if (activeWar) {
            player.push(cardStack)
            player = player.flat()
            activeWar = false
        }
        // console.log(player)
        display.innerHTML = "The Player Won!"
    } else if (playersCard[0].Value < computersCard[0].Value) {
        computer.push(playersCard[0])
        computer.push(computersCard[0])
        if (activeWar) {
            computer.push(cardStack)
            computer = computer.flat()
            activeWar = false;
        }
        // console.log(computer)
        display.innerHTML = "The Computer Wins"
        } else if (playersCard[0].Value === computersCard[0].Value) {
            cardStack.push(playersCard[0])
            cardStack.push(computersCard[0])
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
    player = []
    computer = []
    playersCard = []
    computersCard = []
    deck = getDeck()
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




            


