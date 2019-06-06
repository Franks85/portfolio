import React, { Component } from "react";
import styled from "styled-components";
import { Icon } from "../../Utilities";
import { media } from "../../styledComponents/mediaQueryHelper";
// eslint-disable-next-line
import { TimelineLite, CSSPlugin, Linear } from "gsap/all";
import ScrollMagic from "scrollmagic";
/* eslint import/no-webpack-loader-syntax: off */
import "imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap";

const Wrapper = styled.div`
  position: relative;
  height: 130rem;
  width: 100%;

  ${media.lessThan("desktop")`
    height: 55rem;
  `};
  ${media.lessThan("tablet")`
    height: 50rem;
  `};
  ${media.lessThan("phone")`
    height: 30rem;
    margin-top: 10%;
  `};
`;

const Box = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  height: 100%;
  width: 100%;
  .pin-wrapper {
    height: 100%;
  }

  .book {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 70%;
    width: 75%;
    ${media.lessThan("tablet")`
    top: 50%;
    height: 30rem;
    width: 80%;
  `};
  }
`;

class About extends Component {
  constructor(props) {
    super(props);
    this.tlBook = new TimelineLite({ paused: true });
  }

  componentDidMount() {
    const bookPath = document.getElementById("bookPath");
    const textPath1 = document.getElementsByClassName("textPath");
    const textPath2 = document.getElementsByClassName("textPath2");
    const ease = Linear.easeNone;

    const controller = new ScrollMagic.Controller();

    const tween = this.tlBook
      .set(textPath2, { autoAlpha: 0 })
      .set(textPath1, { strokeWidth: 0.4 })
      .to(bookPath, 1, { strokeDashoffset: 0, ease: ease })
      .staggerTo(
        textPath1,
        0.1,
        {
          strokeDashoffset: 0,
          stroke: "rgb(255,0,225)",
          ease: ease,
          fill: "#fff"
        },
        0.05
      )
      .to(textPath1, 2.5, { autoAlpha: 0 })
      .set(textPath2, { autoAlpha: 1, strokeWidth: 0.4 })
      .staggerTo(
        textPath2,
        0.1,
        {
          strokeDashoffset: 0,
          stroke: "rgb(255,0,225)",
          ease: ease,
          fill: "#fff"
        },
        0.05
      )
      .play();

    initScrollMagic();

    function initScrollMagic() {
      const scene = new ScrollMagic.Scene({
        triggerElement: "#about",
        triggerHook: 0,
        duration: "100%"
      })
        .setPin("#about .pin-wrapper", { pushFollowers: false })
        .setTween(tween)
        .addTo(controller);
      return scene;
    }
  }

  render() {
    return (
      <Wrapper id="about">
        <Box>
          <div className="pin-wrapper">
            <div className="book">
              <Icon name="book" />
            </div>
          </div>
        </Box>
      </Wrapper>
    );
  }
}

export default About;
