import * as React from "react";
import styled from "styled-components";
import Axios from "axios";
// import { Link } from "react-router-dom";

const Forms = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  input {
    margin: 5px;
    padding: 10px;
    background-color: #f4f4f4;
    border: none;
    border-radius: 20px;
    color: var(--dark);
    font-size: 1rem;
    &:active,
    &:focus {
      border: 2px solid var(--dark-blue);
      outline: none;
    }
  }
  .feedback-text {
    color: var(--red-wine);
    font-weight: 400;
    margin-bottom: 0.8rem;
  }
  .checkbox {
    margin-bottom: 1rem;
    display: inline-flex;
    align-items: center;
    color: var(--dark);

    a {
      margin-left: 15rem;
      color: var(--red-wine);
      text-decoration: underline;
    }
  }
  button {
    border: none;
    border-radius: 20px;
    padding: 10px;
    font-size: 1.05rem;
    width: 100px;
    outline: none;
  }
`;

const ButtonSec = styled.div`
  display: flex;
  justify-content: flex-end;

  .signin {
    color: var(--light);
    background-color: var(--dark-blue);
  }
`;

const InvalidCredential =
  "https://run.mocky.io/v3/1b95ea69-d13a-41b6-9de8-8a656a6aef86";
const InvalidEmail =
  "https://run.mocky.io/v3/55399fe5-9390-4b6d-84ff-5a04f086c7a1";

const SignIn = () => {
  // local state
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();
  const [check, setCheck] = React.useState(false);
  // feedback
  const [feedbackEmail, setFeedbackEmail] = React.useState();
  const [feedbackPass, setFeedbackPass] = React.useState();

  async function getApi() {
    // sample fetch Mock API with Promise
    fetch(InvalidCredential)
      .then((response) => response.json())
      .then((json) => {
        console.log(json.errors[0].message);
      });
    fetch(InvalidEmail)
      .then((response) => response.json())
      .then((json) => {
        setFeedbackEmail(json.errors[0].message);
      });
    // sample using Async Await
    try {
      // const response = await Axios(
      //   "https://jsonplaceholder.typicode.com/todos/1"
      // );
      const response = await Axios(InvalidEmail, { email, password });
      const value = await response.data;
      console.log(value[0]);
    } catch (e) {
      // when api sent error data
      console.log(e.message);
      // setFeedbackEmail("Email not Found");
      setFeedbackPass("Wrong Password");
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    // call api
    getApi();
    setEmail("");
    setPassword("");
    setCheck(false);
  };
  return (
    <>
      <Forms onSubmit={handleSubmit}>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          required
        />
        <p className="feedback-text">{feedbackEmail}</p>
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          required
        />
        <p className="feedback-text">{feedbackPass}</p>
        <div className="checkbox">
          <input
            onClick={(e) => setCheck(!e.check)}
            value={check}
            type="checkbox"
            name="checkbox"
            id="checkbox"
          />
          <small> Remember Me</small>
          <a href="#">Forget your password?</a>
        </div>
        <ButtonSec>
          <button className="signin">Sign In</button>
        </ButtonSec>
      </Forms>
    </>
  );
};
export default SignIn;
