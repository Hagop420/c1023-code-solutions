/* exported getLastNameOfPerson */
const input = {
  firstName: 'Ada',
  lastName: 'Lovelace',
};

const getLastNameOfPerson = (person) => {
  if (person) {
    return person.lastName;
  }
};

console.log(getLastNameOfPerson(input));
