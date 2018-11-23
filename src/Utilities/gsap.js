import React, { Component } from "react";
import styled from "styled-components";
import ScrollMagic from "scrollmagic";
import { TimelineLite } from "gsap/all";
import img1 from "./img/img_macbook01.png";
import img2 from "./img/img_macbook02.png";

const Wrapper = styled.div``;

const Article = styled.article`
  background-color: #EDEDED; 
  position: relative;
    overflow: hidden;
    height: 100vh; 
    .pin-wrapper {
          width: 100%;
          height: 100%;
      }
    
    .wrapper {
          position: absolute;
          top: 45%;
          left: 60%; 
      }
    .img {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 700px;
          height: 418px;
          background: url('${img1}') no-repeat top left;
          transform: translate(-80%, -40%); 
      }
  
`;

const Article2 = Article.extend`
background-color: #FFFFFF; 
   .img {
    background: url('${img2}') no-repeat top left;
   }
   .pin-wrapper {
    transform: translateY(-100%);
}
    .scrollmagic-pin-spacer {
      position: absolute !important;
      clip: rect(auto, auto, auto, auto);
    }
`;

const Article3 = Article2.extend`
background-color: #EDEDED; 
   .img {
    background: url('${img1}') no-repeat top left;
   }
   
`;

class Gsap extends Component {
  componentDidMount() {
    const Controller = new ScrollMagic.Controller();
    const sceneData = [
      {
        triggerElement: "#slide01",
        duration: "100%",
        setPin: "#slide01 .pin-wrapper",
        indicatorsName: "scene1"
      },
      {
        triggerElement: "#slide01",
        duration: "200%",
        setPin: "#slide02 .pin-wrapper",
        indicatorsName: "scene2"
      },
      {
        triggerElement: "#slide02",
        duration: "100%",
        setPin: "#slide03 .pin-wrapper",
        indicatorsName: "scene3"
      }
    ];

    sceneData.map(i => {
      return new ScrollMagic.Scene({
        triggerElement: `${i.triggerElement}`,
        triggerHook: 0,
        duration: `${i.duration}`
      })
        .setPin(`${i.setPin}`)
        .addTo(Controller);
    });
  }

  render() {
    return (
      <Wrapper id="main" className="main-container">
        <Article id="slide00" className="slide">
          <div className="wrapper">
            <h1>INTRODUCTION</h1>
            <p>
              Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor
              neque eu tellus rhoncus ut eleifend nibh porttitor.
            </p>
          </div>
        </Article>

        <Article id="slide01" className="slide">
          <div className="pin-wrapper">
            <div className="img" />
            <div className="wrapper">
              <h1>TITLE ONE</h1>
              <p>
                Curabitur vulputate, ligula lacinia scelerisque tempor, lacus
                lacus ornare ante, ac egestas.
              </p>
            </div>
          </div>
        </Article>

        <Article2 id="slide02" className="slide">
          <div className="pin-wrapper">
            <div className="img" />
            <div className="wrapper">
              <h1>TITLE TWO</h1>
              <p>
                Proin quis tortor orci. Etiam at risus et justo dignissim
                congue. Donec congue lacinia dui, a porttitor lectus.
              </p>
            </div>
          </div>
        </Article2>

        <Article3 id="slide03" className="slide">
          <div className="pin-wrapper">
            <div className="img" />
            <div className="wrapper">
              <h1>TITLE THREE</h1>
              <p>
                Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.
                Ut in.
              </p>
            </div>
          </div>
        </Article3>

        <Article id="slide05" className="slide">
          <div className="wrapper">
            <h1>UNPINNED SLIDE</h1>
            <p>
              Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor
              neque eu tellus rhoncus ut eleifend nibh porttitor.
            </p>
          </div>
        </Article>
      </Wrapper>
    );
  }
}

export default Gsap;
