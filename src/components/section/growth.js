import React from "react";
import styled from "styled-components";
import Img1 from "../assets/col-img-1.png";
import Img2 from "../assets/col-img-2.png";
import Img3 from "../assets/col-img-3.png";
import Img4 from "../assets/col-img-4.png";
import Img5 from "../assets/col-img-5.png";
import Img6 from "../assets/col-img-6.png";

const GrowtSec = styled.div`
  background-color: var(--light-yellow);
  height: 500px;
  margin: 5rem 0 12rem;
  padding: 1rem;
  /* display: grid;
  grid-template-columns: repeat(3, 1fr); */
  display: flex;
  .col-1 {
    position: relative;
    flex: 1;
    &__items {
      z-index: 1;
      position: absolute;
      padding: 0;
    }
    .items-1 {
      top: -8rem;
      left: 4rem;
    }
    .items-2 {
      top: 12rem;
      left: 5rem;
      height: 350px;
    }
    .items-3 {
      top: -4rem;
      left: -1rem;
    }
  }

  .col-2 {
    flex: 1;
    margin-top: 10rem;
    z-index: 1;
    text-align: center;
    color: var(--light);
    button {
      width: 200px;
      height: auto;
      padding: 1rem;
      border-radius: 50px;
      background-color: var(--dark-blue);
      border: none;
      color: var(--light);
      font-size: 1rem;
      font-weight: 700;
    }
  }

  .col-3 {
    flex: 1;
    position: relative;
    &__items {
      z-index: 1;
      position: absolute;
      padding: 0;
    }
    .items-4 {
      top: -2rem;
      right: 5rem;
      height: 350px;
    }
    .items-5 {
      top: 15rem;
      right: 3rem;
    }
    .items-6 {
      right: -1rem;
    }
  }
`;

const Growth = () => {
  return (
    <GrowtSec>
      <div className="col-1">
        <img className="col-1__items items-1" src={Img1} alt="img-1" />
        <img className="col-1__items items-2" src={Img2} alt="img-2" />
        <img className="col-1__items items-3" src={Img3} alt="img-3" />
      </div>
      <div className="col-2">
        <h1>Growth Everyday and Everywhere</h1>
        <button>Learn More</button>
      </div>
      <div className="col-3">
        <img className="col-3__items items-4" src={Img4} alt="img-4" />
        <img className="col-3__items items-5" src={Img5} alt="img-5" />
        <img className="col-3__items items-6" src={Img6} alt="img-6" />
      </div>
    </GrowtSec>
  );
};

export default Growth;
