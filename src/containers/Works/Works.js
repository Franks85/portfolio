import React, { Component } from "react";
import styled from "styled-components";
import Slide from "../../components/Works/slide";
import work1 from './img/portfolio.png';
import work2 from "./img/work1.jpg";
import work3 from "./img/om.png";


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

class Works extends Component {

  render() {
    return (
      <Wrapper id="works">
        
        <Slide
          id="slide01"
          projectNum="Project 01"
          projectTitle="Erreffe Design"
          projectDesc="My portfolio Website"
          demoHref="https://greensock.com/gsap"
          githubHref="https://greensock.com/gsap"
          bcg={work1}
        />
        <Slide
          id="slide02"
          projectNum="Project 02"
          projectTitle="Videomaker"
          projectDesc="Artist demo Website"
          demoHref="https://greensock.com/gsap"
          githubHref="https://greensock.com/gsap"
          bcg={work2}
        />
        <Slide
          id="slide03"
          projectNum="Project 03"
          projectTitle="Orizzonte Marino"
          projectDesc="Bed & Breakfast Website"
          demoHref="https://greensock.com/gsap"
          githubHref="https://greensock.com/gsap"
          bcg={work3}
        />  
      </Wrapper>
    );
  }
}

export default Works;
