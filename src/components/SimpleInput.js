import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [nameIsValid, setNameIsValid] = useState(true);

  // get data from useRef
  const inputNameRef = useRef();

  // get data from onChangeHandler
  const inputOnChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (enteredName.trim() === "") {
      setNameIsValid(false);
      return;
    }

    setNameIsValid(true);

    console.log(enteredName);
    console.log(inputNameRef.current.value);

    setEnteredName("");
  };
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameIsValid ? "form-control" : "form-control invalid"}>
        <label htmlFor="name">Your Name</label>
        <input
          ref={inputNameRef}
          type="text"
          id="name"
          onChange={inputOnChangeHandler}
          value={enteredName}
        />
        {!nameIsValid && <p className="error-text">Name must not be empty.</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
