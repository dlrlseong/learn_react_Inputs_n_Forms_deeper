import { useEffect, useRef, useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [nameIsValid, setNameIsValid] = useState(false);
  const [nameIsTouched, setNameIsTouched] = useState(false);

  useEffect(() => {
    if (nameIsValid) {
      console.log("Name Input is valid!");
    }
  }, [nameIsValid]);

  // get data from useRef
  const inputNameRef = useRef();

  // get data from onChangeHandler
  const inputOnChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const inputOnBlurHandler = (event) => {
    setNameIsTouched(true);
    if (enteredName.trim() === "") {
      setNameIsValid(false);
      return;
    }
    setNameIsValid(true);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    setNameIsTouched(true);

    if (enteredName.trim() === "") {
      setNameIsValid(false);
      return;
    }

    setNameIsValid(true);

    console.log(enteredName);
    console.log(inputNameRef.current.value);

    setEnteredName("");
  };

  const nameInputIsInvalid = !nameIsValid && nameIsTouched;

  return (
    <form onSubmit={formSubmitHandler}>
      <div
        className={
          !nameInputIsInvalid ? "form-control" : "form-control invalid"
        }
      >
        <label htmlFor="name">Your Name</label>
        <input
          ref={inputNameRef}
          type="text"
          id="name"
          onChange={inputOnChangeHandler}
          value={enteredName}
          onBlur={inputOnBlurHandler}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
