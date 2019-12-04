//class node to create a node
class Node {
    //created node class with attributes data and next
    constructor(name, shares, price) {
        this.data = {
            "name": name,
            "shares": shares,
            "price": price
        }
        this.next = null;
    }
}
/**
 * @purpose :linkedlist data structure to maintain data.
 */
module.exports = class LinkedList {
    //constructer to make head=null
    constructor() {
        this.head = null;
    }
    /*
    * @Purpose: To add data to the front of the linkedlist
    */
    firstAdd(name, shares, price) {
        try {
            let newNode;
            if (this.head == null) {
                newNode = new Node(name, shares, price);
                this.head = newNode;
            }
            else {
                newNode = new Node(name, shares, price);
                newNode.next = this.head;
                this.head = newNode;
            }
        }
        catch (err) {
            console.log(err);
        }
    }
    /**
     * @purpose :To display data from the linkedlist
     */
    getData() {
        try {
            let current = this.head;
            let arr = [];
            while (current) {
                arr.push(current.data);
                current = current.next;
            }
            return arr;
        }
        catch (err) {
            console.log(err);
        }
    }
    /**
     * @purpose :To delete particular data from linkedlist.
     */
    delete(name) {
        try {
            let current = this.head;
            if (current.data.name === name) {
                this.head = current.next;
                return true;
            }
            else {
                let previous = null;
                while (current.next != null && current.data.name !== name) {
                    previous = current;
                    current = current.next;
                }
                if (current.data.name == name) {
                    previous.next = current.next;
                    return true;
                }
                return false;
            }
        }
        catch (err) {
            console.log(err);
        }
    }

}