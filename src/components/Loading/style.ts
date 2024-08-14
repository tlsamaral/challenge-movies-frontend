import styled, { keyframes } from 'styled-components';

 export const loaderAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(0) translateX(50px) rotate(0deg);
  }
  10% {
    opacity: 0;
    transform: translateY(0) translateX(50px) rotate(0deg);
  }
  100% {
    opacity: 1;
    transform: translateY(-20px) translateX(0) rotate(360deg);
  }
`;

interface LoaderProps {
    $isLoading: boolean
}
 export const LoaderContainer = styled.div<LoaderProps>`
  user-select: none;
  width: 100vw;
  height: 100vh;
  display: ${(props) => props.$isLoading ? 'flex': 'none'};
  justify-content: center;
  align-items: center;
  background: #191919;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
`;

 export const Star = styled.svg`
  opacity: 0;
  fill: #eee;
  animation: ${loaderAnimation} 2s infinite alternate;

  &.star2 {
    height: 20px;
    margin-left: -10px;
    animation-delay: 0.25s;
  }

  &.star3 {
    height: 16px;
    margin-left: -15px;
    animation-delay: 0.5s;
  }
`;
