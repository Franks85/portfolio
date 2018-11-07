import React, { Component } from "react";
import styled from "styled-components";
import MobileNavigation from "../../components/Navigation/mobileNavigation";
import { TimelineLite, CSSPlugin, TweenLite, Power2, Back, Linear } from "gsap/all";
import { SectionWrapper } from "../../styledComponents/styledComponents";
import { Icon } from "../../Utilities";
import { iconsData } from "./iconData";
import { pathData, logoDefs } from "./logoData";

const HeaderBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #1d1a1a;
  display: grid;
  grid-template-columns: repeat(12, minmax(min-content, 1fr));
  grid-template-rows: repeat(10, 6rem);
`;

const Logo = styled.div`
  grid-column: 2 / 4;
  grid-row: 2 / 6;
`;

const TitleBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(min-content, 1fr));
  grid-template-rows: repeat(2, 1fr);
  grid-column: 4 / 11;
  grid-row: 2 / 8;
`;

const IconBox = styled.div`
  align-self: center;
  justify-self: center;
`;

const ScrollBox = styled.div`
  grid-column: 7 / 9;
  grid-row: 9 / -1;
  display: flex;
`;

const ScrollArrow = styled.div`
  display: flex;
  flex: 1.3;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.3);
  cursor: pointer;
`;

const ScrollText = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const Text = styled.p`
  font-size: 2rem;
  transform: rotate(90deg);
  color: #fff;
`;

class Header extends Component {
  constructor(props) {
    super(props);
    this.tl = new TimelineLite({ paused: true });
    this.tlLogo = new TimelineLite({ paused: true, reversed: true });
    this.iconBox = [];
    this.path = [];
  }

  componentDidMount() {
    this.tl
      .staggerFromTo(
        this.iconBox,
        2,
        { y: -500, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          rotation: 360,
          transformOrigin: "center center",
          ease: Back.easeInOut
        },
        0.2
      )
      .fromTo(
        this.logoBox,
        1,
        { autoAlpha: 0, x: -300, scale: 0.1 },
        { autoAlpha: 1, x: 0, scale: 1, rotation: 10 },
        0
      )
      .set(this.scrollBox, { x: -1000 }, 0)
      .to(this.scrollBox, 2, { x: 0, ease: Power2.easeInOut }, "-=1.5")
      .fromTo(
        this.scroolArrow,
        1,
        { autoAlpha: 0.1, rotation: 90 },
        { autoAlpha: 1, rotation: 0 },
        "fade"
      )
      .fromTo(this.scrollText, 1, { autoAlpha: 0.1 }, { autoAlpha: 1 }, "fade")
      .play();

    this.tlLogo
      .staggerTo(this.path, 1, { strokeDashoffset: 0, ease: Linear.easeNone }, 0.3, 5)
      .fromTo(this.svg, 1, { fill: "url(#lgrad)" }, { fill: "transparent", ease: Power2.easeInOut}, '-=1.9').play();
  }

  handleScroll = () => {
    
  }

  render() {
    const icons = iconsData.map(item => {
      return (
        <IconBox innerRef={box => (this.iconBox[item.id] = box)} key={item.id}>
          <Icon name={item.name} color="#00457C" />
        </IconBox>
      );
    });

    const logoPath = pathData.map(item => {
      return (
        <path
          key={item.id}
          ref={path => (this.path[item.id] = path)}
          strokeDasharray={item.strokeDasharray}
          strokeDashoffset={item.strokeDasharray}
          id={item.id}
          d={item.d}
          stroke="#FC00A6"
          strokeWidth="5"
        />
      );
    });

    return (
      <SectionWrapper>
      
        <MobileNavigation />
        <HeaderBox>
          <Logo innerRef={box => (this.logoBox = box)}>
            <svg
              id="svg"
              ref={svg => (this.svg = svg)}
              fill="url(#lgrad)"
              width="255"
              height="255"
              viewBox="0 0 318 253"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0)">{logoPath}</g>
              {logoDefs}
            </svg>
          </Logo>
          <TitleBox>{icons}</TitleBox>
          <ScrollBox innerRef={box => (this.scrollBox = box)} onClick={this.handleScroll}>
            <ScrollArrow innerRef={box => (this.scroolArrow = box)}>
              <Icon name="arrowDown" width="60px" height="150px" color="#fff" />
            </ScrollArrow>
            <ScrollText>
              <Text innerRef={box => (this.scrollText = box)}>Works</Text>
            </ScrollText>
          </ScrollBox>
        </HeaderBox>
       
      </SectionWrapper>
    );
  }
}

export default Header;
