/* exported zip */
const zip = (first, second) => {
  const zipper = [];
  const minMaxLengthDiff = Math.min(first.length, second.length);

  for (let i = 0; i < minMaxLengthDiff; i += 1) {
    zipper.push([first[i], second[i]]);
  }
  return zipper;
};

// console.log(zip(["name", "course", "grade"] , ["Cody", "CSS", 9001]))
