/* exported getInitialsOfPerson */

/* exported getInitialsOfPerson */

const getInitialsOfPerson = (person) => {
  if (typeof person === 'object' && person.firstName && person.lastName) {
    const firstInitial = person.firstName[0];
    const lastInitial = person.lastName[0];
    return `${firstInitial}${lastInitial}`;
  } else {
    return 'Invalid';
  }
};
