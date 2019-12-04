/*****************************************************************************************
* purpose :Create a JSON file having Inventory Details for Rice, Pulses and Wheats with properties
 name, weight, price per kg. 
* File   :deckOfCard.js
* Author :PriyankaDas
 ***********************************************************************************************/
class Grocery {
    constructor(name, weight, price) {
        this.name = name;
        this.weight = weight;
        this.price = price;
    }
    total() {
        return this.weight * this.price;
    }
}
class Rice extends Grocery {
    constructor(name, weight, price) {
        super(name, weight, price)
    }
}
class Wheat extends Grocery {
    constructor(name, weight, price) {
        super(name, weight, price)
    }
}
class Pulse extends Grocery {
    constructor(name, weight, price) {
        super(name, weight, price)
    }
}
module.exports = { Rice, Wheat, Pulse }