import styled from "styled-components";

const FooterSection = styled.div`
  background-color: #0d1c2e;
  color: #f4f4f4;
  .footer-content {
    margin: 0 100px;
    padding: 2rem;
    display: flex;
    align-items: center;
    ul li {
      list-style: none;
    }
  }
`;

const Footer = () => {
  return (
    <FooterSection>
      <div className="footer-content">
        <div className="content-1">
          <h1>Logo Here</h1>
          <p>Privacy Policy.</p>
          <small>Copyright Absolute Collective 2020, All Rights Reserved</small>
        </div>
        <ul className="content-2">
          <li>Home</li>
          <li>About</li>
          <li>Service</li>
        </ul>

        <ul className="content-3">
          <li>Course</li>
          <li>Benefit</li>
          <li>Rewards</li>
        </ul>

        <ul className="content-4">
          <li>Content 1</li>
          <li>Content 2</li>
          <li>Content 3</li>
        </ul>
        <ul className="content-5">
          <li>Instagram</li>
          <li>Facebook</li>
          <li>Youtube</li>
        </ul>
      </div>
    </FooterSection>
  );
};

export default Footer;
