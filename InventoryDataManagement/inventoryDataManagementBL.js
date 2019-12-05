/**********************************************************************************************
* Purpose : Create a JSON file having Inventory Details for Rice, 
*           Pulses and Wheats with properties name, weight, price per kg.
*           Calculate the value for every Inventory.
* File    : inventoryDataManagement.js
* Author  : Priyankadas
* Date    : 12-11-2019
***********************************************************************************************/
let prompt  = require('prompt-sync');//node-module prompt-sync
let util = require('./grocery')
let fs = require('fs');
try {
    let data = fs.readFileSync('/home/user/Bridgelabz/ObjectOrientedPrograming/InventoryDataManagement/inventoryDataManagement.json'); //read file from json
    /*
    * function JSON.parse() is used to convert the string into a JavaScript Objects
    */
    let jsonInventory = JSON.parse(data);
    console.log("Json file data", jsonInventory);
    console.log("*****Rice Items******");
    let riceLength = jsonInventory.Rice.length;
    for (let i = 0; i < riceLength; i++) {
        let name = jsonInventory.Rice[i].name;
        let weight = jsonInventory.Rice[i].weight;
        let price = jsonInventory.Rice[i].price;
        console.log("Name : " + name + "\nTotal Weight: " + weight + "\nPrice /Kg : " + price)
        let rice = new util.Rice(name, weight, price)
        let total = rice.total();
        console.log("Total price of rice : " + total + "Rs");
    }
    let wheatLength = jsonInventory.Wheats.length;
    console.log("*****Wheat Items******");
    for (let i = 0; i < wheatLength; i++) {
        let name = jsonInventory.Wheats[i].name;
        let weight = jsonInventory.Wheats[i].weight;
        let price = jsonInventory.Wheats[i].price;
        console.log("Name : " + name + "\nTotal Weight: " + weight + "\nPrice /Kg : " + price)
        let wheat = new util.Wheat(name, weight, price);
        let total = wheat.total();
        console.log("Total value of wheats : " + total + "Rs");
    }
    let pulsesLength = jsonInventory.Pulses.length;
    console.log("*****Pulses Items******");
    for (let i = 0; i < pulsesLength; i++) {
        let name = jsonInventory.Pulses[i].name;
        let weight = jsonInventory.Pulses[i].weight;
        let price = jsonInventory.Pulses[i].price;
        console.log("Name : " + name + "\nTotal Weight: " + weight + "\nPrice /Kg : " + price)
        let pulses = new util.Pulses(name, weight, price);
        let total = pulses.total();
        console.log("Total value of pulses : " + total + "Rs");
    }
}
catch (err) {
    console.log(err);
}