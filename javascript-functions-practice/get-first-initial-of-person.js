/* exported getFirstInitialOfPerson */
/* exported getFirstInitialOfPerson */

const getFirstInitialOfPerson = (person) => {
  if (typeof person === 'object' && person.firstName && person.lastName) {
    return person.firstName[0];
  }
};

// console.log(getFirstInitialOfPerson('Ada Lovelace'));
