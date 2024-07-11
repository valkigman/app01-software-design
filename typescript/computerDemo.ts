// Computer class
class Computer{
    name: string;

    constructor(name : string){
        this.name = name;
    }

    inputDataFromKeyboard(){
        console.log("Inputting data from a keyboard...");
    }
}

// Computer object
let computer = new Computer('My computer');

// Testing computer functionality
computer.inputDataFromKeyboard();