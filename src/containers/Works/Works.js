import React, { Component } from "react";
import styled from "styled-components";
import work1 from "./img/work1.jpg";
// eslint-disable-next-line
import { TimelineLite, CSSPlugin, Power2 } from "gsap/all";
import ScrollMagic from "scrollmagic";
/* eslint import/no-webpack-loader-syntax: off */
import "imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators";
import "imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap";

const Wrapper = styled.div`
  position: relative;
  height: 65rem;
  width: 100%;
`;

const PinWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  perspective: 1000;
`;

const SlideContainer = styled.div`
  height: 100%;
  width: 300%;
`;

const Slide = styled.div`
  height: 100%;
  width: 33.3333%;
  float: left;
  border: 1px solid yellow;
  .bcg-start,
  .bc-primary {
  }
  .bc-primary {
  }
  .left {

    .content {
      h1 {
      }
      p {
      }
      .divider {
        border: 2px solid white;
        width: 10%;
        margin: 5% auto;
      }
      a {
      }
    }
  }

  .right {
    
    .slide-img {
    }
  }
`;

class Works extends Component {
  constructor(props) {
    super(props);
    this.tlSlide = new TimelineLite({ paused: true });
  }

  componentDidMount() {
    const controller = new ScrollMagic.Controller();

    const slideTween= this.tlSlide
                        .to(this.container, .5, {z: -150})
                        .to(this.container, 1, {x: '-33.3333%'})
                        .to(this.container, .5, {z: 0})
                        .to(this.container, .5, {z: -150}, '+=1')
                        .to(this.container, 1, {x: '-66.6666%'})
                        .to(this.container, .5, {z: 0})

    new ScrollMagic.Scene({
      triggerElement: "#pin-wrapper",
      triggerHook: 'onLeave',
      duration: "400%"
    })
      .setPin("#pin-wrapper")
      .setTween(slideTween)
      .addTo(controller);
  }

  render() {
    return (
      <Wrapper>
        <PinWrapper id="pin-wrapper">
          <SlideContainer innerRef={div => this.container = div}>
            <Slide style={{backgroundColor: 'yellow'}}>
              <div className="bcg-start" />
              <div className="bcg-primary" />
              <div className="left">
                <div className="content">
                  <h1>Project 01</h1>
                  <h2>Vdeomaker</h2>
                  <p>Artist demo website</p>
                  <div className="divider" />
                  <ul>
                    <li>
                      <a href='https://greensock.com/gsap'>Live Demo</a>
                    </li>
                    <li>
                      <a href='https://greensock.com/gsap'>Github Source Code</a>
                    </li>
                  </ul>
                </div>
              </div>
            </Slide>
            <Slide style={{backgroundColor: 'green'}}>
              <div className="bcg-start" />
              <div className="bcg-primary" />
              <div className="left">
                <div className="bcg" />
                <div className="content">
                  <h1>Project 02</h1>
                  <h2>Orizzonte Marino</h2>
                  <p>Bed & Breakfast website</p>
                  <div className="divider" />
                  <ul>
                    <li>
                      <a href='https://greensock.com/gsap'>Live Demo</a>
                    </li>
                    <li>
                      <a href='https://greensock.com/gsap'>Github Source Code</a>
                    </li>
                  </ul>
                </div>
              </div>
            </Slide>
            <Slide style={{backgroundColor: 'blue'}}>
              <div className="bcg-start" />
              <div className="bcg-primary" />
              <div className="left">
                <div className="bcg" />
                <div className="content">
                  <h1>Project 01</h1>
                  <h2>Vdeomaker</h2>
                  <hr />
                  <ul>
                    <li>
                      <a href='https://greensock.com/gsap'>Live Demo</a>
                    </li>
                    <li>
                      <a href='https://greensock.com/gsap'>Github Source Code</a>
                    </li>
                  </ul>
                </div>
              </div>
            </Slide>
          </SlideContainer>
        </PinWrapper>
      </Wrapper>
    );
  }
}

export default Works;
