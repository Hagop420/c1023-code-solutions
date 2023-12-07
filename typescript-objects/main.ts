type StudentProps = {
  firstName: string;
  lastName: string;
  age: number;
  livesInIrvine?: boolean;
  previousOccupation?: string;
};

const student: StudentProps = {
  firstName: 'Jack',
  lastName: 'Almadjian',
  age: 22,
  livesInIrvine: false,
  previousOccupation: 'Caretaker',
};

console.log(student);

const fullName: string = `My name is ${student.firstName} ${student.lastName}`;

console.log(fullName);
console.log(
  `I originally reside in Burbank CA so do i live in Irvine: ${student.livesInIrvine}`
);
console.log(`My Job was a ${student.previousOccupation}`);

// vehicle object

type Vehicle = {
  Make: string;
  Model: string;
  year: number;
  color?: string;
  isConvertible?: boolean;
};

// dont need the color and the isConverible keys in the object

const vehicle: Vehicle = {
  Make: 'bimmer',
  Model: '440i',
  year: 2017,
};

vehicle['color'] = 'black';
vehicle['isConvertible'] = false;

console.log(vehicle);

// 3rd

// pet object

type Pet = {
  name: string;
  kind: string;
};

const pet: Pet = {
  name: 'Jollie',
  kind: 'Lab',
};

delete pet.name;
delete pet.kind;

console.log('Value of pet:', pet);
