// Unit tests using suites
// Test or spec suites -> Group of spec or tests
// We can create multiple test suites inside one file

// What is Spec - A Spec is a group of expectation that test the state of the application or code

// How to write your first test suite??
describe('Description || Title : calculator.js', function () {
  // TODO: write tests or specs
  // Test Cases or Specs Cases - 
  it('Calculator.js : Should add the two numbers', function () {
    // TODO: Expectations
    // How to write Expectation in Jasmine
    // Expect 5 + 5 to be 10
    // expect(5 + 5).toBe(10);
    const calc = new Calculator();
    calc.add(5);
    // expect total to be 5
    expect(calc.total).toBe(5);
  });

  it('Claculator.js : Should subtract the two numbers', function () {
    // TODO: Expectations
  });

  it('Calculator.js : Should multiply the two numbers', function () {
    // TODO: Expectations
  });

  it('Calculator.js : Should divide the two numbers', function () {
    // TODO: Expectations
  });
}); // It's a method to create the suite - describe(arg1 -> 'Title or description', arg2 -> Anonymous function);
