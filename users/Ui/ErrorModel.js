import React from "react";
import Button from "./Button";
import Card from "./Card";
import classes from "../Ui/ErrorModel.module.css";

const ErrorModel = (props) => {

  return (
    <div className={classes.container} onClick={props.errorHandler}>
      <Card className={classes.model}>
        <header className={classes.header}>
          <h2>{props.error.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.error.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.errorHandler}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModel;
