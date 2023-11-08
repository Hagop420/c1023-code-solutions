const $formSubmit = document.querySelector('form');

const handleSubmit = (e) => {
  e.preventDefault();
  //  const tt = formSubmit.elements["message"].value;

  const objStorageKeys = {
    name: $formSubmit.elements.name.value,
    email: $formSubmit.elements.email.value,
    Message: $formSubmit.elements.message.value,
  };
  $formSubmit.reset();
  console.log('messageData:', objStorageKeys);
};

$formSubmit.addEventListener('submit', handleSubmit);

// git purposes
