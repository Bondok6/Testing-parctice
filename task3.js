class Calculator {
  add(num1, num2) {
    return num1 + num2;
  }

  sub(num1, num2) {
    return Math.abs(num1 - num2);
  }

  divide(num1, num2) {
    return num1 / num2;
  }

  multiply(num1, num2) {
    return num1 * num2;
  }
}

export default Calculator;
