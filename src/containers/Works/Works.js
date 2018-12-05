import React, { Component } from "react";
import styled from "styled-components";
import Slide from "../../components/Works/slide";
import work1 from "./img/work1.jpg";
import work2 from "./img/om.png";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const SectionDivider = styled.p`
  font-size: 3rem;
  color: #fc00a6;
  margin: 0 5%;
`;

class Works extends Component {

  render() {
    return (
      <Wrapper id="works">
        <SectionDivider>&lt; Works &gt;</SectionDivider>
        <Slide
          id="slide01"
          projectNum="Project 01"
          projectTitle="Videomaker"
          projectDesc="Artist demo Website"
          demoHref="https://greensock.com/gsap"
          githubHref="https://greensock.com/gsap"
          bcg={work1}
        />
        <Slide
          id="slide02"
          projectNum="Project 02"
          projectTitle="Orizzonte Marino"
          projectDesc="Bed & Breakfast Website"
          demoHref="https://greensock.com/gsap"
          githubHref="https://greensock.com/gsap"
          bcg={work2}
        />
        <SectionDivider>&lt;/ Works &gt;</SectionDivider>
      </Wrapper>
    );
  }
}

export default Works;
