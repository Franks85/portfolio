import React from "react";
import styled from "styled-components";
import { media } from "../../styledComponents/mediaQueryHelper";

const Wrapper = styled.div`
  height: 30rem;
  position: relative;
`;

const Copyright = styled.div`
  position: absolute;
  bottom: 15%;
  right: 10%;
  p {
    color: #fff;
    font-size: 1.6rem;
  }
`;

const LinkBox = styled.div`
  position: absolute;
  top: 20%;
  left: 15%;
  width: 20%;
  height: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${media.lessThan("phone")`
    left: 5%;
    width: 90%;
  `};
  ${media.lessThan("tablet")`
    left: 10%;
    width: 80%;
  `};
  a {
    flex: 1;
    margin: 0 5%;
    &:link,
    &:visited {
      font-size: 1.8rem;
      color: white;
      text-transform: uppercase;
      text-decoration: none;
      text-align: center;
      border: 2px solid rgba(255, 255, 255, 0.05);
      padding: 1.3rem;
    }
    &:hover,
    &:active {
      color: #b7ccff;
    }
  }
`;

const footer = () => {
  return (
    <Wrapper>
      <LinkBox>
        <a href="/credit" target="_blank" rel="noopener noreferrer">Credit</a>
      </LinkBox>
      <Copyright>
        <p>&copy; Erreffe Design</p>
      </Copyright>
    </Wrapper>
  );
};

export default footer;
