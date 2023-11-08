const $inp = document.querySelectorAll('input');
const $textarea = document.querySelector('textarea');

function handleFocus(event) {
  console.log(`${event.type} event fired`);
  console.log(`event.target.name: ${event.target.name}`);
}
function handleBlur(event) {
  console.log(`${event.type} event fired`);
  console.log(`event.target.name: ${event.type}`);
}
function handleInput(event) {
  console.log(`${event.target.name} event fired`);
  console.log(`event.target.value: ${event.target.value}`);
}

$inp.forEach((inp) => {
  $inp.addEventListener('focus', handleFocus);
  $inp.addEventListener('blur', handleBlur);
  $inp.addEventListener('input', handleInput);
});
$textarea.addEventListener('focus', handleFocus);
$textarea.addEventListener('blur', handleBlur);
$textarea.addEventListener('input', handleInput);
