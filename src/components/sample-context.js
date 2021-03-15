import React, { useContext } from "react";
import { SampleContext } from "../context";

const SampleContext = () => {
  // get data / func from our context
  const { addData, login, logout } = useContext(SampleContext);

  // our state
  const [email, setEmail] = React.useState;
  const [password, setPassword] = React.useState;
  const handleSubmit = (e) => {
    e.preventDefault();
    addData(email, password);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          value={email}
          type="email"
          name="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          value={password}
          type="password"
          name="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </form>
    </>
  );
};

export default SampleContext;
