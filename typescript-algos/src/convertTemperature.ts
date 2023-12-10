export function convertTemperature(celsius: number): Array<number> {
  const kelvin = celsius + 273.15;
  const fahrenheit = celsius * 1.8 + 32;
  // 309.65,
  return [kelvin, fahrenheit];
}
