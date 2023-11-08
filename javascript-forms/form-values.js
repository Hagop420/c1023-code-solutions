const $formSubmit = document.querySelector('form');
const $mm = document.querySelector('#user-email').labels;

const handleSubmit = (e) => {
  e.preventDefault();
  //  const tt = formSubmit.elements["message"].value;

  const objStorageKeys = {
    name: $formSubmit.elements.name.value,
    email: $formSubmit.elements.email.value,
    Message: $formSubmit.elements.message.value,
  };
  console.log('messageData:', objStorageKeys);
  console.log($mm);
  $formSubmit.reset();
};

$formSubmit.addEventListener('submit', handleSubmit);

// git purposes
