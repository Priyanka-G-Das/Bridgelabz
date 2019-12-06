var deck = new Array();
/*
* @description : deckOfCard
* @purpose: it accepts suits and values and creating deck of cards using array
*/
/**
* @purpose :Add suites and values to one array
* @param(suites,values)
*/
module.exports.deckOfCards = (suits, values) => {
    try {
        for (let i = 0; i < suits.length; i++) {
            for (let j = 0; j < values.length; j++) {
                deck.push(values[j] + " " + suits[i]);
            }
        }
        return (deck);
    }
    catch (err) {
        console.log(err);
    }
}
/**
* @purpose : it shuffles deck of cards using random .
*/
module.exports.shuffle = (deck) => {
    try {
        let n = deck.length;
        for (let i = 0; i < n; i++) {
            let r = i + parseInt(Math.random() * (n - i));
            /**
            * swapping
            */
            let temp = deck[r];
            deck[r] = deck[i];
            deck[i] = temp;
        }
    }
    catch (err) {
        console.log(err);
    }
}
/**
* @purpose :To distribute for four players
*/
module.exports.distribute = (deck) => {
    try {
        let players = [[], [], [], []];
        let start = 0, end = 9;
        for (let i = 0; i < 4; i++) {
            /**
            * @purpose : Distribute cards for each player
            */
            for (let j = start; j < end; j++) {
                players[i].push(deck[j]);
            }
            start = start + 9;
            end = end + 9;
        }
        console.log(players); //Print the distributed cards for 4 player
    }
    catch (err) {
        console.log(err);
    }
}