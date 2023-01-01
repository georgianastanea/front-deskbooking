import axios from "axios";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import classes from "./LoginForm.module.css";

const RegisterForm = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const usernameInputRef = useRef();
  const passwordInputRef = useRef();
  const emailInputRef = useRef();
  const firstNameInputRef = useRef();
  const lastNameInputRef = useRef();

  const submitHandler = async (event) => {
    event.preventDefault();
    const enteredPassword = passwordInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredFirstName = firstNameInputRef.current.value;
    const enteredLastName = lastNameInputRef.current.value;
    const user = {
     firstName: enteredFirstName,
     lastName: enteredLastName,
     email: enteredEmail,
    password: enteredPassword
      };

    setErrorMessage("");
    axios
      .post("http://localhost:8080/registration", user)
      .then(() => {
        setErrorMessage("");
        console.log("Created!");
        firstNameInputRef.current.value = "";
        lastNameInputRef.current.value = "";
        emailInputRef.current.value = "";
        passwordInputRef.current.value = "";
        
        
        alert('Please verify your email for confirmation!');
        window.location.replace('http://localhost:8080/login');
        // navigate("/login");
      })
      .catch((err) => {
        console.log(err.response.data.message);
        setErrorMessage(err.response.data.message);
      });
  };

  return (
    <section className={classes.auth}>
      <h1>Sign Up</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
        <div className={classes.control}>
          <label htmlFor="firstname">Firstname</label>
          <input
            type="text"
            id="firstname"
            ref={firstNameInputRef}
            placeholder="Insert here..."
            required
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="lastname">Lastname</label>
          <input
            type="text"
            id="lastname"
            ref={lastNameInputRef}
            placeholder="Insert here..."
            required
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            ref={emailInputRef}
            placeholder="Insert here..."
            required
          />
        </div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            ref={passwordInputRef}
            placeholder="Insert here..."
            required
          />
        </div>
       

        <div className={classes.actions}>
          <button >CREATE ACCOUNT</button>
        </div>
      </form>
    </section>
  );
};

export default RegisterForm;
