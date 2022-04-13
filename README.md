# Card_Game_War
Welcome to the common card game of war

# Game Basics
At the start of the game you take a full 52 card deck and deal out the cards until no remainder are left.

Each player shuffles their deck with cards facing down.

Players flip the card on top of their deck to verse the opponents.

The player with the higher value card wins the cards played.

If the cards drawn are equal values then WAR happens. Meaning 3 cards get drawn face down and a 4th is drawn and flipped to determine the winner. (If draw again, repeat until winner)

At the end of the first round, both players shuffle the cards won and repeat until a winner.

A winner is declared when a player has all 52 cards.

# Basic User Stories
Here a user explains the rules, setup, how to play and includes a video.

![](https://playingcarddecks.com/blogs/how-to-play/war-game-rules)


# Wireframes
![](https://github.com/Jmajane/Card_Game_War/blob/main/Screen%20Shot%202022-04-06%20at%2011.00.09%20AM.png?raw=true)

# ScreenShots
- initial game screen
![Screen Shot 2022-04-13 at 9 06 11 AM](https://user-images.githubusercontent.com/100162086/163188079-66a5c6dc-4f98-4864-a306-9454a496af6a.png)

- what is happening behind the sceans when war happens
![Screen Shot 2022-04-13 at 9 06 50 AM](https://user-images.githubusercontent.com/100162086/163188113-9112eb5b-ceb7-4fbf-9e1e-328bc8e87132.png)

- how I created the deck and shuffled the cards
![Screen Shot 2022-04-13 at 9 07 23 AM](https://user-images.githubusercontent.com/100162086/163188133-be834efc-2193-4caa-8283-3b2cc373998c.png)

# Technologies Used
- HTML
- CSS
- Javascript
- BootStrap
- Flexbox

# Getting Started
https://jmajane.github.io/Card_Game_War/

# Next Steps
- getting all cards to be displayed during war that are won
- creating a shuffle button so the player can shuffle all hands
- increasing to 4 players (1 player, 3 computers)

# Helpful Links In Creating My Code
- https://www.thatsoftwaredude.com/content/6196/coding-a-card-deck-in-javascript
- https://www.javascript.info/task/shuffle
- https://www.thatsoftwaredude.com/content/6196/coding-a-card-deck-in-javascript

# Pseudocode
- create a variable for player = []
- create a variable for computer =[]

- create values for all 13 cards (mostly Jack, Queen, King, Ace)

- create an array with 13 cards (to start, then add 3 more suits)

- create the start button and its properties(html) 

- create a function to shuffle the array

- create a new array
- make a for loop that iterates over the length of the unshuffled array
- Get a random number up to the length of the array and round down
- Splice that random number out of your old array
- Push the spliced element to your new array
- Outside the loop, have the function return your new array

- create 2 push methods to give 1 card to a player and computer

- console.log both arrays to see the values were pushed

- draw button

- create a function linked to the draw button to take the first item
in the array to be played

- create a function within the above function to compare the cards played
- create draw scenario where 3 cards are drawn and 4th is played
- declare a winner
- have the cards pushed into the winners array

- play again button(resets the game)

# Potential Bugs
- War with less then 3 cards may add more cards to the deck
- War with less then 3 cards should end the game
