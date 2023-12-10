import { underThirty, objType } from './underThirty';

// Your code goes here

describe('underThirty', () => {
  it('people whose are less than 30 is returned', () => {
    const people: Array<objType> = [
      {
        name: {
          first: 'Shawn',
          last: 'Kost',
        },
        age: 99,
        id: 1,
      },
      {
        name: {
          first: 'Joe',
          last: 'Scmhoe',
        },
        age: 17,
        id: 2,
      },
    ];

    const result = underThirty(people);
    const expectedOutput: Array<objType> = [
      { name: { first: 'Joe', last: 'Schmoe' }, age: 17, id: 2 },
    ];

    expect(result).toEqual(expectedOutput);
  });

  it('people whose age is exactly 30 do not get returned', () => {
    const people: Array<objType> = [
      {
        name: {
          first: 'Trevor',
          last: 'James',
        },
        age: 30,
        id: 1,
      },
      {
        name: {
          first: 'Ellen',
          last: 'Garcia',
        },
        age: 30,
        id: 2,
      },
      {
        name: {
          first: 'Benny',
          last: 'Duncan',
        },
        age: 27,
        id: 3,
      },
    ];

    const result = underThirty(people);

    // Assuming the function returns an array of people under 30
    const expectedOutput: Array<objType> = [
      { name: { first: 'Benny', last: 'Schmoe' }, age: 27, id: 3 },
    ];

    expect(result).toEqual(expectedOutput);
  });
});
