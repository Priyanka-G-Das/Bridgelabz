class Qnode {
    constructor(data) {
        this.next = null;
        this.data = data;
    }
}
/*
* creating QueuedLinkedList class to create any new node with null values.
 */
class QueuedLinkedList {
    constructor() {
        this.front = null;
        this.rear = null;
    }
	/*
	* it will add or store the items
	*/
    enque(data) {
        try {
            const temp = new Qnode(data);
            if (this.rear == null) {
                this.rear = this.front = temp;
                return;
            }
            this.rear.next = temp;
            this.rear = temp;
        }
        catch (error) {
            console.log(error);
        }
    }
    display() {
        try {
            const result = '';
            const t = this.front;
            while (t != null) {
                //console.log(t.data);
                result = result + t.data;
                if (t.next != null)
                    result = result + " ";
                t = t.next;
            }
            console.log(result);
        }
        catch (error) {
            console.log(error);
        }
    }
}
/**
* exports:if a object that get exposed to a module and it is by default in every js file.
**/
module.exports = {
    QueuedLinkedList
}