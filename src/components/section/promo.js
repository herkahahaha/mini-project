import * as React from "react";
import styled from "styled-components";

const Promo = styled.div`
  background-color: #44449c;
  height: 280px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: -2rem;
  padding: 0 3rem;
  h1 {
    color: #f4f4f4;
    margin-right: 2rem;
  }
  button {
    width: 310px;
    height: 100px;
    border-radius: 50px;
    border: 2px solid #f4f4f4;
    background-color: transparent;
    font-size: 2rem;
    color: #f4f4f4;
  }
`;

const PromoSection = () => {
  return (
    <Promo>
      <h1>So, what are you waiting for?</h1>
      <button>Join Now</button>
    </Promo>
  );
};
export default PromoSection;
