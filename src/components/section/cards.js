import * as React from "react";
import styled from "styled-components";
// import Clipboard from "./icons/clipboard";
// import Idea from "./icons/idea";
// import Rewards from "./icons/rewards";
import { Clipboard, Idea, Rewards } from "../icons";

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: -120px 150px 0;
  .project {
    width: 349px;
    height: auto;
    margin: 1rem;
    background-color: #ffff;
    box-shadow: 9px 12px 61px rgba(0, 0, 0, 0.08);
    border-radius: 50px;
    text-align: center;
    padding: 2rem;
    .card-title {
      font-size: 24px;
      font-weight: 700;
    }
    p {
      font-size: 18 px;
      font-weight: 400;
      color: var(--dark-grey);
    }
    svg {
      width: 72px;
      height: auto;
    }
  }
`;

const Cards = () => {
  return (
    <Card>
      <div className="project">
        <Clipboard className="card-icon" />
        <div className="card-title">Automate Everything</div>
        <p>
          Create repeatable, standardized employee journeys consisting of
          training specific tasks required for each role.
        </p>
      </div>
      <div className="project">
        <Idea />
        <div className="card-title">Part of Your Journey</div>
        <p>
          Create repeatable, standardized employee journeys consisting of
          training specific tasks required for each role.
        </p>
      </div>
      <div className="project">
        <Rewards />
        <div className="card-title">Achieve More Thing</div>
        <p>
          Create repeatable, standardized employee journeys consisting of
          training specific tasks required for each role.
        </p>
      </div>
    </Card>
  );
};

export default Cards;
