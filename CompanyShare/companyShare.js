/******************************************* *********************************************
* Purpose : Maintain the List of CompanyShares in a Linked List.
*            So new CompanyShares can be added or removed easily.
* File    :companySharesManage.js
* Author  :priyankadas
* Date    :1-12-2019
***********************************************************************************************/
//@purpose : file system to read and write file
let fs = require('fs');
/** 
*@purpose : import the business logic linked list
*/
let linkedList = require('../CompanyShare/sharesLinkedList');
/** 
*@purpose : To conversation with the user via a console
*/
let prompt = require('prompt-sync');
/**
 * @purpose : Create object of linked list
 */
let list = new linkedList();
/**
 * @purpose : Read the json file.
 */
let data = fs.readFileSync('./companyShare.json')
/**
 * @purpose :JSON.parse() to convert text into a JavaScript object
 */
let companySharesJson = JSON.parse(data);
/**
 * @purpose :Manage the shares linked list
 */
function sharesManage() {
    try {
        let menu = `1. Add new Company
    2. Remove Company
    3. Display
    4. Exit`;
        /**
         * @purpose : Add each json file data to linkedlist
         */
        companySharesJson.forEach(element => {
            list.firstAdd(element.name, Number(element.shares), Number(element.price));
        });
        while (1) {
            console.log(menu);
            let choice = prompt("Enter one option :")
            switch (parseInt(choice)) {
                case 1:
                    let company = prompt("Enter the new company name ")
                    let numberOfshares = prompt("Enter the Number of shares: ");
                    let sharePrice = prompt("Enter the share price: ");
                    list.firstAdd(company, Number(numberOfshares), Number(sharePrice));
                    companySharesJson = list.getData();
                    fs.writeFileSync('./companyShare.json', JSON.stringify(companySharesJson));
                    console.log(companySharesJson);
                    break;
                case 2:
                    console.log(companySharesJson);
                    let deleteCompany = prompt("Enter the company you want to delete : ");
                    let flag = list.delete(deleteCompany);
                    if (flag == true) {
                        console.log("Deleted")
                        companySharesJson = list.getData();
                        fs.writeFileSync('./companyShares.json', JSON.stringify(companySharesJson));
                    } else {
                        console.log("Not found")
                    }
                    break;
                case 3:
                    companySharesJson = list.getData();
                    console.log(companySharesJson);
                    break;
                case 4: process.exit();
                    break;
            }
        }
    }
    catch (err) {
        console.log(err);
    }
}

sharesManage();