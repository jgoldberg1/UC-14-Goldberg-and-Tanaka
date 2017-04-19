








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




   this.displayCurrentInput = function () {
        document.getElementById(inputId).value = this.currentInput;
    }




/**
var currentInput = "0";
var memory = "0";
var operator = 0;


 * displays the current input onto calc screen
function displayCurrentInput() {
    document.getElementById(inputId).value = currentInput;
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

**/

// Test adding one, then two decimals
QUnit.test( "Add decimal test", function( assert ) {
    Calculator.allClear();
    Calculator.addDecimal();
    Calculator.addDigit('2');
    Calculator.addDecimal();
    assert.equal(document.getElementById("screen").value, "0.2", "Passed - Expected 0.2");
});
//US1: As a user, I want to be able to press a button and change the sign of the current number that I have inputted into the calculator.
QUnit.test("Add sign change test", function( assert ) {
    Calculator.allClear();
    Calculator.addDigit('2');
    Calculator.changeSign();

    assert.equal(document.getElementById("screen").value, "-2", "Passed - Expected -2");
});


//US2: As a user I want to be able to press a button and change the inputed number on the calculator's screen to change to a percentage.
QUnit.test("Add percentage test", function( assert ) {
    Calculator.allClear();
    Calculator.addDigit('2');
    Calculator.percentage();

    assert.equal(document.getElementById("screen").value, "0.02", "Passed - Expected 0.02");
});

//US3: As a user, I want to be able to calculate the inverse of a number simply by pressing a button.
QUnit.test("Add inverse test", function( assert ) {
    Calculator.allClear();
    Calculator.addDigit('2');
    Calculator.inverse();

    assert.equal(document.getElementById("screen").value, "0.5", "Passed - Expected 0.5");
});


//US4: As a user I want to be able to calculate the factorial of a number by simply pressing a button.
QUnit.test("Add factorial test", function( assert ) {
    Calculator.allClear();
    Calculator.addDigit('5');
    Calculator.factorial();

    assert.equal(document.getElementById("screen").value, "120", "Passed - Expected 120");
});


//US5: As a user I want to be able to calculate the square root of a number by simply pressing a button.
QUnit.test("Add square root test", function( assert ) {
    Calculator.allClear();
    Calculator.addDigit('25');
    Calculator.squareRoot();

    assert.equal(document.getElementById("screen").value, "5", "Passed - Expected 5");
});


//US6: As a user I want to be able to calculate the square of a number by simply pressing a button.
QUnit.test("Add square test", function( assert ) {
    Calculator.allClear();
    Calculator.addDigit('5');
    Calculator.square();

    assert.equal(document.getElementById("screen").value, "25", "Passed - Expected 25");

});
//US7: As a user who sometimes makes mistakes when pressing buttons on the keypad, I want to be able to press a button that clears my current input, but not the stored procedure.
QUnit.test("Add clear input test", function( assert ) {
    Calculator.allClear();
    Calculator.addDigit('5');
    Calculator.storeOperator('*');
    Calculator.addDigit('6');
    Calculator.clears();

    assert.equal(document.getElementById("screen").value, "0", "Passed - Expected 0");
});

//US8: Bug Alert! There is a bug in the calculator app! As a careless user I want to be told that I just tried to divide by zero, which I should be told is not allowed.
QUnit.test("Add divide by zero error", function( assert ) {
    Calculator.allClear();
    Calculator.addDigit('5');
    Calculator.storeOperator('/');
    Calculator.addDigit('0');
    Calculator.calculate();

    assert.equal(document.getElementById("screen").value, "DIVIDE BY ZERO ERROR", "Passed - Expected DIVIDE BY ZERO ERROR");
});

//US9: Bug Alert! As an easily confused user I don't want to be able to type numbers into the screen that causes some of the numbers to disappear off the screen, thus confusing me about what I actually typed.
QUnit.test("Add character limit", function( assert ) {
    Calculator.allClear();
    Calculator.addDigit('9');
  Calculator.addDigit('9');
  Calculator.addDigit('9');
  Calculator.addDigit('9');
  Calculator.addDigit('9');
  Calculator.addDigit('9');
  Calculator.addDigit('9');
  Calculator.addDigit('9');
  Calculator.addDigit('9');
  Calculator.addDigit('9');
  Calculator.addDigit('9');
  Calculator.addDigit('9');
  Calculator.addDigit('9');
  Calculator.addDigit('9');



    assert.equal(document.getElementById("screen").value, "999999999999", "Passed - Expected 999999999999");
});
