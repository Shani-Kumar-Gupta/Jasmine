/*

MAIN TOPICS -
- Setup and Teardown
- beforeEach and afterEach
- beforeAll and afterAll

*/

// Unit tests using suites
// Test or spec suites -> Group of spec or tests
// We can create multiple test suites inside one file

// What is Spec - A Spec is a group of expectation that test the state of the application or code

// How to write your first test suite??
/* TEST or SPEC SUITE - Group of specs */
describe('Description || Title : Calc.js', function () {
  describe('Calculator', function () {
    // TODO: write tests or specs
    // Test Cases or Specs Cases -
    /* SPECS - Group of expectation */
    let count = 0;
    let calc;
    let calc1;
    let calc2;

    beforeEach(function () {
      /* executes before execution of each specs of it's suite */
      calc = new Calc();
      calc1 = new Calc();
      calc2 = new Calc();
      console.log("beforeSuite", count++);
    });

    afterEach(function () {
      /* Executes after execution to each specs of it's suite */
      // cleaning up after each spec
      console.log("after suite");
    });

    // toBe() Matcher
    it('should initialize the total', () => {
      expect(calc.total).toBeFalsy();
      expect(calc.total).toBe(0); // === and only check for primitive data types
      // expect(calc.total).toBe('0');

      // expect non-prminitive to be non-primitive
      //let person1 = { name: 'Shani' };
      //let person2 = { name: 'Shani' };
      //expect(person1).toBe(person2); // To check deep equality use toEqual() matcher
    });

    // toEqual() Matcher
    it('should initialize the constructor', () => {
      // expect(calc1).toBe(calc2);
      expect(calc1).toBeTruthy();
      expect(calc2).toBeTruthy();
      expect(calc1).toEqual(calc2); // To check deep equality use toEqual() matcher

      let person1 = { name: 'Shani' };
      let person2 = { name: 'Shani' };
      expect(person1).toEqual(person2);
    });

    // not matcher
    it('should be unique Calc object', () => {
      expect(calc1).not.toBe(calc2);
    });

    it('should have common method', () => {
      expect(calc.add).toBeDefined();
      expect(calc.sub).toBeUndefined();
    });

    // toContain() Matcher
    it('should have the Calc constructor', () => {
      let arr = [1, 2, 3, 4];
      expect(arr).toContain(3);
      expect(calc.constructor.name.toLowerCase()).toContain('calc');
    });

    // any Matcher
    it('should be an instance', function () {
      jasmine.addMatchers(CustomMatcher);
      calc.total = 10;
      expect(calc).toEqual(jasmine.any(Calc));
      expect(calc).toEqual(jasmine.any(Object));
      expect(calc.total).toEqual(jasmine.any(Number));
      // expect(calc).toBeCalculator(); // Custom Matcher
    });

    describe('add()', function () {
      it('Calc.js : Should add the two numbers', function () {
        // TODO: Expectations
        // How to write Expectation in Jasmine
        // Expect 5 + 5 to be 10
        // expect(5 + 5).toBe(10);

        calc.add(5);
        // expect total to be 5
        expect(calc.total).toBe(5);
        // calc.total -> Actual Value
        // toBe(5) -> Expected Value
        calc.add(10);
        expect(calc.total).toBe(15);
      });
    });

    describe('subtract()', function () {
      /* SPEC 2 */
      it('Claculator.js : Should subtract the two numbers', function () {
        // TODO: Expectations

        calc.total = 30;
        calc.subtract(5);
        expect(calc.total).toBe(25);
      });
    });

    describe('multiply()', function () {
      it('Calc.js : Should multiply the two numbers', function () {
        // TODO: Expectations

        calc.total = 5;
        calc.multiply(2);
        expect(calc.total).toBe(10);
      });

      // toBeNaN() Matcher
      it('does not handle NaN for multiplication', () => {

        calc.total = 10;
        calc.multiply('a');
        expect(calc.total).toBeNaN();
      });
    });

    describe('divide()', function () {
      xit('Calc.js : Should divide the two numbers', function () {
        // TODO: Expectations

        calc.total = 10;
        calc.divide(2);
        expect(calc.total).toBe(5);
      }); // Disabled Spec

      // toThrow() Matcher
      it('should throw error when divide by zero', () => {

        calc.total = 10;
        expect(function () {
          calc.divide(0);
        }).toThrow();

        // expect(function () {
        //   calc.divide(0)
        // }).toThrow(new Error('Number cannot be zero'));
      });

      // toThrowError() Matcher
      it('should throw error when divide by zero with message', () => {

        calc.total = 10;
        expect(function () {
          calc.divide(0);
        }).toThrowError();
        expect(function () {
          calc.divide(0);
        }).toThrowError('Number cannot be zero');
        expect(function () {
          calc.divide(0);
        }).toThrowError(Error, 'Number cannot be zero');
        expect(function () {
          calc.divide(0);
        }).toThrowError(AirthmeticError, 'Number cannot be zero');
        // expect(function () {
        //   calc.divide(0)
        // }).toThrowError(BadRequestError, 'Number cannot be zero');
      });
    });

    // toBeUndefined() Matcher
    it('should be undefined', () => {
      // expect(calc.total).toBeUndefined();
    });

    // toBeDefined() Matcher
    it('should be defined', () => {
      expect(calc.total).toBeDefined();
    });

    // toBeNull() Matcher
    it('can override total value', () => {
      calc.total = null;
      expect(calc.total).toBeNull();
    });

    // toMatch() Matcher
    it('should return total a number', function () {
      calc.add(10);
      expect(calc.total).toBe(10);
      expect(calc.total).toMatch(/-?\d+/);
      expect(typeof calc.total).toBe('number');
      expect(typeof calc.total).toMatch('number');
      expect(typeof calc.total).toMatch('ber');
    });

    // Asymmetric Matcher
    it('should return total as value - Asymmetric Matcher', function () {
      calc.total = 10;
      expect(calc.total).toEqual(10);
      expect(calc.total).toEqual(jasmine.anything());

      // calc.total = undefined;
      // expect(calc.total).toEqual(jasmine.anything());
    });

    // jasmine.objectContaining() and jasmine.stringContaining() Matcher
    it('should contain the total as key', function () {
      calc.total = 10;
      expect(calc).toEqual(jasmine.objectContaining({ total: 10 }));
      expect(typeof calc.total).toEqual(jasmine.stringContaining('number'));
    });
  });
}); // It's a method to create the suite - describe(arg1 -> 'Title or description', arg2 -> Anonymous function);
