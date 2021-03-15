import React, { createContext } from "react";

export const SampleContext = createContext();

const SampleContextProvider = ({ children }) => {
  const [tempData, setTempData] = React.useState([]);
  const [modal, setModal] = React.useState(false);

  function addData({ email, password }) {
    // ....
    console.log(setTempData([...tempData, { email, password }]));
  }
  function login() {
    // ....
  }
  function logout() {
    // ....
  }

  function openModal() {
    setModal(true);
  }
  function closeModal() {
    setModal(false);
  }

  return (
    <SampleContext.Provider
      value={{ addData, login, logout, openModal, closeModal }}
    >
      {children}
    </SampleContext.Provider>
  );
};

export default SampleContextProvider;
