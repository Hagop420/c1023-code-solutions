export function arrayIntersection(arr1: unknown[], arr2: unknown[]): unknown[] {
  const filArr = arr1.filter(inc => arr2.includes(inc))

  return filArr
}
