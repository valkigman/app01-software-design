// Computer class
var Computer = /** @class */ (function () {
    function Computer() {
        this.name = "";
    }
    Computer.prototype.inputDataFromKeyboard = function () {
        console.log("Inputting data from a keyboard...");
    };
    return Computer;
}());
// Computer object
var computer = new Computer();
// Testing computer functionality
computer.inputDataFromKeyboard();
