class Node {
    constructor(data) {
        this.data = data;
        this.previous = null;
    }
};
class Stack {
    constructor() {
        this.top = null;
        this.size = 0;
    }
    push(data) {
        //create a new node
        const node = new Node(data);

        node.previous = this.top;
        this.top = node;
        this.size += 1;
        return this.top;
    };
    pop() {
        // Removes an element from the stack, if the function is call on an empty stack
        let temp = this.top;
        this.top = this.top.previous;
        this.size -= 1;
        return temp;
    }
    //This method returns the topmost element of stack and removes it.
    isEmpty() {
        console.log(this.size === 0);
    }
};
module.exports = { Stack, Node }