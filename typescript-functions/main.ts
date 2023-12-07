function convertMinutesToSeconds(minutes: number): number {
  return minutes * 60;
}

console.log(convertMinutesToSeconds(5));

// 2nd function

function greet(name: string): string {
  return `Hey ${name}`;
}

console.log(greet('Jack'));

// 3rd function

function getArea(width: number, height: number): number {
  return width * height;
}

console.log(getArea(10993262343528714, 3882836));

// 4TH FUNCTIOn
// git

function getFirtName(names: any): any {
  return names.firstName;
}

console.log(getFirtName({ firstName: 'Jack', lastName: 'Almadjian' }));

// 5th function(final)

function getLastElement(array: Array<string>): string {
  return array[array.length - 1];
}

console.log(
  getLastElement(['Kiwi', 'Plums', 'Peaches', 'Apples', 'Lime', 'Cherries'])
);
