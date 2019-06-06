import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  background-color: #1d1a1a;
`;
const Title = styled.div`
  flex: 0.2;
  margin: auto;
  h1 {
    font-size: 5rem;
    text-transform: uppercase;
    margin-top: 2rem;
    color: rgb(255, 0, 225);
  }
`;

const Content = styled.div`
  flex: 1;
  padding-left: 15%;
  p {
    font-size: 2.5rem;
    margin: 2rem 0;
    letter-spacing: .25rem;
    color: #fff;
  }
  
  ul {
    list-style: none;
  }
  li {
    font-size: 2.3rem;
    margin: 1.5rem 0;
    letter-spacing: .25rem;
    color: #28c3dd;
    a {
      &:link,
     &:visited {
      color: white;
      text-decoration: none;
    }
    &:hover,
    &:active {
      color:rgb(255, 0, 225);
    }
  }
}

`;

const credit = () => {
  return (
    <Wrapper>
      <Title>
        <h1 className="credit-title">Credit</h1>
      </Title>
      <Content>
        <p>SVG icons made by:</p>
        <ul className="credit-list">
          <li className="credit-el">
            Roundicons from{" "}
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>{" "}
            is licensed by{" "}
            <a
              href="http://creativecommons.org/licenses/by/3.0/"
              title="Creative Commons BY 3.0"
              target="_blank"
              rel="noopener noreferrer"
            >
              CC 3.0 BY
            </a>
          </li>
          <li className="credit-el">
            Speedometer {" "}
            <a href="https://www.freepik.com/free-vector/speedometer-symbol_793655.htm">
               designed by Freepik
            </a>
          </li>
          <li className="credit-el">
            Launching-business-concept{" "}
            <a href="https://www.freepik.com/free-vector/launching-business-concept_765064.htm">
              designed by Freepik
            </a>
          </li>
          <li className="credit-el">
            Computer icon{" "}
            <a href="https://www.freepik.com/free-vector/computer_3392083.htm">
              Designed by Rawpixel.com
            </a>
          </li>
        </ul>
      </Content>
    </Wrapper>
  );
};

export default credit;
