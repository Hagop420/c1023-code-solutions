const convertToJsonArray = [
  {
    isbn: '102930494903039',
    title: 'Stranger Things',
    author: 'Will Byers',
  },
  {
    isbn: '293848393994040',
    title: 'Austin and Ally',
    author: 'Laira Marano',
  },
  {
    isbn: '102930494903039',
    title: 'Kickin it',
    author: 'Jack Almadjian',
  },
];

console.log('JsonConversionArray:', convertToJsonArray);
console.log('Typeof convertToJsonArray:', typeof convertToJsonArray);

const jsonConverted = JSON.stringify(convertToJsonArray);

const jsonStrSt = JSON.stringify(
  'employees:[{"firstName":"John", "number":"21}'
);

const fulljsonStr =
  '[{"isbn":"102930494903039","title":"Stranger Things","author":"Will Byers"},{"isbn":"293848393994040","title":"Austin and Ally","author":"Laira Marano"},{"isbn":"102930494903039","title":"Kickin it","author":"Jack Almadjian"}]';
console.log(jsonStrSt);
console.log(typeof jsonStrSt);

console.log(jsonConverted);
console.log(typeof jsonConverted);

console.log(fulljsonStr);
console.log(typeof fulljsonStr);

const parsingJson = JSON.parse(jsonStrSt);

console.log(jsonStrSt);
console.log(parsingJson);
console.log(typeof parsingJson);
