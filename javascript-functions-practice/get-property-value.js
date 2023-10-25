/* exported getPropertyValue */

const getPropertyValue = (object, key) => {
  if (object && key in object) {
    return object[key];
  } else {
    return 'Property not found';
  }
};

// Example usage:
const person = {
  firstName: 'Ada',
  lastName: 'Lovelace',
  birthPlace: 'London, England',
};

const birthPlace = getPropertyValue(person, 'birthPlace');
console.log(birthPlace);
