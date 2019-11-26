module.exports = {
    orderedList(fileData, searchNumber) {
        /*
        *
        */
        const fileDataArray = fileData.toString().split(' ');
        const  numbersArray = new Array();
        for (let i = 0; i < fileDataArray.length; i++) {
            numbersArray.push(fileDataArray[i]);
        }
        /*
        * create a new object of Linkedlist class
        */
        const list = new linkedList;
        /*
        Before inserting linked list sort the array 
        */
        numbersArray = numbersArray.sort(function (a, b) {
            return a - b;
        });
        console.log("Sorted array: " + numbersArray);
        /*
        *add all the numbers array element to the linked list
        */
        for (let i = 0; i < numbersArray.length; i++) {
            list.add(numbersArray[i]);
        }
        list.show();
        if (list.search(searchNumber) == -1) {
            list.add(searchNumber);
            console.log("Added successfully..\n");
        }
        /*
        * This condition checks for removing the item,if item already exists in file
        */
        else {
            list.removeSearchNumber(searchNumber);
            console.log("Removed successfully....\n");
        }
        /**
        * write operation to save updated list into the file.
        */
        const dataWrite = list.show();
        writeToFile("./NumberList.txt", dataWrite);
    }
}
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class linkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    add(searchNumber) {
        /**
         * creating a new node
         */
        const node = new Node(searchNumber);

        /**
         * if list is empty add an searchNumber and make it head. 
         **/
        if (this.head == null) {
            this.head = node;
        }
        else {
            /**
           * to store current node 
           **/
            const  current = this.head;
            var previous, count = 0;
            /*
            *while loop iterate till last node if search number greater than all
             */
            while (current.next != null && count != 1) {
                if (current.data > searchNumber) 
                { //if current data greater than search number
                    previous.next = node; //node reference will be added to the previous node
                    node.next = current;  //current node reference will added to the node
                    count++;
                }
                
                else {
                    previous = current;    //previous will store current
                    current = current.next; //current will store next next node
                }
            }
            if (current.next == null)  //if the search number greater than all, then it added to last
            {
                current.next = node;
            }
        }
        this.size++;  //size incremented
    }
    /* 
    * remove the string or searchNumber,if it already exists
    */
    remove(searchNumber) {
        const current = this.head;
        const  previous = null;
        while (current != null) {
            if (current.data == searchNumber) {
                if (previous == null) {         //if first element is the searchNumber
                    this.head = current.next;   // the saerchword will be removed and head will be the next element
                }
                /*it works when the search element is not at the first.
                *so the previos node store the reference of next node.
                */
                else {
                    previous.next = current.next;
                }
                this.size--;  //size decremented
                return current.searchNumber;
            }
            //if search word not found
            previous = current;
            current = current.next;
        }
        return -1;
    }
    show() {
        /**
         * print the given list after performing changes.
         */
        const  current = this.head;
        const  string = "";
        while (current) {
            string += current.data + " ";
            current = current.next;
        }
        console.log("Ordered Linked list: " + string);
        return string;
    }
    search(searchNumber) {
        const count = 0;
        const  current = this.head;
        while (current != null) {
            if (current.data == searchNumber) {
                return count; //if item found it will return 1
            }
            count++;
            current = current.next;
        }
        return -1; //item not found it will return -1
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

