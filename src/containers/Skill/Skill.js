import React, { Component } from "react";
import styled from "styled-components";
import { Icon } from "../../Utilities";
import { TimelineMax, CSSPlugin, TextPlugin, Power0, RoughEase, Power4, SlowMo, Back } from "gsap/all";
import ScrollMagic from "scrollmagic";

// eslint-disable-next-line
const plugin = [CSSPlugin, TextPlugin];

const Wrapper = styled.div`
  height: 65rem;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, 1fr);
  opacity: 0;
  visibility: hidden;
`;

const Text = styled.div`
  grid-column: 3 / 7;
  grid-row: 1 / 3;
  h1 {
    color: rgb(255,0,225);
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
    .fireBall, .pc-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
  .pc-text {
    h1 {
      text-transform: uppercase;
      font-size: 3rem;
      color: rgb(255,0,225);
      text-align: center;
    }
  }
  }
  .speed {
    grid-column: 5 / 7;
    grid-row: 2 / 7;
  }
`;

class Skill extends Component {
  constructor(props) {
    super(props);
    this.mainTl = new TimelineMax({ paused: true });
    this.tlClear = new TimelineMax({ paused: true }); 
    this.tlIntro = new TimelineMax({ paused: true });
    this.tlVideoPowerUp = new TimelineMax({ paused: true, repeat: 5, yoyo: true });
    this.tlLancetFlickering = new TimelineMax({ paused: true, repeat: 7, yoyo: true }); 
    this.tlFire = new TimelineMax({ paused: true });
  }

  clearStage = () => {
    return this.tlClear
      .set('.title', {y: '+=20px', autoAlpha: 0})
      .set('#skill', {autoAlpha: 1})
      .set('.flames', { fill: '#a5ca00'})
      .set('#lancet', {rotation: 180, transformOrigin: '-13% 16%'})
      .set('.fireBall', {autoAlpha: 0})
      .set('.text', {autoAlpha: 0, y: '-=20px'})
      .set('.pc', {x: '110%', y: '-20%', scale: 1.2})
      .set('#pcVideo', {fill: '#dbdbdb', scale: .01, transformOrigin: 'center center' })
      .set('.speed', {scale: 0, transformOrigin: 'bottom center'})
      .play()
  }

  introAnim = () => {
    
    const videoPowerUp = this.tlVideoPowerUp
                            .fromTo('#pcVideo', .1, {fill: '#424242'}, {fill: '#000'})
                            .fromTo('#pcVideo', .1, {fill: '#dbdbdb'}, {fill: '#343434'})
                            .play();
    const lancetFlickering = this.tlLancetFlickering
                              .fromTo('#lancet', .2, {rotation: 180, transformOrigin: '-13% 16%'}, {rotation: 120})
                              .play()

    return this.tlIntro
              .to('.title', 1, {autoAlpha: 1, y: '0px'})
              .to('#pcVideo', .5, {scale: 1}, '+=1.5')
              .add(videoPowerUp)
              .add('powerUp')
              .to('.text', .3, {autoAlpha: 1,  y: '+=20px', ease: Power4.easeOut}, 'powerUp+=.5')
              .to('.pc', 2, {x: '0%', y: '0%', scale: 1}, 'powerUp+=1')
              .to('.speed', 1, {scale: 1})
              .to('.text', .2, {autoAlpha: 0, y: '+=10px', ease: Power4.easeOut})
              .set('.text', {scale: .9, y: '-=30px', text: "Ready ?"})
              .to('.text', .3, {autoAlpha: 1, y: '+=20px', ease: Power4.easeOut})
              .to('.text', 1, {scale: 1.2, ease: RoughEase.ease.config({ template: Power0.easeNone, strength: 1, points: 60, taper: "none", randomize: true, clamp: false})})
              .add(lancetFlickering, '-=.5')
              .play()
  }

  fireAnim = () => {
    const path = [{x: 0, y: -120},{x: 250, y: -360},{x: 445, y: -115}];
    return this.tlFire
        .to('.text', .3, {autoAlpha: 0, ease: Power4.easeOut})
        .set('.text', {y: '-=30px', text: "CSS3 + HTML5"})
        .to('.text', .5, { autoAlpha: 1, y: '+=20px', ease: Power4.easeOut})
        .set('.fireBall', { autoAlpha: 1, scale: 1})
        .to('.fireBall', 2, {rotation: 600, bezier: {curviness: 0.3, values: path}, ease:SlowMo.ease.config(0.9, 0.7, false)})
        .fromTo('.fireBall', 1.5, {scale: 1.5,  ease: RoughEase.ease.config({ template: Power0.easeNone, strength: 2, points: 60, taper: "none", randomize: true, clamp: false}) }, {scale: 0, ease: RoughEase.ease.config({ template: Power0.easeNone, strength: 2, points: 60, taper: "none", randomize: true, clamp: false})})
        .set('.fireBall', {scale: 1, x: 0, y:-120, autoAlpha: 0})
        .to('#lancet', .5, {rotation: 120, ease: Back.easeOut })
        .fromTo('.flames', 0.2, {fill: '#fe7c00'}, {fill: '#a5ca00', immediateRender: false, repeat: 5, yoyo: true})
        .fromTo('.flames', 0.1, {fill: '#cad829'}, {fill: '#a5ca00', immediateRender: false, repeat: 5, yoyo: true})
        .to('.text', .3, {autoAlpha: 0, y: '+=10px', ease: Power4.easeOut})
        .set('.text', {y: '-=20px', text: "GSAP Animations"})
        .to('.text', .5, { autoAlpha: 1, ease: Power4.easeOut})
        .set('.fireBall', {autoAlpha: 1})
        .to('.fireBall', 2, { rotation: 600, bezier: {curviness: 0.3, values: path}, ease:SlowMo.ease.config(0.9, 0.7, false)})
        .fromTo('.fireBall', 1.5, {scale: 1.5, ease: RoughEase.ease.config({ template: Power0.easeNone, strength: 2, points: 60, taper: "none", randomize: true, clamp: false}) }, {scale: 0, ease: RoughEase.ease.config({ template: Power0.easeNone, strength: 2, points: 60, taper: "none", randomize: true, clamp: false})})
        .set('.fireBall', {scale: 1, x: 0, y:-120, autoAlpha: 0})
        .to('#lancet', .5, {rotation: 70, ease: Back.easeOut })
        .fromTo('.flames', 0.2, {fill: '#fe7c00'}, {fill: '#cad829', immediateRender: false, repeat: 5, yoyo: true})
        .fromTo('.flames', 0.1, {fill: '#feac00'}, {fill: '#cad829', immediateRender: false, repeat: 5, yoyo: true})
        .to('.text', .3, {autoAlpha: 0, y: '+=10px', ease: Power4.easeOut})
        .set('.text', { text: "REACT JS"})
        .to('.text', .5, { autoAlpha: 1, ease: Power4.easeOut})
        .set('.fireBall', {autoAlpha: 1})
        .to('.fireBall', 2, { rotation: 600, bezier: {curviness: 0.3, values: path}, ease:SlowMo.ease.config(0.9, 0.7, false)})
        .fromTo('.fireBall', 1.5, {scale: 1.5, ease: RoughEase.ease.config({ template: Power0.easeNone, strength: 2, points: 60, taper: "none", randomize: true, clamp: false}) }, {scale: 0, ease: RoughEase.ease.config({ template: Power0.easeNone, strength: 2, points: 60, taper: "none", randomize: true, clamp: false})})
        .set('.fireBall', {scale: 1, x: 0, y:-120, autoAlpha: 0})
        .to('#lancet', .4, {rotation: 0, ease: Back.easeOut })
        .fromTo('.flames', 0.2, {fill: '#fe7c00'}, {fill: '#ff3030', immediateRender: false, repeat: 5, yoyo: true})
        .fromTo('.flames', 0.1, {fill: '#e71c3b'}, {fill: '#ff3030', immediateRender: false, repeat: 5, yoyo: true})
        .add('final')
        .fromTo('#lancet', .3, {rotation: -10}, {rotation: 0, immediateRender: false, repeat: -1, yoyo: true}, 'final+=.3')
        .fromTo('.flames', .3, {scale: 1, transformOrigin: '50% 50%'}, {scale: 1.05, repeat: -1, yoyo: true}, 'final+=.3')
        .play()
  }

  componentDidMount() {
    const controller = new ScrollMagic.Controller();

    const mainTl = this.mainTl
      .add(this.clearStage())
      .add(this.introAnim(), 'intro')
      .add(this.fireAnim(), 'fire')
      .timeScale(1.2).play()
    
     const skillScene = new ScrollMagic.Scene({
        triggerElement: '#skill',
        triggerHook: 0,
        offset: -100
      })
      .setTween(mainTl)
      .addTo(controller)

      skillScene.reverse(false)
  }

  render() {
    return (
      <Wrapper id='skill'>
        <Text>
          <h1 className='title'>My Skills</h1>
        </Text>
        <SvgContainer>
          <div className="pc">
            <Icon name="pc" width="280" height="280" />
            <div className="fireBall">
              <Icon name="fireBall" width="120" height="120" />
              
            </div>
            <div className="pc-text">
            <h1 className='text'>Skills indicator</h1>
            </div>
          </div>
          
          <div className="speed">
            <Icon name="speedFlame" height="370" width="450" />
          </div>
        </SvgContainer>
      </Wrapper>
    );
  }
}

export default Skill;
