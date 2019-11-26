const primeAnagram = require('../PrimeAnaQueue/PrimeAnaQueueBL');
const primeAnaQueue = require("readline-sync");
try {
    const queueLink = new primeAnaQueue.QueuedLinkedList;
    const primes = [];
    const initial = 0;
    const final = 1000;
    primes = primeAnagram.findAnaPrime(initial, final);
    for (let i = 0; i < primes.length; i++) {
        queueLink.enque(primes[i]);
    }
    queueLink.display();
}
catch (error) {
    console.log(error);
}
