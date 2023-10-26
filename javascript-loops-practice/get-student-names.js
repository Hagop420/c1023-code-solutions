/* exported getStudentNames */
function getStudentNames(students) {
  const names = [];
  for (const key in students) {
    names.push(students[key].name);
    console.log(names);
  }
  return names;
}
console.log(getStudentNames());
