import classes from "./UserForm.module.css";
import Button from "../Ui/Button";
import Card from "../Ui/Card";
import { useState } from "react";
import ErrorModel from "../Ui/ErrorModel";
const UserForm = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();
  const submitHandler = (event) => {
    event.preventDefault();
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({title : 'invalid data', message : 'Please enter the Name or Age properly'});
      return;
    }
    if (enteredAge < 1) {
        setError({title : 'Invalid Age', message : 'Please enter the Age > 0'});
        return;
    }
    props.getUsersList(enteredName, enteredAge);
    setEnteredName("");
    setEnteredAge("");
  };
  const ageHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const nameHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const errorHandler = () => {
    setError(null);
  }
  return (
    <div>
      {error && <ErrorModel error = {error} errorHandler = {errorHandler}/>}
      <Card className={classes.input}>
        <form onSubmit={submitHandler}>
          <label htmlFor="userName">UserName</label>
          <input
            id="userName"
            type="text"
            value={enteredName}
            onChange={nameHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={ageHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default UserForm;
