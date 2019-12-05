/************************************************************************************ 
* @Execution : default node : cmd> stock.js
* @description :calculate the value of each stock and total value
* @overview : To print the stock report
* @author : Priyankadas
* @version : 1.0
* @since : 4/12/2019
******************************************************************************************/
try {
const stock = require('../StockAccountmanagement/stockAccountManagementBL')
let obj = new stock.stock_mgt()
obj.jsonParse('/home/user/Bridgelabz/ObjectOrientedPrograming/StockAccountmanagement/StockAccountManagement.json')
obj.value()
} catch (e) {
console.log(e.message)
}