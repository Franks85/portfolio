import React, { Component } from "react";
import styled from "styled-components";
import Toggle from "../../Utilities/Toggle";
import { Spring, config, animated } from "react-spring";
import { TimelineMax, Power2 } from "gsap/all";

const MobileNavContainer = styled(animated.div)`
  
`;

const MobileNavToggleLabelIcon = styled(animated.div)`
  position: relative;
  width: 5rem;
  height: 4px;
  background-color: rgb(255, 0, 225);
  display: inline-block;
  margin-top: 3rem;
`;

const MobileNavToggleLabelIconTop = styled(MobileNavToggleLabelIcon)`
  position: absolute;
  left: 0;
  top: -1rem;
`;

const MobileNavToggleLabelIconBottom = styled(MobileNavToggleLabelIcon)`
  position: absolute;
  left: 0;
  top: 1rem;
`;

const MobileNavToggleLabel = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  cursor: pointer;
  position: fixed;
  top: 2rem;
  right: 4rem;
  z-index: 200;
`;

const MobileNav = styled(animated.nav)`
  
  background-color: #00457C;
  position: fixed;
  width: 30vw;
  top: 0;
  right: 0;
  z-index: 150;
`;

const MobileNavList = styled.ul`
  list-style: none;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

const MobileNavItem = styled.li`
  margin: 2rem 0;
`;

const MobileNavLink = styled.a`
  &:link,
  :visited {
    display: inline-block;
    font-size: 2.8rem;
    color: rgba(222, 53, 202, 0.78);
    letter-spacing: 0.3rem;
    padding: 0.8rem 1.6rem;
    text-decoration: none;
    text-transform: uppercase;
    background: linear-gradient(
      120deg,
      transparent 0%,
      transparent 50%,
      rgba(222, 53, 202, 0.78) 50%
    );
    background-size: 240%;
    transition: all 0.6s;
  }
  &:hover,
  :active {
    background-position: 100%;
    color: #fff;
    transform: translateX(1rem);
  }
`;

class MobileNavigation extends Component {

  constructor() {
    super();
    this.tl = new TimelineMax({paused: true});
  }

  handleMenuHoverEnter = () => {
    const line1 = document.getElementsByClassName('menuLabelTop');
    const line2 = document.getElementsByClassName('menuLabel');
    const line3 = document.getElementsByClassName('menuLabelBottom');
    const lines = [line1, line2, line3];
    
    this.tl.staggerTo(lines, .2, {scaleX: 1.5, repeat: 1, yoyo: true, ease: Power2.easeInOut}, .1).play();
  }

  render() {
    const Content = ({
      toggle,
      open,
      iconBg,
      iconRotation,
      iconPos,
      opacity,
      navExpand
    }) => (
      <MobileNavContainer>
        <MobileNavToggleLabel onClick={toggle} onMouseEnter={this.handleMenuHoverEnter}>
          <MobileNavToggleLabelIconTop
            style={{
              backgroundColor: iconBg.interpolate(iconBg => iconBg),
              transform: iconRotation.interpolate(
                iconRotation => `rotate(${iconRotation}deg)`
              ),
              top: iconPos.interpolate(iconPos => iconPos)
            }}
            className='menuLabelTop'
          />
          <MobileNavToggleLabelIcon
            style={{ opacity: opacity.interpolate(opacity => opacity) }}
            className='menuLabel'
          />
          <MobileNavToggleLabelIconBottom
            style={{
              backgroundColor: iconBg.interpolate(iconBg => iconBg),
              transform: iconRotation.interpolate(
                iconRotation => `rotate(-${iconRotation}deg)`
              ),
              top: iconPos.interpolate(iconPos => iconPos)
            }}
            className='menuLabelBottom'
          />
        </MobileNavToggleLabel>

        <MobileNav
          style={{
            transform: open.interpolate(open => `translate3d(0, ${open}rem, 0)`),
            height: navExpand.interpolate(navExpand => `${navExpand}vh`)
          }}
        >
          <MobileNavList>
            <MobileNavItem>
              <MobileNavLink href="#about" onClick={toggle}>
                About
              </MobileNavLink>
            </MobileNavItem>
            <MobileNavItem>
              <MobileNavLink href="#works" onClick={toggle}>
                Works
              </MobileNavLink>
            </MobileNavItem>
            <MobileNavItem>
              <MobileNavLink href="#contact" onClick={toggle}>
                Contact
              </MobileNavLink>
            </MobileNavItem>
          </MobileNavList>
        </MobileNav>
      </MobileNavContainer>
    );
    return (
      <Toggle>
        {({ on, toggle }) => (
          <Spring
            native
            config={config.default}
            to={{
              open: on ? 0 : -100,
              iconBg: "rgb(255, 0, 225)",
              iconRotation: on ? 135 : 0,
              iconPos: on ? 0 : "",
              opacity: on ? 0 : 1,
              navExpand: on ? 100 : 0
            }}
            toggle={toggle}
            children={Content}
          />
        )}
      </Toggle>
    );
  }
}

export default MobileNavigation;
