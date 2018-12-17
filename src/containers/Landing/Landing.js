import React, { Component } from "react";
import styled from "styled-components";
import { SectionDivider } from "../../styledComponents/styledComponents";
import Footer from "../../components/Navigation/footer";
import Header from "../Header/Header";
import About from "../About/About";
import Skill from '../Skill/Skill'
import Works from '../Works/Works';
import Contact from '../Contact/Contact'

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
        <Skill />
        <SectionDivider>&lt; Works &gt;</SectionDivider>
        <Works />
        <SectionDivider>&lt;/ Works &gt;</SectionDivider>
        <SectionDivider>&lt; Contact &gt;</SectionDivider>
        <Contact />
        <SectionDivider>&lt;/ Contact &gt;</SectionDivider>
        <Footer />
      </Wrapper>
    );
  }
}

export default Landing;
