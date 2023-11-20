function getRangeReport1(start, end) {
  // problem 1
  const numbers = [];

  for (let i = start; i <= end; i++) {
    numbers.push(i);
  }

  const sum = numbers.reduce((acc, num) => acc + num, 0);

  // problem odds

  const numOdd = numbers.filter((oddNum) => oddNum % 2 === 1);

  const numEven = numbers.filter((oddNum) => oddNum % 2 === 0);

  const range = Array(end - start + 1)
    .fill()
    .map((idx) => start + idx);


  return {
    total: sum,
    odds: numOdd,
    evens: numEven,
    range,
    average: sum / range.length,
  };
}



function getRangeReport(start , end){
  // 1st
  const nums = []
  for(let i = start; i <= end; i+=1){
    nums.push(i)
  }

  const sum = nums.reduce((acc, num) => acc + num, 0);


  const numOdd = nums.filter(diff => diff % 2 === 1)


  const numEven = nums.filter(diff => diff % 2 !== 1)

  const numRange = Array(end - start + 1)
    .fill()
    .map((idx) => start + idx);



  return{
        total: sum,
    odds: numOdd,
    evens: numEven,
    range: numEven,
    // average: sum / range.length,

  }
}

console.log(getRangeReport1(1, 10));






console.log(getRangeReport(1, 10));
