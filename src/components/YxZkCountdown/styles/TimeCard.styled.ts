import styled, { keyframes } from 'styled-components'

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
  width: 8.5rem;
  height: 8rem;
  display: block;
  position: relative;
  border-radius: 0.6rem;
  perspective: 800px;
  background-color: #343650;
  perspective-origin: center;
  &.tophalf {
    background-color: rgba(0, 0, 0, 0.15);
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 50%;
    animation: ${TransformTop} 1s linear 1;
  }
  &.bottomhalf {
    width: 100%;
    position: absolute;
    top: 50%;
    height: 50%;
    background-color: rgba(0, 0, 0, 0.1);
  }
  &.bar {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.25);
    width: 100%;
    height: 1px;
    top: 50%;
    left: 0;
    right: 0;
    z-index: 1;
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
    z-index: 1;
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
    z-index: 1;
  }
  &.number {
    font-size: 5.5rem;
    color: #fb6087;
    font-weight: 700;
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    z-index: 0;
    font-family: 'Red Hat Text', sans-serif;
    @media (max-width: 768px) {
      font-size: 3.5rem;
    }
  }
  @media (max-width: 768px) {
    width: 5.25rem;
    height: 5rem;
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
export const TimeCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2vw;
`
export const TimeCardLabel = styled.div`
  font-size: 0.8rem;
  margin-top: 1rem;
  align-self: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.3rem;
  font-family: 'Red Hat Text', sans-serif;
  color: #8486a9;
  @media (max-width: 768px) {
    font-size: 0.5rem;
    letter-spacing: 0.2rem;
    margin-top: 0.5rem;
  }
`
