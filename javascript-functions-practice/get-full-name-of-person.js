/* exported getFullNameOfPerson */
const fullName = {
  firstName: 'Ada',
  lastName: 'Lovelace',
};

const getFullNameOfPerson = (person) => {
  if (person) {
    return `${person.firstName} ${person.lastName}`;
  }
};

console.log(getFullNameOfPerson(fullName));
