function getRangeReport(start , end){
      // problem 1
      let numbers=[]

  for (let i = start; i <= end; i++) {
    numbers.push(i);
  }

  let sum = numbers.reduce((acc, num) => acc + num, 0);


  // problem odds

const numOdd = numbers.filter(oddNum => oddNum % 2 === 1)


const numEven = numbers.filter(oddNum => oddNum % 2 === 0)





const range = Array(end - start + 1).fill().map((_, idx) => start + idx)



const AV = numbers.map(avNum => avNum  / 2)

// const oddNums = allOdds.filter((numOdd => ))
    return {
    total: sum,
    odds: numOdd,
    evens: numEven,
    range: range,
    average:

}
}

console.log(getRangeReport(1, 10))
