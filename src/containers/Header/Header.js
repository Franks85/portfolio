import React, { Component } from "react";
import styled from "styled-components";
import MobileNavigation from "../../components/Navigation/mobileNavigation";
import {
  TimelineLite,
  TweenLite,
  ScrollToPlugin,
  CSSPlugin,
  Power2,
  Back,
  Linear
} from "gsap/all";
import { SectionWrapper } from "../../styledComponents/styledComponents";
import { Icon } from "../../Utilities";
import { iconsData } from "./iconData";
import { pathData, logoDefs } from "./logoData";
import { media } from "../../styledComponents/mediaQueryHelper";

// eslint-disable-next-line
const plugins = [CSSPlugin, ScrollToPlugin];

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
  ${media.lessThan("desktop")`
    grid-column: 3 / 10;
    grid-row: 2 / 6;
  `};
`;

const TabletTitleBox = styled.div`
  grid-column: 4 / 11;
  grid-row: 5 / 8;
  display: flex;
  h1 {
    margin: auto;
    font-family: "Rock Salt, san-serif";
    font-size: 6rem;
    color: #00457c;
    text-transform: uppercase;
    letter-spacing: 0.3rem;
    ${media.lessThan("phone")`
    font-size: 4rem;
    `};
  }
  ${media.greaterThan("desktop")`
    display: none;
  `};
  ${media.lessThan("phone")`
    grid-row: 6 / 8;
    margin-top: 1rem;
  `};
`;

const TitleBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(min-content, 1fr));
  grid-template-rows: repeat(2, 1fr);
  grid-column: 4 / 11;
  grid-row: 2 / 8;
  ${media.lessThan("desktop")`
    display: none;
  `};
`;

const IconBox = styled.div`
  align-self: center;
  justify-self: center;
`;

const ScrollBox = styled.div`
  grid-column: 7 / 9;
  grid-row: 9 / -1;
  display: flex;
  z-index: 10;
  ${media.lessThan("desktop")`
    grid-column: 6 / 9;
  `};
  ${media.lessThan("phone")`
    grid-column: 6 / 11;
  `};
`;

const ScrollArrow = styled.div`
  display: flex;
  flex: 1.3;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.3);
  cursor: pointer;
  ${media.lessThan("desktop")`
    flex: 1;
  `};
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
  ${media.lessThan("phone")`
    font-size: 1.6rem;
  `};
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
    TweenLite.from('.head-title', .8, {autoAlpha: 0, x: 100, ease: Power2.easeIn})
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
      .staggerTo(
        this.path,
        1,
        { strokeDashoffset: 0, ease: Linear.easeNone },
        0.3,
        2
      )
      .fromTo(
        this.svg,
        1,
        { fill: "url(#lgrad)" },
        { fill: "transparent", ease: Power2.easeInOut },
        "-=1.9"
      )
      .play();
  }

  handleScroll = () => {
    TweenLite.to(window, 0.8, { scrollTo: "#about" });
  };

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
          <TabletTitleBox>
            <h1 className='head-title'>Design</h1>
          </TabletTitleBox>
          <TitleBox>{icons}</TitleBox>
          <ScrollBox
            innerRef={box => (this.scrollBox = box)}
            onClick={this.handleScroll}
          >
            <ScrollArrow innerRef={box => (this.scroolArrow = box)}>
              <Icon name="arrowDown" width="60px" height="150px" color="#fff" />
            </ScrollArrow>
            <ScrollText>
              <Text innerRef={box => (this.scrollText = box)}>About me</Text>
            </ScrollText>
          </ScrollBox>
        </HeaderBox>
        <svg className="i">
          <use href="#arrow-bottom" />
        </svg>
      </SectionWrapper>
    );
  }
}

export default Header;
