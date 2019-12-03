/******************************************************************************************************
*Purpose : The software to be designed is a program that can be used to maintain an address book. An address book
holds a collection of entries, each recording a person's author,language,edition,author
* File    :companySharesManage.js
* Author  :priyankadas
* Date    :1-12-2019
 *******************************************************************************************************/
try {
    const fs = require('fs')
    const address_Book = require("../AddressBook/addressBookBL")
    let jsonFile = fs.readFileSync("/home/user/Bridgelabz/ObjectOrientedPrograming/AddressBook/addressBook.json")
    const data = JSON.parse(jsonFile)
    address_Book.addressOperations(data)
    console.log(address_Book)
} catch (e) {
    console.log(e.message) 
}
