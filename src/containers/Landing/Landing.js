import React, { Component } from "react";
import styled from "styled-components";
import Footer from "../../components/Navigation/footer";
import Header from '../Header/Header';
import Gsap from '../../Utilities/gsap';

const Wrapper = styled.div`
`;

class Landing extends Component {
  render() {
    return (
      <Wrapper>
	<Header />
        <Footer />
      </Wrapper>
    );
  }
}

export default Landing;
