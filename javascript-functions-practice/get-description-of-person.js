/* exported getDescriptionOfPerson */
const getDescriptionOfPerson = (person) => {
  const { name, occupation, birthPlace } = person;
  return `${name} is a ${occupation} from ${birthPlace}.`;
};

const description = getDescriptionOfPerson({
  name: 'Ada Lovelace',
  occupation: 'countess',
  birthPlace: 'London, England',
});
console.log(description);
