export function calculator(
  num1: number,
  num2: number,
  operator: string
) {

  switch (operator) {
    case '+':
      return num1 + num2
      break;
    case '-':
      return num1 - num2
      break;
    case '*':
      return num1 * num2
      break;
    case '/':
      return num1 / num2
      break;
  }
}
