class AirthmeticError extends Error {
  constructor(message) {
    super(message);
    this.name = 'AirthmeticError';
  }
}

class BadRequestError extends Error {
  constructor(message) {
    super(message);
    this.name = 'BadRequestError';
  }
}

function Calc() {
  this.total = 0;
}

Calc.prototype.add = function (num) {
  return this.total += num;
}

Calc.prototype.subtract = function (num) {
  return this.total -= num;
}

Calc.prototype.multiply = function (num) {
  return this.total *= num;
}

Calc.prototype.divide = function (num) {
  if (num === 0) {
    // throw new Error('Number cannot be zero');
    throw new AirthmeticError('Number cannot be zero');
  }
  return this.total /= num;
}