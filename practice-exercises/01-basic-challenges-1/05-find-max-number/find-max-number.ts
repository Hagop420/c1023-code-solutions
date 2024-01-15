export function findMaxNumber(arr: number[]): number {
  return arr.reduce((acc, curr) => Math.max(acc, curr))
}
