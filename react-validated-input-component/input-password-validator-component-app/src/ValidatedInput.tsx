// file imports
import { useState } from 'react';
// import { FaCheck, Fa } from 'react-icons/fa';

export function ValidatedInput() {
  // states
  const [isX, isIncorrect] = useState(true);

  // password state
  const [password, setPassword] = useState<string>('');

  // Password checking/completion form
  const [currValidate, isValidated] = useState('Password is required');

  // Checking if the user has stuff typing with the if statment

  // password value change
  const toggleTyping = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);

    const renderCurrPassword = e.target.value;

    if (renderCurrPassword.length < 8) {
      isValidated('Your Password is to short.');
      isIncorrect(true);
    } else {
      isValidated('Strong Password.');
      isIncorrect(false);
    }

    // reset password to 0 if the length of the pass is 0
    if (renderCurrPassword.length === 0) {
      isValidated('Password is required.');
    }
  };

  return (
    <>
      <div className="input-group">
        <label className="fs-2 m-3 text-center">
          Enter Password:
          <input
            className={
              isX
                ? 'is-invalid rounded form-control'
                : 'is-valid rounded form-control'
            }
            type="password"
            name="password_named"
            value={password}
            onChange={toggleTyping}
            id="pass"
          />
        </label>
        <div
          className={
            isX
              ? 'bg-danger text-light mb-3 p-2 m-auto rounded fs-6'
              : 'bg-success text-light mb-3 p-2 m-auto rounded fs-6'
          }>
          {currValidate}
        </div>
      </div>
    </>
  );
}
