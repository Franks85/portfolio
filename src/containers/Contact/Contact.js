import React, { Component } from "react";
import styled from "styled-components";
import Wheel from "../../components/Contact/Wheel";
import { TweenLite } from "gsap/all";
import { media } from "../../styledComponents/mediaQueryHelper";

const Wrapper = styled.div`
  height: 45rem;
  position: relative;
`;

const Box = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 80%;
  height: 90%;
  margin: 5% 0 0 10%;
  .mail {
    padding: 0 0 5% 5%;
    ${media.lessThan("phone")`
    padding: 0;
  `};
    p {
      color: #fff;
      font-size: 2.4rem;
      ${media.lessThan("phone")`
        font-size: 2rem;
      `};
    span {
      color: #8b92dd;
      margin-left: 1rem;
      ${media.lessThan("phone")`
        margin: 0 0 .5rem 0;
      `};
    }
    }
  }
`;

const infoDetail = [
  {
    id: "linkedin",
    info: "Linkedin",
    name: "linkedin",
    href: "www.linkedin.com"
  },
  {
    id: "github",
    info: "Github",
    name: "github",
    href: "www.github.com"
  },
  {
    id: "facebook",
    info: "Facebook",
    name: "facebook",
    href: "www.facebook.com"
  }
];

class Contact extends Component {
  componentDidMount () {
    TweenLite.set('.mail', {autoAlpha: 0, y: 20});
  }
  
  render() {
    const wheel = infoDetail.map(i => {
      return (
        <Wheel id={i.id} key={i.id} info={i.info} name={i.name} href={i.href} />
      );
    });
    return (
      <Wrapper id='contact'>
        <Box>
          <div className="mail">
            <p>For any question or info please contact me at <span>roberto.franceschini@gmail.com</span></p>
          </div>
          {wheel}
        </Box>
      </Wrapper>
    );
  }
}

export default Contact;
