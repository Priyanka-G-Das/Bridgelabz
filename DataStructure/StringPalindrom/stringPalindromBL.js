exports.checkPalindrome = (word) => {
    /**
     * create a new deque
     */
    let deque = new Deque();
    wordArray = word.toString().split(''); //insert each character to deque
    /**
     * loop iterate each character of word
     */
    for (let i = 0; i < wordArray.length; i++) {
        deque.addFront(wordArray[i]);//insert each character to deque
    }
    deque.display();
    let flag = 1;
    /*the while loop to iterate to size 1*/
    while (deque.size() > 1) {
        let front = deque.removeFront();//remove one character from front
        let rear = deque.removeRear();//remove one character from rear
        if (front != rear) {
            flag = 0;
        }
    }
    if (flag == 1) {
        console.log("the word is palindrome");
    }
    else {
        console.log("the word is not palindrome")
    }
}

class Deque {
    constructor() {
        this.items = [];
    }
    addFront(element) {
        this.items.unshift(element); //add the element at the front of deque
    }
    addRear(element) {
        this.items.push(element); //add the element at the end of deque
    }
    removeRear(element) {
        return this.items.pop(element); //remove the last element of deque
    }
    removeFront(element) {
        return this.items.shift(element); //remove first element of deque
    }
    size() {
        return this.items.length; //return size of deque
    }
    display() {
        if (this.items.length == 0) {
            console.log("empty");
        }
        else {
            let string = '';
            /**
             * loop iterate upto deque size
             */
            for (let i = 0; i < this.items.length; i++) {
                string = string + " " + this.items[i];
            }
            console.log("Deque elements:" + string);
        }
    }
}