export function calculator(
  num1: number,
  num2: number,
  operator: string
): any {
  let operand
  switch (operator) {
    case '+':
      operand = num1 + num2
      break;
    case '-':
      operand = num1 - num2
      break;
    case '*':
      operand = num1 * num2
      break;
    case '/':
      operand = num1 / num2
      break;
  }
  return operand
}
