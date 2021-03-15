import React from "react";
import styled from "styled-components";
import Modal from "./modal";

const Container = styled.div`
  background-color: var(--red-wine);
  margin: 0;
  .nav {
    margin: 0 150px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--light);
  }
  ul {
    a {
      text-decoration: none;
      color: var(--light);
      cursor: pointer;
      padding: 5px;
      &:hover {
        background-color: var(--light);
        color: var(--red-wine);
        border-radius: 20px;
      }
    }
    li {
      display: inline-block;
      padding: 1rem;
    }
  }
`;
const Navigation = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <Container>
      <div className="nav">
        <div className="nav-logo">
          <h2>Logo</h2>
        </div>
        <ul>
          <li>Menu 1</li>
          <li>Menu 2</li>
          <li>Menu 3</li>
          <li>
            <a href="#" onClick={() => setOpen(!open)}>
              Sign In
            </a>
          </li>
        </ul>
        <Modal openModal={open} />
      </div>
    </Container>
  );
};
export default Navigation;
