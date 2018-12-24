import React, { Component } from "react";
import styled from "styled-components";
import { TimelineLite, CSSPlugin, Back } from "gsap/all";
import ScrollMagic from "scrollmagic";
import { Icon } from "../../Utilities";
import { media } from "../../styledComponents/mediaQueryHelper";

// eslint-disable-next-line
const plugins = [CSSPlugin];

const WheelBox = styled.div`
  padding: 1% 0;
  display: flex;
  align-items: center;
  justify-content: left;
  visibility: hidden;
  opacity: 0;
  .info-text {
    margin: 0 5%;
    a {
      text-decoration: none;
      color: #e362d3;
      &:hover {
        color: #8b92dd;
      }

      font-size: 3rem;
    }
  }
  .info-icon {
    z-index: 5;
  }
`;

class Wheel extends Component {
  constructor(props) {
    super(props);
    this.mainTl = new TimelineLite({ paused: true });
    this.clearTl = new TimelineLite({ paused: true });
  }

  clearStage = () => {
    return this.clearTl
      .set('.wheel-box', {autoAlpha: 1})
      .set(".info-icon", { autoAlpha: 0, x: "800%" })
      .set(".info-text", { scaleX: 0, transformOrigin: "0% 0%" })
      .set(".link", { autoAlpha: 0, x: -30 })
      .play();
  };

  componentDidMount() {
   const tween = this.mainTl
      .add(this.clearStage(), "clear")
      .to('.mail', .5, {autoAlpha: 1, y: 0})
      .to(
        ".info-icon",
        1.5,
        { autoAlpha: 1, x: "0%", rotation: 360 },
        "clear+=1"
      )
      .to(".info-text", 1, { scaleX: 1, x: -70, ease: Back.easeOut }, "-=.5")
      .to(".hands", 0.6, { scale: 0 })
      .to(".link", 0.6, { autoAlpha: 1, x: 0 })
      .to('.social-link', .5, {x: -100})
      .play();

      const controller = new ScrollMagic.Controller();

      const scene = new ScrollMagic.Scene({
        triggerElement: '#contact',
        triggerHook: 0,
        offset: -150
      })
        .setTween(tween)
        .addTo(controller);
      scene.reverse(false)
  }

  render() {
    const { info, name, href } = this.props;
    return (
      <WheelBox className='wheel-box'>
        <div className="info-icon">
          <Icon name="handsCircle" width="70" height="70" className="hands" />
        </div>
        <div className="social-link">
          <Icon
            name={name}
            color="rgb(255,0,225)"
            width="50"
            height="50"
            className="link"
          />
        </div>
        <p className="info-text">
          <a href={href}>{info}</a>
        </p>
      </WheelBox>
    );
  }
}

export default Wheel;
