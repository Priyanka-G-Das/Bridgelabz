/*************************************************************************************
  purpose :Program ​DeckOfCards.java , to initialize deck of cards having suit
* ("Clubs","Diamonds", "Hearts", "Spades") &
* Rank ("2", "3", "4", "5", "6", "7", "8", "9", "10","Jack", "Queen", "King", "Ace").
* Shuffle the cards using Random method and then distribute 9 Cards to 4 Players.
* Print the Cards the received by the 4 Players using 2D Array
* File :deckOfCard.js
* Author :PriyankaDas
*****************************************************************************************/
const cards = require('../DeckOfCards/deckOfCardsBL');
function deckOfCards() {
    try {
        const suits = ["♥", "♦", "♣", "♠"];
        const values = ["King", "Queen", "Jack", "Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
        var deck = cards.deckOfCards(suits, values);
        /**
        * shuffle deck of cards
        */
        cards.shuffle(deck);
        /**
        * print shuffled deck of cards
        */
        cards.distribute(deck);
    }
    catch (err) {
        console.log(err);
    }
}
deckOfCards();