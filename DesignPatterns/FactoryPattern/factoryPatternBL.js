//computer is the parent class and children classes are extended from it as shown below
class computer {
    constructor() { }

    system() {
        throw new Error("Method 'system()' must be implemented.");
    }
}
class PC extends computer {
    system() {
        console.log("-------------------------------------------");
        console.log("PC INFO");
        console.log("RAM = 4GB", "HDD = 2TB", "CPU = i5/2.8GHz");
    }
}
class laptop extends computer {
    system() {
        console.log("--------------------------------------------");
        console.log("LAPTOP INFO");
        console.log("RAM = 4GB", "HDD = 500GB", "CPU = i3/2.4GHz");
    }
}

class server extends computer {
    system() {
        console.log("----------------------------------------");
        console.log("SERVER INFO");
        console.log("RAM = 16GB", "HDD = 1TB", "CPU = 2.8GHz");
    }
}
module.exports = {
    computer,
    PC,
    laptop,
    server
}