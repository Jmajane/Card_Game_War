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
// button to start the game, create the deck, shuffle and deal cards


playAgainButton.addEventListener('click', () => {
    reset()      
    initializeGame()
    console.log(player)
    console.log(computer)
    playerOne.innerHTML = "Start"
    computerOne.innerHTML = "Start"
})
// this but will reset the game board, delete the old deck and create a new one.
// this then follows the order of the start button

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
})
// action button to draw a card, goes to the function challenge(), to then drawCards() / compareCards()


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
    return deck;
}
let deck = getDeck()
// console.log(getDeck())
// getDeck() creates a new array of 52 cards using the arrays of suits & cards

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
// the for loop is going through the array of cards
// splice opens the card array, we then pick a spot in the array and pick a desired amount after that
// we then push the cards into the player array and use flat to make one array


function challenge() {
    drawCards()
    compareCards()
    // we are grabbing the first card in both arrays and comparing to one another
    return
}


function drawCards() {
    playerOne.classList.remove("clubs") // first we need to remove any previously added class, 
    playerOne.classList.remove("diamonds") // this makes it possible for CSS to add the correct suit
    playerOne.classList.remove("spades")  // to the card being played
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


// when comparing cards, they get pushed to a seperate array, the winner then gets both cards
// pushed into the end of their array

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


// if a player has 0 cards they lose
// if a player has <= 3 going into a war they will lose due to not having enough cards to play the war
function winner() {
    if (player.length === 0 || player.length <= 3) {
            display.innerHTML = "The Computer Has Beat You"
    } else if (computer.length === 0 || computer.length <= 3) {
            display.innerHTML = "You Beat the COMPUTER"
    } else {
        return
    }
}

// reset will empty all arrays
// reset will then create a new deck to be dealt to the players
function reset() {
    player = []
    computer = []
    playersCard = []
    computersCard = []
    deck = getDeck()
}


// war takes 3 cards from both players putting them into the cardStack array
// the winner gets all cards pushed to their decks
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




            


