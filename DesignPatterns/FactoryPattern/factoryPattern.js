/***********************************************************************************************
* @purpose :Demonstrate factory pattern.
* @file     :factoryPattern.js
* @author :PriyankaDas
//**************************************************************************************************/
try {
    let FactoryObjects = require('../FactoryPattern/factoryPatternBL')
    new FactoryObjects.PC().system();
    new FactoryObjects.server().system();
    new FactoryObjects.laptop().system();
} catch (error) {
    console.log(error)
}
