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
function Calculator('screen') {
    this.memory = "0"
    this.operator = 0
    this.currentInput = "0"
    this.displayCurrentInput = function () {
        document.getElementById('screen').value = this.currentInput;
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
    }
    this.allClear = function () {
        this.currentInput = "0";
        this.operator = 0; //clear operator
        this.memory = "0"; //clear memory
        this.displayCurrentInput;
    }
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
    }
    this.calculate = function () {
        if (this.operator == 1) {
            this.currentInput = eval(this.memory) * eval(this.currentInput);
        };
        if (this.operator == 2) {
            if (this.currentInput == 0) {
                this.currentInput = "DIVIDE BY ZERO ERROR"
                this.currentInput.className = "alert alert-danger";
            }
            else {
                this.currentInput = this.currentInput = eval(this.memory) / eval(this.currentInput);
            }
        };
        if (this.operator == 3) {
            this.currentInput = eval(this.memory) + eval(this.currentInput);
        };
        if (this.operator == 4) {
            this.currentInput = eval(this.memory) - eval(this.currentInput);
        };
        this.operator = 0; //clear operator
        this.memory = "0"; //clear memory
        this.displayCurrentInput;
    }
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
/**
var currentInput = "0";
var memory = "0";
var operator = 0;


 * displays the current input onto calc screen
function displayCurrentInput() {
    document.getElementById('screen').value = currentInput;
}

/**
 * Adds digit to calc screen
 * @param {number} num number you want to add to calc
function addDigit(dig) {
if ((eval(currentInput) == 0) && (currentInput.indexOf(".") == -1)) {
currentInput = dig;
} else if (currentInput.length <= 11) {
    currentInput = currentInput + dig;
}
displayCurrentInput();
}

/**
 * adds decimal to the current input
 * @param {number} current input [[what is currently displayed on calc screen]
function addDecimal() {
    if (currentInput.length == 0) {
        //no leading ".", use "0."
        currentInput = "0.";
    } else {
        // First make sure one doesn't exist
        if (currentInput.indexOf(".") == -1) {
            currentInput = currentInput + ".";
        }
    }
    displayCurrentInput();
}

/**
 * clears everything out of screen
 * @param {number} current input   what is currently displayed on screen
 * @param {object} operator [[+, -, /, *]]
 * @param {number} [number stored in calc's memory that the operator will be applied to]
function allClear() {
    currentInput = "0";
    operator = 0;                //clear operator
    memory = "0";                  //clear memory
    displayCurrentInput();
}

/**
 * stores the entered operator
 * @param {operator}op [+, -, /, *]
function storeOperator(op) {
    if (op.indexOf("*") > -1) { operator = 1; };       //codes for *
    if (op.indexOf("/") > -1) { operator = 2; };       // slash (divide)
    if (op.indexOf("+") > -1) { operator = 3; };       // sum
    if (op.indexOf("-") > -1) { operator = 4; };       // difference

    memory = currentInput;                 //store value
    currentInput = "0";
    displayCurrentInput();
}

/**
 * calculates output using memory, operator, and current input
function calculate() {
    if (operator == 1) { currentInput = eval(memory) * eval(currentInput); };
    if (operator == 2) {
        if (currentInput == 0) {
     currentInput = "DIVIDE BY ZERO ERROR"
     currentInput.className = "alert alert-danger";
        } else {
            currentInput =  currentInput = eval(memory) / eval(currentInput);}
    };

    if (operator == 3) { currentInput = eval(memory) + eval(currentInput); };
    if (operator == 4) { currentInput = eval(memory) - eval(currentInput); };

    operator = 0;                //clear operator
    memory    = "0";              //clear memory
    displayCurrentInput();
}

/**
 * changes the sign from positive to negative and vice versa
function changeSign() {
    currentInput = currentInput * (-1);
    displayCurrentInput();
}

/**
 * sets current input back to zero
function clears() {
    currentInput = "0";
    displayCurrentInput();
}

/**
 * change curren input to percentage
function percentage() {
 currentInput = currentInput/100;
displayCurrentInput();
}

// Calculate the factorial of the current input
function factorial() {
var input = currentInput;
var x = input;
for (i = input-1; i > 1; i--) {
    x = x*i;
}
currentInput = x;
console.log(currentInput);
displayCurrentInput();
}

/**
 * calculate square of the current input
function square() {
 currentInput = Math.pow(currentInput,2);
    displayCurrentInput();
}

/**
 * calculate square root of current input
function squareRoot() {
   currentInput = Math.sqrt(currentInput);
    displayCurrentInput();
}

/**
 * calculate inverse of current input
 * @param {number?} inputId [idk what an inverse is]
function inverse() {
currentInput = 1/currentInput;
displayCurrentInput();








/**
//Bonus Challenge
function cosineDegree() {
   currentInput = Math.cos(currentInput);
    displayCurrentInput*57.2958;
}
function cosineRadian() {
    currentInput = Math.cos(currentInput);
    displayCurrentInput();
}
function sinDegree() {
    currentInput = Math.sin(currentInput);
    displayCurrentInput*57.2958;
}
function sinRadian() {
    currentInput = Math.sin(currentInput);
    displayCurrentInput();
}
function tangentDegree() {
    currentInput = Math.tan(currentInput);
    displayCurrentInput*57.2958;
}
function tangentRadian() {
    currentInput = Math.tan(currentInput);
    displayCurrentInput();
}
