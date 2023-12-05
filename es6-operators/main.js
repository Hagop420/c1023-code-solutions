/* eslint-disable no-unused-vars */
const v1 = { value: 'Something' };
const v2 = '';
const v3 = undefined;
const v4 = [3, 5, 7, 9];

/* TODO:
 * Demonstrate how to execute an expression only if a variable is truthy.
 * In one expression, log "v1 is truthy" to the console only if `v1` is truthy.
 * In one expression, log "v2 is truthy" to the console only if `v2` is truthy.
 * Expected: v1 message logs, v2 message does not.
 */

// 1st solution
// if(v1){
//   console.log(v1)
// }

// if(v2){
//   console.log(v2)
// }

v1 && console.log('v1 is truthy')



/* TODO:
 * Demonstrate how to assign a "default value" to a variable.
 * In one expression, assign `'default-value'` to the variable `config1` if v1 is falsy.
 * In one expression, assign `'default-value'` to the variable `config2` if v2 is falsy.
 * Log both `config1` and `config2`.
 * Expected: `config1 = { value: 'Something' }`, `config2 = 'default-value'`.
 */

// 2nd solution
// default value
let config1
let config2

config1 || console.log(v1)





//


/* TODO:
 * Demonstrate how to assign a "default value" to a variable only if the variable is `undefined`.
 * In one expression, assign `'default-value'` to the variable `cfg1` if v1 is undefined.
 * In one expression, assign `'default-value'` to the variable `cfg2` if v2 is undefined.
 * In one expression, assign `'default-value'` to the variable `cfg3` if v3 is undefined.
 * Log `cfg1`, `cfg2`, and `cfg3`.
 * Expected: `config1 = { value: 'Something' }`, `config2 = ''`, `config3 = 'default-value'`.
 */

// 3rd solution


const cfg1 = v1 ?? 'default value'

const cfg2 = v2 ?? 'default value'


const cfg3 = v3 ?? 'default value'






/* TODO:
 * Use the shorthand if/else, which is especially useful for variable assignments.
 * In one expression, assign `truthy` to the variable `tern1` if v1 is truthy
 * and assign `falsy` to the same variable if v1 is falsy.
 * Do the same for the variable `tern2` and the variable v2.
 * Log `tern1` and `tern2`.
 * Expected: `tern1 = 'truthy'`, `tern2 = 'falsy'`.
 */

// 4th solution

let tern1;
let tern2;


 v1 ? tern1 = 'true' : undefined


 !v1 ? tern1 = 'falsy' : undefined



v2 ? tern1 = 'true' : undefined


!v2 ? tern1 = 'falsy' : undefined


/* TODO:
 * Use the shorthand for "if defined".
 * In one expression, assign the `value` property of variable v1 to the variable
 * `oc1`, but only if it is defined.
 * Do the same for the variable `oc2` and the variable v2.
 * Do the same for the variable `oc3` and the variable v3.
 * Log `oc1`, `oc2`, and `oc3`.
 * Expected: `oc1 = 'Something'`, `oc2 = undefined`, `oc3 = undefined`.
 */

// 5th solutiion



const oc1 = v1?.value
const oc2 = v1?.value
const oc3 = v1?.value



/* TODO:
 * Copy an object and add one property.
 * In one expression, make a copy of the variable v1, add the property
 * `foo` with the value `'bar'`, and assign it to the variable `sObj`.
 * Log `sObj`.
 * Expected: `sObj = { value: 'Something', foo: 'bar' }`.
 */

// 6th solution

v1.foo = 'bar'

const sObj = v1

console.log(sObj)

/* TODO:
 * Copy an array and prepend one element.
 * In one expression, make a copy of the variable v4, add the element
 * 100 to the front of the array, and assign it to the variable `sArr`.
 * Log `sArr`.
 * Expected: `sArr = [100, 3, 5, 7, 9]`.
 */



const ten = [10]

const sArr = [...ten, ...v4]


console.log(sArr)
