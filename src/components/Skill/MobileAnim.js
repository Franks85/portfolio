import React, { Component } from "react";
import styled from "styled-components";
import { Icon } from "../../Utilities";
import { TimelineMax, Power0, RoughEase, Power1, SlowMo, Back, TweenLite, TweenMax } from "gsap/all";
import ScrollMagic from "scrollmagic";
import { media } from "../../styledComponents/mediaQueryHelper";

const SkillContainerMobile = styled.div`
  height: 100%;
  opacity: 0;
  visibility: hidden;
  ${media.greaterThan("desktop")`
    display: none;
  `};
`;

const Title = styled.div`
  padding: 0 0 2% 0;
  h1 {
    color: rgb(255, 0, 225);
    font-size: 4rem;
    text-transform: uppercase;
    text-align: center;
  }
`;

const SvgContainer = styled.div`
  display: flex;
  flex-direction: column;
  .pc-mob, .speed-mob {
    flex: 1;
    margin: auto;
    position: relative;
  }
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
    .divider{
      height: 6rem;
    }
`;

class MobileAnim extends Component {
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
      .set(".skill-mobile", { autoAlpha: 1 })
      .set(".title-mob", { autoAlpha: 0, scale: 0, transformOrigin: '0% 50%' })
      .set(".flames-mob", { fill: "#a5ca00" })
      .set(".lancet-mob", { rotation: 180, transformOrigin: "-13% 16%" })
      .set(".text-mob", { autoAlpha: 0, y: "-=30px" })
      .set(".pc-mob", { x: "-300%" })
      .set(".pcVideo-mob", {
        fill: "#424242",
        scale: 0.01,
        transformOrigin: "center center"
      })
      .set(".speed-mob", { scale: 0, transformOrigin: "bottom center" })
      .play();
  };

  introAnim = () => {
    const videoPowerUp = this.tlVideoPowerUp
      .fromTo(".pcVideo-mob", 0.15, { fill: "#424242" }, { fill: "#000" })
      .play();
    const lancetFlickering = this.tlLancetFlickering
      .fromTo(
        ".lancet-mob",
        0.2,
        { rotation: 180, transformOrigin: "-13% 16%" },
        { rotation: 120 }
      )
      .play();

    return this.tlIntro
      .to(".title-mob", .5, { autoAlpha: 1, scale: 1 })
      .to(".pc-mob", .7, { x: "0%" })
      .add('pcIn')
      .to(".pcVideo-mob", 0.5, { scale: 1 }, "pcIn+=2")
      .add("powerUp")
      .to(
        ".text-mob",
        0.3,
        { autoAlpha: 1, y: 10, ease: Power1.easeOut })
      .to(".speed-mob", 1, { scale: 1 })
      .to(".text-mob", 0.2, { autoAlpha: 0, y: "+=10px", ease: Power1.easeOut })
      .set(".text-mob", { scale: 0.9, y: "-=30px", text: "Ready ?" })
      .to(".text-mob", 0.3, { autoAlpha: 1, y: "+=20px", ease: Power1.easeOut })
      .to(".text-mob", 1, {
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
    const lancetRotation1 = TweenLite.to(".lancet-mob", 0.5, { rotation: 120, ease: Back.easeOut });
    const lancetRotation2 = TweenLite.to(".lancet-mob", 0.5, { rotation: 70, ease: Back.easeOut });
    const lancetRotationStart = TweenLite.to(".lancet-mob", 0.4, { rotation: 0, ease: Back.easeOut });
    const lancetFinal = TweenMax.fromTo(
      ".lancet-mob",
      0.3,
      { rotation: -10 },
      { rotation: 0, immediateRender: false, repeat: -1, yoyo: true },
      "final+=.1"
    );

    const flamesFlickering1 = TweenMax.fromTo(
      ".flames-mob",
      0.2,
      { fill: "#ddff35" },
      { fill: "#c1fc1e", immediateRender: false, repeat: 7, yoyo: true }
    );
    const flamesFlickering2 = TweenMax.fromTo(
      ".flames-mob",
      0.2,
      { fill: "#fe7c00" },
      { fill: "#feac00", immediateRender: false, repeat: 7, yoyo: true }
    );
    const flamesFlickering3 = TweenMax.fromTo(
      ".flames-mob",
      0.2,
      { fill: "#ff3030" },
      { fill: "#fe7c00", immediateRender: false, repeat: 5, yoyo: true }
    );

    const flamesFinal = TweenMax.fromTo(
      ".flames-mob",
      0.3,
      { scale: 1, transformOrigin: "50% 50%" },
      { scale: 1.05, repeat: -1, yoyo: true },
      "final+=.1"
    );

    return this.tlFire
      .to(".text-mob", 0.3, { autoAlpha: 0, y: -10, ease: Power1.easeOut }, 'start')
      .set(".text-mob", { y: "-=30px", text: "CSS3 + HTML5" }, 'start+=.5')
      .to(".text-mob", 0.5, { autoAlpha: 1, y: 5, ease: Power1.easeOut })
      .add(lancetRotation1)
      .add(flamesFlickering1)
      .to(".text-mob", 0.3, { autoAlpha: 0, y: -10, ease: Power1.easeOut }, '+=.5')
      .set(".text-mob", { y: "-=20px", text: "GSAP Animations" })
      .to(".text-mob", 0.5, { autoAlpha: 1, y: 5, ease: Power1.easeOut })
      .add(lancetRotation2)
      .add(flamesFlickering2)
      .to(".text-mob", 0.3, { autoAlpha: 0, y: -10, ease: Power1.easeOut },'+=.5')
      .set(".text-mob", { text: "REACT JS" })
      .to(".text-mob", 0.5, { autoAlpha: 1, y: 5, ease: Power1.easeOut })
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
      .play();

      const controller = this.controller;

      const skillScene = new ScrollMagic.Scene({
        triggerElement: ".skill-mobile",
        triggerHook: 0,
        offset: -300
      })
        .setTween(mainTl)
        .addTo(controller);
  
      skillScene.reverse(false);
      
     }

  render() {
    return (
      <SkillContainerMobile className="skill-mobile">
        <Title className="title-mob">
          <h1>My Skills</h1>
        </Title>
        <SvgContainer>
          <div className="pc-mob">
            <Icon name="pc" width="240" height="240" />
            <div className="pc-text">
              <h1 className="text-mob">Skills indicator</h1>
            </div>
          </div>
          <div className="divider" />
          <div className="speed-mob">
            <Icon name="speedFlameMobile" height="280" width="340" />
          </div>
        </SvgContainer>
      </SkillContainerMobile>
    );
  }
}

export default MobileAnim;
