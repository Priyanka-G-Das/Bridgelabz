module.exports = {
    unorderedList(stringArray, searchWord) {
        /*
        * create a new object of Linkedlist class
        */
        const list = new linkedList;
        /*
        *add all the array element to the linked list
        */
        for (let i = 0; i < stringArray.length; i++) {
            list.add(stringArray[i]);
        }
        /*
        * This condition checks for adding the item,if item not exists in file
        */
        if (list.search(searchWord) == -1) {
            list.add(searchWord);
            console.log("Added successfully..\n");
        }
        /*
        * This condition checks for removing the item,if item already exists in file
        */
        else {
            list.remove(searchWord);
            console.log("Removed successfully....\n");
        }
        /**
         * write operation to save updated list into the file.
         */
        const dataWrite = list.show();
        writeToFile("./StringList.txt", dataWrite);
    }
}
class Node {
    constructor(searchWord) {
        this.searchWord = searchWord;
        this.next = null;
    }
}
/**
 *  creating class linkedlist which will create new nodes and perform operation like 
 *  add,remove,insertAt,insertFrom.
 */
class linkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    add(searchWord) {
        /**
         * creating a new node
         */
        const node = new Node(searchWord);
        /**
         * to store current node 
         **/
        const  current;
        /**
         * if list is empty add an searchWord and make it head. 
         **/
        if (this.head == null) {
            this.head = node;
        }
        else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }

    /* 
    * remove the string or searchWord,if it already exists
    */
    remove(searchWord) {
    const  current = this.head;
        const  previous = null;
        while (current != null) {
            if (current.searchWord === searchWord) {
                if (previous == null) {         //if first element is the searchword
                    this.head = current.next;   // the saerchword will be removed and head will be the next element
                }
                /*it works when the search element is not at the first.
                *so the previos node store the reference of next node.
                */
                else {
                    previous.next = current.next;
                }
                this.size--;  //size decremented
                return current.searchWord;
            }
            //if search word not found
            previous = current;
            current = current.next;
        }
        return -1;
    }
    /*
    * checks the search word already present or not
    */
    search(searchWord) {
        const count = 0;
        const  current = this.head;
        while (current != null) {
            if (current.searchWord === searchWord) {
                return count; //if item found it will return 1
            }
            count++;
            current = current.next;
        }
        return -1; //item not found it will return -1
    }

    show() {
        /**
         * print the given list after performing changes.
         */
        const  current = this.head;
        const string = "";
        while (current) {
            string += current.searchWord + " ";
            current = current.next;
        }
        console.log(string);
        return string;
    }
}

function writeToFile(fileName, data) {
    const fs = require('fs');
    /*
    * it is used to access the file  system module
    *fs.writefile() write the data in specified file if does not found it will create the file
    */
    fs.writeFile(fileName, data, function (err) {     //this function write the data in file
        if (err) {
            return console.log(err); //error 
        }
    });
}