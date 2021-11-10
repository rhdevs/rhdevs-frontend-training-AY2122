import styled, { keyframes } from 'styled-components'

const FoldUp = keyframes`
  from {
    transform: rotateX(0deg);}
  to {
    transform: rotateX(-180deg);}
`
const FoldDown = keyframes`
  from {
    transform: rotateX(180deg);}
  to {
    transform: rotateX(0deg);}
`

const RotateTop = keyframes`
  transform: translate(-50%, -50%);
  0% {
    transform: rotate3d(0);
  }
  50% {
    transform: rotate3d(-1, 0, 0, 90deg);
  }
  100% {
    transform: rotate3d(-1, 0, 0, 90deg);
  }
`
const RotateBottom = keyframes`
  transform: translate(-50%, -50%);
  0% {
    transform: rotate3d(1, 0, 0, 90deg);
  }
  50% {
    transform: rotate3d(1, 0, 0, 90deg);
  }
  100% {
    transform: rotate3d(0);
  }
`
const TransformAbout = keyframes`
  0% {
    transform: rotate3d(1, 0, 0, 90deg);
    transform-origin: -50% -10%;
  }
  50% {
    transform: rotate3d(1, 0, 0, 45deg);
  }
  100% {
    transform: rotate3d(1, 0, 0, 0deg);
  }
`
const TransformTop = keyframes`
  0% {
    transform: rotate3d(-1, 0, 0, 0deg);
    transform-origin: 0% 100%;
  }
  50% {
  }
  100% {
    transform: rotate3d(-1, 0, 0, 180deg);
    transform-origin: -50% 100%;
  }
`

export const TimeBox = styled.div`
  width: 7rem;
  height: 7rem;
  display: block;
  position: absolute;
  border-radius: 0.4rem;
  perspective: 30rem;
  background-color: #343650;
  perspective-origin: center;
  &.tophalf {
    background-color: rgba(0, 255, 0, 0.15);
    width: 100%;
    height: 50%;
    animation: ${TransformTop} 1s ease-in-out infinite;
  }
  &.bottomhalf {
    width: 100%;
    top: 50%;
    height: 50%;
    background-color: rgba(0, 255, 0, 0.15);
  }
  &.bar {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.25);
    width: 100%;
    height: 0.5px;
    top: 50%;
    left: 0;
    right: 0;
  }
  &.right-curve {
    top: 50%;
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    position: absolute;
    right: 0;
    left: auto;
    background-color: #1e1f29;
    transform: translate(50%, -50%);
  }
  &.left-curve {
    top: 50%;
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    position: absolute;
    left: 0;
    background-color: #1e1f29;
    transform: translate(-50%, -50%);
  }
`

export const Countdown = styled.div`
  width: 100%;
  font-size: 2.5rem;
  font-weight: 500;
  position: absolute;
  color: #fff;
  margin-top: 2.5rem;
  justify-content: center;
  display: flex;
  top: 45%;
  @media (max-width: 768px) {
    font-size: 6vw;
  }
`
