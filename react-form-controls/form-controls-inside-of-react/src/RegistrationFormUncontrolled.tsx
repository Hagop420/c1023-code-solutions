// import files
import { FormEvent } from 'react';

export function RegistrationFormUncontrolled() {
  const bl = {
    display: 'inline-flex',
    flexDirection: 'column',
    margin: '15px',
  };
  const blA = {
    display: 'block',
    margin: '10px auto',
  };

  function handleSubmit(e): FormEvent<HTMLFormElement> {
    e.preventDefault();

    const formReciever = document.getElementById('my_form');
    const dataReciever = new FormData(formReciever);

    // Converting the form values to an object
    const formDataObj = Object.fromEntries(dataReciever.entries());

    // Log the form values to the console using js destructuring method
    const { username, password } = formDataObj;

    // console.log(formDataObj)
    console.log({ username, password });
  }
  return (
    <form onSubmit={handleSubmit} id="my_form">
      <label htmlFor="use">
        Username
        <input
          type="text"
          id="use"
          name="username"
          placeholder="Username"
          style={bl}
        />
      </label>
      <label htmlFor="pass">
        Password
        <input
          type="password"
          id="pass"
          name="password"
          placeholder="Password"
        />
      </label>
      <button type="submit" style={blA}>
        Sign Up
      </button>
    </form>
  );
}
