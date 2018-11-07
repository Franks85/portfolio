import React, { Component } from "react";
import styled from "styled-components";
import {
  Tween
} from "react-gsap";
import { Controller, Scene } from "react-scrollmagic";

const Wrapper = styled.div``;

const Box = styled.div`
  background-color: #f0f0f0;
  width: 60rem;
  height: 20rem;
  position: relative;
  overflow: hidden;
  margin: 20rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

class Gsap extends Component {
  render() {
    return (
      <Wrapper>
        <Controller indicators={true}>
          <Scene triggerHook="onLeave" duration="100%" indicators={true} 
          pin>
            <Tween 
              to={{ rotation: 360}}
            >
            <Box><h1>prova</h1></Box>
            </Tween>
          </Scene>
        </Controller>
      </Wrapper>
    );
  }
}

export default Gsap;
