/**************************************************************************************************
 * purpose :Demonstrate mediator pattern.
 *          (Mediator pattern focuses on provide a mediator between objects for communication and 
 *          help in implementing loose-coupling between objects. )
 * file    :mediatorPattern.js
 * author  :Priyankadas
 * date    :2-12-2019
 ***************************************************************************************************/
/**
 * @purpose :chat workes as a mediator between two user object.
 */
class chat {
    constructor(user, message) {
        this.user = user;
        this.message = message;

    }
    showMessage() {

        console.log("User name is: " + this.user + " and message:" + this.message);
    }
}
class User {
    constructor(name) {
        this.name = name;
    }
    setName(nm) {
        this.name = nm;
    }
    getName() {
        this.name;
    }
    sendMessage(message) {
        this.message = message;
        let cr = new chat(this.name, this.message);
        cr.showMessage();
    }
}
let user1 = new User();
let user2 = new User();

user1.setName("Priyanka");
user2.setName("Soumya");
user1.sendMessage("Hi Soumya");
user2.sendMessage("Hi Priyanka");