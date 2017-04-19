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

var calculator = {
    inputs: {
        oldInput: "0",
        currentInput: document.getElementById('inputId'),

    },

    operator:{
        multiply: 1,
        divide: 2,
        add: 3,
        subtract: 4
    },

    displayCurrentInput: function(inputId) {
        document.getElementById('inputId') = inputs.currentInput;
        console.log(inputs.currentInput);
    },

    allClear: function allClear() {
        calculator.inputs.currentInput = "0";
        calculator.operator.multiply = 0; //clear operator
        calculator.inputs.oldInput = "0"; //clear memory
        calculator.displayCurrentInput();
}

}










function Calculator(inputId) {
    this.memory = "0";
    this.operator = 0;
    this.currentInput = "0";
    this.displayCurrentInput = displayCurrentInput;
    this.allClear = allClear
}

function displayCurrentInput(inputId) {
    document.getElementById(inputId).value = this.currentInput;
}

function addDigit(dig) {
    if ((eval(this.currentInput) == 0) && (this.currentInput.indexOf(".") == -1)) {
        this.currentInput = dig;
    }
    else if (this.currentInput.length <= 11) {
        this.currentInput = this.currentInput + dig;
    }
    this.displayCurrentInput();
}

