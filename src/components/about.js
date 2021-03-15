import * as React from "react";
import styled from "styled-components";
import { Search } from "./icons";
import Img1 from "./assets/about/about-1.png";
// import BoxYellow from "./assets/about/box-yellow.png";
import Img2 from "./assets/about/about-2.png";
import Img3 from "./assets/about/about-3.png";

const SearchBox = styled.div`
  text-align: center;
  margin: 5rem 150px;
  /* transform: translate(30%, -50%); */
  .forms {
    display: inline-flex;
    flex: 1 1 300px;
    border: 1px solid var(--dark);
    border-radius: 5px;
    overflow: hidden;
    width: 700px;
  }
  .search-box {
    border: 0;
    padding: 0.5rem 0.5rem 0.5rem 2rem;
    flex: 1;
    background-color: var(--light);
  }
  svg {
    width: 50px;
    height: 50px;
    background-color: var(--light);
  }
`;

const Container = styled.div`
  margin: 0 auto;
  position: relative;
  width: 800px;

  .items {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    padding: 1rem;
    .image {
      flex: 1;
      margin: 0 0 0 3rem;
      /* position: absolute; */

      &-about {
        z-index: 2;
        height: 250px;
      }
    }

    .content {
      /* background-color: var(--light); */
      text-align: right;
      &__2 {
        text-align: left;
      }
      p {
        color: var(--dark-grey);
      }
      padding: 2rem;
      flex: 2;
    }
  }
`;

const About = () => {
  return (
    <>
      <SearchBox>
        <div className="forms">
          <Search />
          <input
            className="search-box"
            type="search"
            placeholder="Let’s search anything you want"
            name="search"
          />
        </div>
      </SearchBox>

      <Container>
        <div className="items">
          <div className="image image-1">
            <img className="image-about about__1" src={Img1} alt="about-1" />
            {/* <img className="image-box" src={BoxYellow} alt="box-yellow" /> */}
          </div>
          <div className="content">
            <h3>Automate Job Processes</h3>
            <p>
              Create repeatable, standardized employee journeys consisting of
              training specific tasks required for each role. Create repeatable,
              standardized employee journeys consisting of training specific
              tasks required for each role.
            </p>
          </div>
        </div>
      </Container>
      <Container>
        <div className="items">
          <div className="content content__2">
            <h3>Automate Job Processes</h3>
            <p>
              Create repeatable, standardized employee journeys consisting of
              training specific tasks required for each role. Create repeatable,
              standardized employee journeys consisting of training specific
              tasks required for each role.
            </p>
          </div>
          <div className="image image-2">
            <img className="image-about about__2" src={Img2} alt="about-2" />
            {/* <img className="image-box" src={BoxYellow} alt="box-yellow" /> */}
          </div>
        </div>
      </Container>
      <Container>
        <div className="items">
          <div className="image image-3">
            <img className="image-about about__1" src={Img3} alt="about-3" />
            {/* <img className="image-box" src={BoxYellow} alt="box-yellow" /> */}
          </div>
          <div className="content">
            <h3>Automate Job Processes</h3>
            <p>
              Create repeatable, standardized employee journeys consisting of
              training specific tasks required for each role. Create repeatable,
              standardized employee journeys consisting of training specific
              tasks required for each role.
            </p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default About;
