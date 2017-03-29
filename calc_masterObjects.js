/** TODO:
 * 1. Add these new functions: percentage, inverse, factorial, square and square root
 * 2. Bootstrap it to make it pretty!
 * 3. User can only type numbers in the display (30 max!), and the numbers are right aligned.
 * 4. Fix divide by 0 errors!
 * 5. Add the ability to clear the current input, but not memory.
 * 6. Challenge: Add trig functions (in radian AND degree mode)
 * 7. Extra Challenge: Add mc, m+, m-, mr butons that work!
 * 8. Super Challenge: Add ( and ) buttons that work!
 * 9. Super Duper Challenge: Add exponents (negatives too!)
 */
function Calculator(inputId) {
    this.memory = "0",
    this.operator = 0,
    this.currentInput = "0",
    this.displayCurrentInput = function () {
        document.getElementById(inputId).value = this.currentInput;
    }
    this.addDigit = function (dig) {
        if ((eval(this.currentInput) == 0) && (this.currentInput.indexOf(".") == -1)) {
            this.currentInput = dig;
        }
        else if (this.currentInput.length <= 11) {
            this.currentInput = this.currentInput + dig;
        }
        this.displayCurrentInput;
    }
    this.addDecimal = function () {
        if (this.currentInput.length == 0) {
            //no leading ".", use "0."
            this.currentInput = "0.";
        }
        else {
            // First make sure one doesn't exist
            if (this.currentInput.indexOf(".") == -1) {
                this.currentInput = this.currentInput + ".";
            }
        }
        this.displayCurrentInput;
    },
    this.allClear = function () {
        this.currentInput = "0";
        this.operator = 0; //clear operator
        this.memory = "0"; //clear memory
        this.displayCurrentInput;
    },
    this.storeOperator = function (op) {
        if (op.indexOf("*") > -1) {
            this.operator = 1;
        }; //codes for *
        if (op.indexOf("/") > -1) {
            this.operator = 2;
        }; // slash (divide)
        if (op.indexOf("+") > -1) {
            this.operator = 3;
        }; // sum
        if (op.indexOf("-") > -1) {
            this.operator = 4;
        }; // difference
        this.memory = this.currentInput; //store value
        this.currentInput = "0";
        this.displayCurrentInput;
    },
    this.calculate = function () {
        if (this.operator == 1) {
            this.currentInput = eval(this.memory) * eval(this.currentInput);
        }
        if (this.operator == 2) {
            if (this.currentInput == 0) {
                this.currentInput = "DIVIDE BY ZERO ERROR"
                this.currentInput.className = "alert alert-danger";
            }
            else {
                this.currentInput = this.currentInput = eval(this.memory) / eval(this.currentInput);
            }
        }
        if (this.operator == 3) {
            this.currentInput = eval(this.memory) + eval(this.currentInput);
        }
        if (this.operator == 4) {
            this.currentInput = eval(this.memory) - eval(this.currentInput);
        };
        this.operator = 0; //clear operator
        this.memory = "0"; //clear memory
        this.displayCurrentInput;
    },
    this.changeSign = function () {
        this.currentInput = this.currentInput * (-1);
        this.displayCurrentInput;
    }
    this.percentage = function () {
        this.currentInput = this.currentInput / 100;
        this.displayCurrentInput;
    }
    this.clears = function () {
        this.currentInput = "0";
        this.displayCurrentInput;
    }
    this.factorial = function () {
        var input = this.currentInput;
        var x = input;
        for (i = input - 1; i > 1; i--) {
            x = x * i;
        }
        this.currentInput = x;
        console.log(this.currentInput);
        this.displayCurrentInput;
    }
    this.square = function () {
        this.currentInput = Math.pow(this.currentInput, 2);
        this.displayCurrentInput;
    }
    this.squareRoot = function () {
        this.currentInput = Math.sqrt(this.currentInput);
        this.displayCurrentInput;
    }
    this.inverse = function () {
        this.currentInput = 1 / this.currentInput;
        this.displayCurrentInput;
    }
}
