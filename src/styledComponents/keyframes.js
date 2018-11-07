import { keyframes } from 'styled-components';

const moveLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-10rem);
  }

  80% {
    transform: translateX(2rem);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const moveRight = keyframes`
  0% {
    opacity: 0;
    transform: translateX(10rem);
  }

  80% {
    transform: translateX(-2rem);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const moveUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(3rem);
  }

  100% {
    opacity: 1;
    transform: translateY(0) ;
  }
`;

const pulse = keyframes`
  0% {
   transform: scale(1);
   box-shadow: none;
  }
  50% {
   transform: scale(1.05);
   box-shadow: 0 1rem 4rem rgba(0,0,0,.25);
  }
  100% {
   transform: scale(1);
   box-shadow: none;
  }
`;

const reveal = keyframes`
   0% {
    opacity: 0;
    transform: translateY(-50rem);
  }

  50% {
    opacity: .7;
    transform: translateY(3rem);
  }

  100% {
    opacity: 1;
    transform: translateY(0) ;
  }
`

export {
    moveLeft,
    moveRight,
    moveUp,
    pulse,
    reveal
}