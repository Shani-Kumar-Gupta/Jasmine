function calc(event) {
  console.log(event.target.value);
  const inputValue = event.target.value;
  const expression = /\+|\*|\-|\//;
  const values = inputValue.split(expression);
  const numberA = +values[0];
  const numberB = +values[1];
  const operation = inputValue.match(expression);
  const operator = operation[0];

  const cal = new Calculator();
  cal.add(numberA);
  let result;
  switch (operator) {
    case '+':
      result = cal.add(numberB);
      break;
    case '-':
      result = cal.subtract(numberB);
      break;
    case '*':
      result = cal.multiply(numberB);
      break;
    case '/':
      result = cal.divide(numberB);
      break;
  }
  // console.log("My Result: ", result, operator, '+' === operator, numberA, numberB);
  // document.getElementById("myResult").innerText = result;
  updateResult(result);
}

function updateResult(result) {
  let ele = document.getElementById("myResult");
  if (ele) {
    ele.innerText = result;
  }
}
document.getElementById('inputValue').addEventListener('change', calc);