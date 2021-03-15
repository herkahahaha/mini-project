import React from "react";
import styled from "styled-components";
import { Shild } from "../icons";
import SignIn from "./signin";

const Container = styled.div`
  overflow-x: hidden;
  overflow-y: hidden;
`;

const ModalContainer = styled.div`
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
  .modal {
    background-color: #ffff;
    border-radius: 20px;
    padding: 1rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;

    &-logo svg {
      margin: 3rem;
      width: 200px;
      height: auto;
    }
    &-form {
      grid-column: 2 / span 3;
      padding: 2rem;
      h4 {
        margin-left: 1rem;
        color: var(--dark-blue);
      }
    }
  }
`;

const Modal = ({ openModal }) => {
  if (!openModal) {
    return null;
  }
  return (
    <Container>
      <ModalContainer>
        <div className="modal">
          <div className="modal-logo">
            <Shild />
          </div>
          <div className="modal-form">
            <h4>Please enter your email and password to sign in</h4>
            <SignIn />
          </div>
        </div>
      </ModalContainer>
    </Container>
  );
};

export default Modal;
