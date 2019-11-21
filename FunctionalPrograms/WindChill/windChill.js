/************************************************************************** 
 *  purpose  :  Program to find WindChill using formula W=35.74+0.6215*t+(0.4275*t+ 35.75)*Math.pow(v,0.16)
 *  Author   :  Priyankadas
 *  File     :  Wibdchill.js
 *  since    : 16/11/2019
 ****************************************************************************************/
const take = require('./WindChillBL')
const read = require('readline-sync')
const t = read.question("enter the temprature");
const v = read.question("enter the speed");
take.WindChill(t, v);