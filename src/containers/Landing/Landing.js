import React, { Component } from "react";
import styled from "styled-components";
import Footer from "../../components/Navigation/footer";
import Header from "../Header/Header";
import About from "../About/About";
import Works from '../Works/Works';

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  background-color: #1d1a1a;
`;

class Landing extends Component {
  render() {
    return (
      <Wrapper>
        <Header />
        <About />
        <Works />
        
        <Footer />
      </Wrapper>
    );
  }
}

export default Landing;
