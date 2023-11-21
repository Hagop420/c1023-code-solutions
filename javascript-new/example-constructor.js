// function using the new keyword ExampleConstructor

function ExampleConstructor() {}

console.log(ExampleConstructor.prototype);
console.log(`${typeof ExampleConstructor.prototype}`);

// calling the func with a new as an arg

const newKeywordArg = new ExampleConstructor();

console.log(
  'The typeof in the function with a new argument is a:',
  newKeywordArg instanceof ExampleConstructor
);
// git purposes comment
