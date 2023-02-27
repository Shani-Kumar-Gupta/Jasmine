function calc(event) {
  console.log(event.target.value);
  const inputValue = event.target.value;
  const expression = /\+|\*|\-|\//;
  const values = inputValue.split(expression);
  const numberA = +values[0];
  const numberB = +values[2];
  const operation = inputValue.match(expression);
  const operator = operation[0];

  const cal = new Calculator();
  cal.add(4);
  cal.add(5);
  console.log("values::", numberA, numberB, operator, operation, cal.total);
}
document.getElementById('inputValue').addEventListener('change', calc);