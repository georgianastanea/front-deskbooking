import axios from "axios";
import { useRef } from "react";
import qs from "qs";
import { useNavigate } from "react-router-dom";

import classes from "./LoginForm.module.css";
const url = "http://localhost:8080/login";

const LoginForm = () => {
  const usernameInputRef = useRef();
  const passwordInputRef = useRef();
  const navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredUsername = usernameInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    const data = { username: enteredUsername, password: enteredPassword };
    const options = {
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      data: qs.stringify(data),
      url,
    };
    axios(options).then((response)=>{
      sessionStorage.setItem("auth", response.data.access_token);
      console.log(response.data.access_token);
      navigate("/calendar");
    });
  };

  return (
    <section className={classes.auth}>
      <h1>Login</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            ref={usernameInputRef}
            placeholder="Insert here..."
            required
          />
        </div>
        <div className={classes.control}>
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
          <button>Login</button>
        </div>
      </form>
    </section>
  );
};

export default LoginForm;
