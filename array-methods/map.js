const prices = [42.42, 10, 28.2234, 3.2, 5, 12];

const mapObjPrices = prices.map((prc) => {
  return { price: prc, salePrice: prc / 2 };
});

console.log(mapObjPrices);

const formatted = [42.42, 10.0, 28.22, 3.2, 5.0, 12.0];
// formatted prices

formatted.forEach((prc) => {
  const num = Number(prc);
  console.log('$', num.toFixed(2));
});
