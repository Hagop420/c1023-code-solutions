import { convertTemperature } from './convertTemperature';

// Your code goes here

describe('convertTemperature', () => {
  it('joining the strings spaces', () => {
    const result = convertTemperature(36.5);
    const result2 = convertTemperature(122.11);
    expect(result).toEqual([309.65, 97.7]);
    expect(result2).toEqual([395.26, 251.798]);
  });

  it('joining the strings spaces', () => {
    const result = convertTemperature(36.5);
    const result2 = convertTemperature(122.11);
    expect(result).toEqual([309.65, 97.7]);
    expect(result2).toEqual([395.26, 251.798]);
  });

  it('joining the strings spaces', () => {
    const result = convertTemperature(0);
    expect(result).toEqual([273.15, 32]);
  });
});
