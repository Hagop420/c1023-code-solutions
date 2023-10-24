const student = {
  firstName: 'Jack',
  lastName: 'Almadjian',
  age: 22,
};

const fullName = `${student.firstName} ${student.lastName} ${student.age}`;

console.log(`Value of fullName: ${fullName}`);

student.livesInIrvine = false;

console.log(`Value of student.livesInIrvine: ${student.livesInIrvine}`);
student.previousOccupation = 'Assistant Mechanic';

console.log(student.livesInIrvine);

console.log('Value of student:', student);

console.log(
  `Value of student.previousOccupation: ${student.previousOccupation}`
);

// vehicle object creation

const vehicle = {
  make: 'Bmw',
  model: '440i',
  year: 2017,
};
//
vehicle.color = 'black';

vehicle.isConvertible = false;

console.log(`Value of vehicle.["color"]: ${vehicle.color}`);
console.log(`Value of vehicle["isConvertible"]: ${vehicle.isConvertible}`);

// entire vehicle object enter printing to console log

console.log('Value of vehicle:', vehicle);

// pet object

const pet = {
  name: 'Jolie',
  type: 'Lab',
};

delete pet.name;

delete pet.type;

// logging now the empty object cause delete has been parsed in code

console.log('Value of pet:', pet);
