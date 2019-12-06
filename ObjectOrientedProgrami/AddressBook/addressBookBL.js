const input = require("readline-sync")
const fs = require("fs")
//main function that takes in the file as input and calls different functions based upon the user input
exports.addressOperations = (jsonFile) => {
    let N = input.questionInt("press \n '1' to edit book \n '2' to add new book \n '3' to delete book \n '4' to search by name\n'5' to print all books \n :")
    switch (N) {
        case 1:
            editbook(jsonFile);
            break;
        case 2:
            addbook(jsonFile);
            break;
        case 3:
            deletebook(jsonFile);
            break;
        case 4:
            searchById(jsonFile);
            break;
        case 5:
            printFile(jsonFile);
            break
    }
}
// takes in file as input(array) and edits one property of one particular object....
editbook = (jsonFile) => {
    let i = input.questionInt("Enter the index number of the book:")
    let content = input.questionInt("press \n '1' to edit Id \n '2' to edit Language \n '3' to edit Edition \n '4' to edit Author  \n:")
    console.log(jsonFile[i])
    let update = input.question("Enter the new feature:")
    switch (content) {
        case 1:
            jsonFile[i].Id = update;
            break;
        case 2:
            jsonFile[i].Language = update;
            break;
        case 3:
            jsonFile[i].Edition = update;
            break;
        case 4:
            jsonFile[i].Author = update;
            break;
    }
    fs.writeFileSync("../home/user/Bridgelabz/ObjectOrientedPrograming/AddressBook/addressBook.json", JSON.stringify(jsonFile));
    return jsonFile;
}
// adds a new object to the json file
addbook = (jsonFile) => {
    let newbook = {};
    newbook.Id = input.question("Enter Id:")
    newbook.Language = input.question("Enter Language:")
    newbook.Edition = input.question("Enter Edition:")
    newbook.Author = input.question("Enter Author:")
    jsonFile.push(newbook)
    fs.writeFileSync("../", JSON.stringify(jsonFile));
    return jsonFile;
}
// deletes a book in the json file
deletebook = (jsonFile) => {
    let i = input.question("Enter the index number to delete the content:")
    jsonFile.pop(i)
    fs.writeFileSync("../home/user/Bridgelabz/ObjectOrientedPrograming/AddressBook/addressBook.json", JSON.stringify(jsonFile));
    console.log("Delete succsessfully");
    return jsonFile
}

// search the book by the id
searchById = (jsonFile) => {
    let Id = input.question("enter the Id");
    jsonFile.forEach(IdinRecord => {
        if (IdInRecord.Id.includes(Id))
            console.log("IdInRecord");
    });

}
//print the book in json file
printFile = (jsonFile) => {
    jsonFile.forEach(book=> {
        console.log(book);
    })
};
