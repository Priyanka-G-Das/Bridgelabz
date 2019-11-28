
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
/*
* creating a StackedLink class to create any new node with null values.
 */
class StackedLink {
    constructor() {
        this.top = null;
    }
    /*
    * it will add or store the items
    */
    push(item) {
        try {
            var temp = new Node();
            temp.data = item;
            temp.next = this.top;
            this.top = temp;
        }
        catch (error) {
            console.log(error);
        }
    }
    display() {
        try {
            if (this.top == null) {
                console.log("Stack Underflowed");
                return;
            }
            else {
                const temp = this.top;
                const show = "";
                while (temp != null) {
                    show = show + temp.data;
                    if (temp.next != null) {
                        show = show + " --> "
                    }
                    temp = temp.next;
                }
                console.log(show);
            }
        }
        catch (error) {
            console.log(error);
        }
    }
    displayReverse(top) {
        try {
            if (top == null)
                return;
            console.log(top.data);
            if (top.next != top)
                console.log(" --> ");
            this.displayReverse(top.next);
        }
        catch (error) {
            console.log(error);
        }
    }
    getHead() {
        return this.top;
    }
}
/*exports:if a object that get exposed to a module and it is by default in every js file.
**/
module.exports = {
    StackedLink
}

