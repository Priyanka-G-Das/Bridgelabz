var readline = require("readline-sync");
module.exports={
    bankTransaction(balance,num){
        try{
        /**
         * create a new queue. 
         **/
         var queue=new Queue(); 
         for(let i=0;i<num;i++){
             queue.enQueue(i); //insert the people rear of the queue
         }
         while(queue.length()){
             var option=readline.question("Press 1 to deposit money and Press 2 to withdrawal money: ");
             /*
             * deposit the amount is option 1
             */
             if(option==1){
                 var deposit=readline.question("Enter the amount to deposit: ");
                 balance=(parseInt(balance)+parseInt(deposit)); //deposit amount added to the balance
                 console.log("Total Balance is= "+balance); //print balance
             }
             /*
             * withdraw the amount by people
             */
             else if(option==2){
                 var withdrawAmount=readline.question("Enter the amount to withdrawal: ");
                 if(balance>=withdrawAmount){             //check withdraw amount 
                     balance=balance-withdrawAmount;        
                     console.log("Total balance:"+balance);
                 }
                 /*
                 * bank balance is zero 
                 */
                 else{
                     console.log("Running out of balance..");
                 }
             }
             else{
                 console.log("plz enter correct option...");
             }
             queue.deQueue();   //queue dequeue operation
         }
        }
        catch (error) {
          console.log(error);
        }
     }
     
 }
class Queue{
    /**
     * create a new constructor to create object of item.
     */
    constructor(){
        this.items=[]; //declare items array
    }
    /**
     * add elements into the queue using enqueue function.
     */
    enQueue(element){
        return this.items.push(element); //item added to the queue array
    }
    /**
     * remove elements from the queue.
     */
    deQueue(){
        if(this.isEmpty())
            return "underflow";
        return this.items.shift(); //shift() method removes the first item of an array.
    }
    /*
    * checks if queue is empty are not
    */
    isEmpty(){
        if(this.items.length==0)
        {
            return true;
        }
        return false;
    }
    /*
    * returns the length of queue
    */
    length(){
        return this.items.length;
    }
    printQueue(){
        /*
        * print queue
        */
        var str="";
        for(var i=0;i<this.items.length;i++)
        str+=this.items[i]+" ";
        return str;
    }
}