import React, { Component } from "react";
import styled from "styled-components";
import { TimelineLite, TweenLite, CSSPlugin, Power2 } from "gsap/all";
import ScrollMagic from "scrollmagic";
import { media } from "../../styledComponents/mediaQueryHelper";

const Wrapper = styled.div`
  flex: 1;
  overflow: hidden;
`;
const Slide = styled.div`
  height: 90%;
  width: 80%;
  margin: 5% 10%;
  display: flex;
  border: 2px solid #fc00a6;
  position: relative;
  ${media.lessThan("tablet")`
    width: 70%;
    margin: 5% 15%;
  `};
  ${media.lessThan("phone")`
    width: 90%;
    margin: 5%;
  `};
  .bcg-start,
  .bcg-primary {
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    z-index: 2;
  }
  .bcg-start {
    background-color: #1d1a1a;
    transform-origin: 100% 50%;
    transform: scaleX(0);
    ${media.lessThan("tablet")`
    display: none;
  `};
  }
  .bcg-primary {
    background-color: #fc00a6;
    transform-origin: 0% 50%;
    transform: scaleX(0);
    z-index: 10;
    ${media.lessThan("tablet")`
    display: none;
  `};
  }
  .left,
  .right {
    flex: 1;
    background-color: #1d1a1a;
    color: #fff;
  }

  .left {
    display: flex;

    .content {
      margin: auto;
      width: 80%;
      text-align: center;
      padding: 5% 0;
      .titleContainer {
        font-family: "Poppins", sans-serif;
        position: relative;
        --maskX: 0;
        --maskY: 50;
        .titleWrapper {
          cursor: pointer;
          h2 {
            font-size: 4rem;
            ${media.lessThan("phone")`
              font-size: 3rem;
            `};
          }
          p {
            font-size: 2.5rem;
            ${media.lessThan("phone")`
              font-size: 2rem;
            `};
         }
        }
        .cloneWrapper {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            color: #d46acf;
            transition: all 0.8s cubic-bezier(0.165, 0.84, 0.44, 1);
            clip-path: polygon(0 0, calc(var(--maskX) * 1% + (var(--maskY) - 50) * .4%) 0, calc(var(--maskX) * 1% + (var(--maskY) - 50) * -.4%) 100%, 0 100%);
          }
      }
      h1 {
        font-size: 3rem;
        color: #fc00a6;
      }

      
      .divider {
        border: 2px solid #fff;
        width: 20%;
        margin: 8% auto;
      }
      .link {
        ul {
          list-style: none;
        }
        li {
          padding-top: 5%;
        }
        a {
          text-decoration: none;
          color: #685734;
          &:hover {
            color: #8b92dd;
          }
          font-size: 2.5rem;
        }
      }
    }
  }
  .right {
    position: relative;
    ${media.lessThan("tablet")`
    display: none;
  `};
  }
`;

const SlideImg = styled.div`
  position: absolute; 
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('${props => props.background}') center / cover;
`;

class Project extends Component {

  constructor(props) {
    super(props);
    this.tlSlide = new TimelineLite({ paused: true });
    this.state = {
      x: 0,
      y: 0
    }
  }

  componentDidMount() {
    
    const currentProject = `#${this.props.id}`;
    TweenLite.set(currentProject, { autoAlpha: 0 });

    const content = `${currentProject} .content`,
          slideImg = `${currentProject} .slide-img`,
          bcgStart = `${currentProject} .bcg-start`,
          bcgPrimary = `${currentProject} .bcg-primary`;

    const introSlideTween = this.tlSlide
      .set(currentProject, { autoAlpha: 1 })
      .set(content, { x: "-50%", autoAlpha: 0 })
      .set(slideImg, { autoAlpha: 1 })
      .set(bcgStart, { scaleX: 1 })
      .to(bcgPrimary, 1, { scaleX: 0.5, ease: Power2.easeIn })
      .to(bcgPrimary, 0.5, { x: "50%", scaleX: 0 })
      .add("content")
      .to(content, 1, { x: "0%", autoAlpha: 1 }, "content-=.5")
      .to(
        bcgStart,
        1,
        { scaleX: 0.5, ease: Power2.easeIn },
        "-=1.5"
      )
      .to(bcgPrimary, 1, { scaleX: 0.5, ease: Power2.easeIn })
      .to(bcgPrimary, 0.5, { x: "100%", scaleX: 0 })
      .to(bcgStart, 1, { scaleX: 0, ease: Power2.easeIn }, "-=1.5")
      .play();

      const controller = new ScrollMagic.Controller();

      const slideScene = new ScrollMagic.Scene({
        triggerElement: currentProject,
        triggerHook: 0,
        offset: -150
      })
        .setTween(introSlideTween)
        .addTo(controller);

      slideScene.reverse(false);
  }

  _onMouseMove = (e) => {
    const width = this.title.clientWidth;
    const height = this.title.clientHeight;
    const oX = (e.nativeEvent.offsetX/width) * 100;
    const oY = (e.nativeEvent.offsetY/height) * 100;
    
    this.setState({
        x: oX,
        y: oY
    });
}

  _onMouseOut = () => {
      this.setState({
          x: 0,
          y: 0
      });
  }

  render() {
    const {x, y} = this.state;
    const maskStyle = {
            '--maskX': x,
            '--maskY': y
          }
    return (
      <Wrapper>
        <Slide id={this.props.id} className='slide'>
          <div className="bcg-start" />
          <div className="bcg-primary" />
          <div className="left">
            <div className="content">
              <h1>{this.props.projectNum}</h1>
              <div className="titleContainer"
                onMouseMove={this._onMouseMove}
                onMouseOut={this._onMouseOut}
                ref={div => this.title = div}
                style={maskStyle}
              >
                <div className="titleWrapper">
                  <h2>{this.props.projectTitle}</h2>
                  <p>{this.props.projectDesc}</p>
                </div>
                <div className="titleWrapper cloneWrapper">
                  <h2>{this.props.projectTitle}</h2>
                  <p>{this.props.projectDesc}</p>
                </div>
              </div>
              
              <div className="divider" />
              <div className="link">
                <ul>
                  <li>
                    <a href={this.props.demoHref}>Live Demo</a>
                  </li>
                  <li>
                    <a href={this.props.githubHref}>Github Source Code</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="right">
            <SlideImg className="slide-img" background={this.props.bcg} />
          </div>
        </Slide>
      </Wrapper>
    );
  }
}

export default Project;
