var student = {
  firstName: 'Jack',
  lastName: 'Almadjian',
  age: 22,
  livesInIrvine: false,
  previousOccupation: 'Caretaker',
};
console.log(student);
var fullName = 'My name is '
  .concat(student.firstName, ' ')
  .concat(student.lastName);
console.log(fullName);
console.log(
  'I originally reside in Burbank CA so do i live in Irvine: '.concat(
    student.livesInIrvine
  )
);
console.log('My Job was a '.concat(student.previousOccupation));
// dont need the color and the isConverible keys in the object
var vehicle = {
  Make: 'bimmer',
  Model: '440i',
  year: 2017,
};
vehicle['color'] = 'black';
vehicle['isConvertible'] = false;
console.log(vehicle);
var pet = {
  name: 'Jollie',
  kind: 'Lab',
};
delete pet.name;
delete pet.kind;
console.log('Value of pet:', pet);
