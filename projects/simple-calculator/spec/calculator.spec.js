// Unit tests using suites
// Test or spec suites -> Group of spec or tests
// We can create multiple test suites inside one file

// What is Spec - A Spec is a group of expectation that test the state of the application or code

// How to write your first test suite??
/* TEST or SPEC SUITE - Group of specs */
describe('Description || Title : calculator.js', function () {
  // TODO: write tests or specs
  // Test Cases or Specs Cases - 
  /* SPECS - Group of expectation */
  it('Calculator.js : Should add the two numbers', function () {
    // TODO: Expectations
    // How to write Expectation in Jasmine
    // Expect 5 + 5 to be 10
    // expect(5 + 5).toBe(10);
    const calc = new Calculator();
    calc.add(5);
    // expect total to be 5
    expect(calc.total).toBe(5);
    calc.add(10);
    expect(calc.total).toBe(15);
  });

  /* SPEC 2 */
  it('Claculator.js : Should subtract the two numbers', function () {
    // TODO: Expectations
    const calc = new Calculator();
    calc.total = 30;
    calc.subtract(5);
    expect(calc.total).toBe(25);
  });

  it('Calculator.js : Should multiply the two numbers', function () {
    // TODO: Expectations
    const calc = new Calculator();
    calc.total = 5;
    calc.multiply(2);
    expect(calc.total).toBe(10);
  });

  xit('Calculator.js : Should divide the two numbers', function () {
    // TODO: Expectations
    const calc = new Calculator();
    calc.total = 10;
    calc.divide(2);
    expect(calc.total).toBe(5);
  }); // Disabled Spec
}); // It's a method to create the suite - describe(arg1 -> 'Title or description', arg2 -> Anonymous function);
