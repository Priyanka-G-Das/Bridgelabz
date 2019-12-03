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
