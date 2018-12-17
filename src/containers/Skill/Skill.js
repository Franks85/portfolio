import React, { Component } from "react";
import styled from "styled-components";
import { media } from "../../styledComponents/mediaQueryHelper";
import SkillContainerDesktop from '../../components/Skill/DesktopAnim';
import SkillContainerMobile from '../../components/Skill/MobileAnim'

const Wrapper = styled.div`
  height: 65rem;
  ${media.lessThan("desktop")`
    height: 75rem;
  `};
`;

class Skill extends Component {
  render() {
    return (
      <Wrapper id="skill">
        <SkillContainerDesktop />
        <SkillContainerMobile />
      </Wrapper>
    );
  }
}

export default Skill;
