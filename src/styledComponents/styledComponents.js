import styled from "styled-components";
import {media} from './mediaQueryHelper';

const SectionWrapper  = styled.div`
  min-height: 65rem;
  position: relative;
  
`;

const SectionTitleBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  ${media.lessThan("phone")`
    top: 30%;
  `};
`;

const SectionTitleText = styled.h2`
  font-family: "Rock Salt", cursive;
  text-transform: uppercase;
  letter-spacing: 0.5rem;
  color: #fff;
  font-size: 4.5rem;
  ${media.lessThan("tablet")`
      transform: rotate(90deg);
  `};
`;

const SectionTitleSkew = styled.h2`
  display: inline-block;
  font-size: 3rem;
  font-weight: bold;
  text-transform: uppercase;
  background-image: linear-gradient(to right, ${props => props.theme.colorPrimaryLight}, ${props => props.theme.colorPrimary});
  background-clip: text;
  color: transparent;
  letter-spacing: 0.2rem;
  transition: all 0.2s;
  &:hover {
    transform: skewY(5deg) skewX(3deg) scale(1.1);
    text-shadow: 0.5rem 1.5rem 2rem rgba(0, 0, 0, 0.5);
  }
`;

const ContentBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  text-align: left;
  width: 100%;
  height: 90%;
  margin: 5% auto;
`;

const AnimatedButton = styled.a`
  line-height: 1.6rem;
  letter-spacing: 0.25rem;
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
  font-size: 2.4rem;
  &:visited,
  :link {
    display: inline-block;
    text-transform: uppercase;
    text-decoration: none;
    padding: 1.5rem 2rem;
    border-radius: 10rem;
    transition: all 0.2s;
    position: relative;
  }
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
    &:after {
      transform: scaleX(1.4) scaleY(1.6);
      opacity: 0;
    }
  }
  &:active {
    transform: translateY(-1px);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  }
  &:after {
    content: "";
    display: inline-block;
    height: 100%;
    width: 100%;
    border-radius: 10rem;
    background-color: ${props => props.bgColor};
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: all 0.4s;
  }
`;

export { SectionWrapper , SectionTitleBox, SectionTitleText , SectionTitleSkew, ContentBox, AnimatedButton };
