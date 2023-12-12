import { add } from './add.js';
import { subtract } from './subtract.js';
import { multiply } from './multiply.js';
import { divide } from './divide.js';

const num1: string = process.argv[2];
const num4: string = process.argv[4];
const operand: string = process.argv[3];

if (operand === 'plus') {
  const numConv = Number(num1);
  const numConv2 = Number(num4);
  console.log(add(numConv, numConv2));
}

if (operand === 'minus') {
  const numConv = Number(num1);
  const numConv2 = Number(num4);
  console.log(subtract(numConv, numConv2));
}

if (operand === 'multiply') {
  const numConv = Number(num1);
  const numConv2 = Number(num4);
  console.log(multiply(numConv, numConv2));
}

if (operand === 'divide') {
  const numConv = Number(num1);
  const numConv2 = Number(num4);
  console.log(divide(numConv, numConv2));
}
