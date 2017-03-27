// Test for inputing digits
QUnit.test( "Add digits test", function( assert ) {
    Calculator.allClear();
    Calculator.addDigit('1');
    Calculator.addDigit('2');
    assert.equal(document.getElementById("screen").value, "12", "Passed - Expected 12");
});

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
