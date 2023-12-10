export type objType = {
  name: {
    first: string;
    last: string;
  };
  age: number;
  id: number;
};

export function underThirty(people: Array<objType>): Array<objType> {
  const peopleUnderThirty = people.filter((person) => person.age < 30);

  return peopleUnderThirty;
}
