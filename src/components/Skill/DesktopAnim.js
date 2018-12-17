import React, { Component } from "react";
import styled from "styled-components";
import { Icon } from "../../Utilities";
import {
  TimelineMax,
  Power0,
  RoughEase,
  Power1,
  SlowMo,
  Back,
  TweenLite,
  TweenMax
} from "gsap/all";
import ScrollMagic from "scrollmagic";
import { media } from "../../styledComponents/mediaQueryHelper";

const SkillContainerDesktop = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, 1fr);
  opacity: 0;
  visibility: hidden;
  ${media.lessThan("desktop")`
    display: none;
  `};
`;

const Text = styled.div`
  grid-column: 3 / 7;
  grid-row: 1 / 3;
  h1 {
    color: rgb(255, 0, 225);
    font-size: 4rem;
    text-transform: uppercase;
    text-align: center;
  }
`;

const SvgContainer = styled.div`
  grid-column: 1 / -1;
  grid-row: 3 / -1;

  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, 1fr);
  .pc {
    grid-column: 1 / 5;
    grid-row: 2 / 7;
    margin: auto;
    position: relative;
    .fireBall,
    .pc-text {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    .pc-text {
      h1 {
        text-transform: uppercase;
        font-size: 3rem;
        color: rgb(255, 0, 225);
        text-align: center;
      }
    }
  }
  .speed {
    grid-column: 5 / 7;
    grid-row: 2 / 7;
  }
`;

class DeskAnim extends Component {
  constructor(props) {
    super(props);
    this.controller = new ScrollMagic.Controller();
    this.mainTl = new TimelineMax({ paused: true });
    this.tlClear = new TimelineMax({ paused: true });
    this.tlIntro = new TimelineMax({ paused: true });
    this.tlVideoPowerUp = new TimelineMax({
      paused: true,
      repeat: 5,
      yoyo: true
    });
    this.tlLancetFlickering = new TimelineMax({
      paused: true,
      repeat: 7,
      yoyo: true
    });
    this.tlFire = new TimelineMax({ paused: true });
  }

  clearStage = () => {
    return this.tlClear
      .set(".title", { y: "+=20px", autoAlpha: 0 })
      .set(".skill-desk", { autoAlpha: 1 })
      .set(".flames", { fill: "#a5ca00" })
      .set(".lancet", { rotation: 180, transformOrigin: "-13% 16%" })
      .set(".fireBall", { autoAlpha: 0 })
      .set(".text", { autoAlpha: 0, y: "-=20px" })
      .set(".pc", { x: "110%", y: "-20%", scale: 1.2 })
      .set(".pcVideo", {
        fill: "#dbdbdb",
        scale: 0.01,
        transformOrigin: "center center"
      })
      .set(".speed", { scale: 0, transformOrigin: "bottom center" })
      .play();
  };

  introAnim = () => {
    const videoPowerUp = this.tlVideoPowerUp
      .fromTo(".pcVideo", 0.1, { fill: "#424242" }, { fill: "#000" })
      .fromTo(".pcVideo", 0.1, { fill: "#dbdbdb" }, { fill: "#343434" })
      .play();
    const lancetFlickering = this.tlLancetFlickering
      .fromTo(
        ".lancet",
        0.2,
        { rotation: 180, transformOrigin: "-13% 16%" },
        { rotation: 120 }
      )
      .play();

    return this.tlIntro
      .to(".title", 1, { autoAlpha: 1, y: "0px" })
      .to(".pcVideo", 0.5, { scale: 1 }, "+=1")
      .add(videoPowerUp)
      .add("powerUp")
      .to(
        ".text",
        0.3,
        { autoAlpha: 1, y: "+=20px", ease: Power1.easeOut },
        "powerUp+=.5"
      )
      .to(".pc", 2, { x: "0%", y: "0%", scale: 1 }, "powerUp+=1")
      .to(".speed", 1, { scale: 1 })
      .to(".text", 0.2, { autoAlpha: 0, ease: Power1.easeOut })
      .set(".text", { scale: 0.9, text: "Ready ?" })
      .to(".text", 0.3, { autoAlpha: 1, ease: Power1.easeOut })
      .to(".text", 1, {
        scale: 1.2,
        ease: RoughEase.ease.config({
          template: Power0.easeNone,
          strength: 1,
          points: 60,
          taper: "none",
          randomize: true,
          clamp: false
        })
      })
      .add(lancetFlickering, "-=.5")
      .play();
  };

  fireAnim = () => {
    const path = [{ x: 0, y: -120 }, { x: 250, y: -360 }, { x: 445, y: -115 }];
    const textIn = TweenLite.to(".text", 0.5, {
      autoAlpha: 1,
      y: 10,
      ease: Power1.easeOut
    });
    const textOut = TweenLite.to(".text", 0.3, {
      autoAlpha: 0,
      y: -10,
      ease: Power1.easeOut
    });

    const lancetRotation1 = TweenLite.to(".lancet", 0.5, {
      rotation: 120,
      ease: Back.easeOut
    });
    const lancetRotation2 = TweenLite.to(".lancet", 0.5, {
      rotation: 70,
      ease: Back.easeOut
    });
    const lancetRotationStart = TweenLite.to(".lancet", 0.4, {
      rotation: 0,
      ease: Back.easeOut
    });
    const lancetFinal = TweenMax.fromTo(
      ".lancet",
      0.3,
      { rotation: -10 },
      { rotation: 0, immediateRender: false, repeat: -1, yoyo: true },
      "final+=.1"
    );

    const flamesFlickering1 = TweenMax.fromTo(
      ".flames",
      0.2,
      { fill: "#ddff35" },
      { fill: "#c1fc1e", immediateRender: false, repeat: 7, yoyo: true }
    );
    const flamesFlickering2 = TweenMax.fromTo(
      ".flames",
      0.2,
      { fill: "#fe7c00" },
      { fill: "#feac00", immediateRender: false, repeat: 7, yoyo: true }
    );
    const flamesFlickering3 = TweenMax.fromTo(
      ".flames",
      0.2,
      { fill: "#ff3030" },
      { fill: "#fe7c00", immediateRender: false, repeat: 5, yoyo: true }
    );

    const flamesFinal = TweenMax.fromTo(
      ".flames",
      0.3,
      { scale: 1, transformOrigin: "50% 50%" },
      { scale: 1.05, immediateRender: false, repeat: -1, yoyo: true },
      "final+=.1"
    );

    const fireBallMove = TweenMax.to(".fireBall", 2, {
      rotation: 600,
      bezier: { curviness: 0.3, values: path },
      ease: SlowMo.ease.config(0.9, 0.7, false)
    });
    const fireBallOut = TweenLite.fromTo(
      ".fireBall",
      1.5,
      {
        scale: 1.5,
        ease: RoughEase.ease.config({
          template: Power0.easeNone,
          strength: 2,
          points: 60,
          taper: "none",
          randomize: true,
          clamp: false
        })
      },
      {
        scale: 0,
        ease: RoughEase.ease.config({
          template: Power0.easeNone,
          strength: 2,
          points: 60,
          taper: "none",
          randomize: true,
          clamp: false
        })
      }
    );

    return this.tlFire
      .to(".text", 0.3, { autoAlpha: 0, y: -10, ease: Power1.easeOut })
      .set(".text", { y: "-=30px", text: "CSS3 + HTML5" })
      .to(".text", 0.5, { autoAlpha: 1, y: 10, ease: Power1.easeOut })
      .set(".fireBall", { autoAlpha: 1, scale: 1 })
      .to(".fireBall", 2, {
        rotation: 600,
        bezier: { curviness: 0.3, values: path },
        ease: SlowMo.ease.config(0.9, 0.7, false)
      })
      .fromTo(
        ".fireBall",
        1.5,
        {
          scale: 1.5,
          ease: RoughEase.ease.config({
            template: Power0.easeNone,
            strength: 2,
            points: 60,
            taper: "none",
            randomize: true,
            clamp: false
          })
        },
        {
          scale: 0,
          ease: RoughEase.ease.config({
            template: Power0.easeNone,
            strength: 2,
            points: 60,
            taper: "none",
            randomize: true,
            clamp: false
          })
        }
      )
      .set(".fireBall", { scale: 1, x: 0, y: -120, autoAlpha: 0 })
      .add(lancetRotation1)
      .add(flamesFlickering1)
      .to(".text", 0.3, { autoAlpha: 0, y: -20, ease: Power1.easeOut })
      .set(".text", { y: "-=20px", text: "GSAP Animations" })
      .to(".text", 0.5, { autoAlpha: 1, y: 10, ease: Power1.easeOut })
      .set(".fireBall", { autoAlpha: 1 })
      .to(".fireBall", 2, {
        rotation: 600,
        bezier: { curviness: 0.3, values: path },
        ease: SlowMo.ease.config(0.9, 0.7, false)
      })
      .fromTo(
        ".fireBall",
        1.5,
        {
          scale: 1.5,
          ease: RoughEase.ease.config({
            template: Power0.easeNone,
            strength: 2,
            points: 60,
            taper: "none",
            randomize: true,
            clamp: false
          })
        },
        {
          scale: 0,
          ease: RoughEase.ease.config({
            template: Power0.easeNone,
            strength: 2,
            points: 60,
            taper: "none",
            randomize: true,
            clamp: false
          })
        }
      )
      .set(".fireBall", { scale: 1, x: 0, y: -120, autoAlpha: 0 })
      .add(lancetRotation2)
      .add(flamesFlickering2)
      .add(textOut)
      .set(".text", { text: "REACT JS" })
      .add(textIn)
      .set(".fireBall", { autoAlpha: 1 })
      .add(fireBallMove)
      .add(fireBallOut)
      .add(lancetRotationStart)
      .add(flamesFlickering3)
      .add("final")
      .add(lancetFinal)
      .add(flamesFinal)
      .play();
  };

  componentDidMount() {
    const mainTl = this.mainTl
      .add(this.clearStage())
      .add(this.introAnim(), "intro")
      .add(this.fireAnim(), "fire")
      .timeScale(1.3)
      .play();

    const skillScene = new ScrollMagic.Scene({
      triggerElement: ".skill-desk",
      triggerHook: 0,
      offset: -100
    })
      .setTween(mainTl)
      .addTo(this.controller);

    skillScene.reverse(false);
  }

  render() {
    return (
      <SkillContainerDesktop className="skill-desk">
        <Text>
          <h1 className="title">My Skills</h1>
        </Text>
        <SvgContainer>
          <div className="pc">
            <Icon name="pc" width="280" height="280" />
            <div className="fireBall">
              <Icon name="fireBall" width="120" height="120" />
            </div>
            <div className="pc-text">
              <h1 className="text">Skills indicator</h1>
            </div>
          </div>

          <div className="speed">
            <Icon name="speedFlame" height="370" width="450" />
          </div>
        </SvgContainer>
      </SkillContainerDesktop>
    );
  }
}

export default DeskAnim;
