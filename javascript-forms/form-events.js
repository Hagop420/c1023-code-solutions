const inp = document.querySelectorAll('input');
const formSubmit = document.querySelector('form');

const handleFocus = (event) => {
  console.log(`${event.type} event fired`);
  console.log(`event.target.name: ${event.target.name}`);
};
const handleBlur = (event) => {
  console.log(`${event.type} event fired`);
  console.log(`event.target.name: ${event.type}`);
};
const handleInput = (event) => {
  console.log(`${event.target.name} event fired`);
  console.log(`event.target.value: ${event.target.value}`);
};

const handleSubmit = (e) => {
  e.preventDefault();
};

inp.forEach((inp) => {
  inp.addEventListener('focus', handleFocus);
  inp.addEventListener('blur', handleBlur);
  inp.addEventListener('input', handleInput);
});

formSubmit.addEventListener('submit', handleSubmit);
