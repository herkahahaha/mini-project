import React from "react";
import styled from "styled-components";
// import { Clipboard, Heart, Idea, Rewards, Shild } from "./icons";
import Clipboard from "../icons/icon/clipboard.svg";
import Heart from "../icons/icon/hearts.svg";
import Idea from "../icons/icon/idea.svg";
import Rewards from "../icons/icon/rewards.svg";
import Shild from "../icons/icon/shilds.svg";
import Tree from "../icons/icon/tree.svg";

const HereSec = styled.div`
  background-color: var(--dark-blue);
  padding: 2rem;
  color: var(--light);
  text-align: center;
  margin-bottom: 10rem;

  .container {
    margin: 2rem 5rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
    .content {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      /* width: 334px;
      height: 126px; */
      background-color: var(--light);
      border-radius: 24px;
      color: var(--dark);
      padding: 1rem;
      img {
        width: 65px;
        height: auto;
      }

      p {
        font-size: 1.25rem;
        font-weight: 700;
      }
    }
  }
`;
const data = [
  { preface: "More Rewards", image: Rewards },
  { preface: "More Course", image: Idea },
  { preface: "More Benefit", image: Heart },
  { preface: "More Rewards", image: Shild },
  { preface: "More Course", image: Tree },
  { preface: "More Benefit", image: Clipboard },
];
const Here = () => {
  return (
    <HereSec>
      <h2>We here, Just for You!</h2>
      <div className="container">
        {data.map((item, index) => {
          return (
            <div key={index} className="content">
              <img src={item.image} alt="icon" />
              <p>{item.preface}</p>
            </div>
          );
        })}
      </div>
      <small>And many more ..</small>
    </HereSec>
  );
};

export default Here;
