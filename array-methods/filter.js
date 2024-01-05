const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const ev = numbers.filter((d) => {
  return d % 2 === 0;
});

console.log(ev);

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna',
];

// only ds allowed here

const dsOnly = names.filter((d) => {
  if (d.includes('d') || d.includes('D')) {
    return false;
  } else {
    return true;
  }
});

console.log(dsOnly);
