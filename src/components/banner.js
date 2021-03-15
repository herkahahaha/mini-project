import * as React from "react";
import { BannerImg } from "./icons";
import styled from "styled-components";

const HeaderStyle = styled.div`
  background-color: #ed6362;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  .header__content {
    margin-left: 150px;

    button {
      width: 200px;
      height: 68px;
      padding: 1rem;
      border-radius: 50px;
      background-color: var(--light-yellow);
      border: none;
      color: var(--light);
      font-size: 1rem;
      font-weight: 700;
    }
  }
  .header__logo {
    img {
      width: 650px;
      transform: translate(-10%, -5%);
      z-index: -1;
    }
  }
`;

const Banner = () => {
  return (
    <HeaderStyle>
      <div className="header__content">
        <h2>The Easiest Way to Bring Employees Up to Speed </h2>
        <p>
          We help companies optimize employee development in a rapidly changing
          environment
        </p>
        <button>Take me there &#10095;</button>
      </div>
      <div className="header__logo">
        <img src={BannerImg} alt="logo" />
      </div>
    </HeaderStyle>
  );
};
export default Banner;
