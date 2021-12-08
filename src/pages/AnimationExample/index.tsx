import React from 'react'

import styled, { keyframes } from 'styled-components'

const MainContainer = styled.div`
  display: grid;
  place-items: center;
  min-height: 100vh;
`

const zoom = keyframes`
    0% {
        transform: scale(1)
    } 
    100% {
        transform:scale(2)
    }
`

const Box = styled.div`
  width: 200px;
  height: 200px;
  background-color: green;
  /* transition-delay: 2000ms;
  transition-duration: 100ms;
  transition-property: background-color;
  transition-timing-function: ease; */
  /* transition: 200ms 100ms background-color ease; */
  position: relative;
  &:hover {
    background-color: blue;
    animation: ${zoom} 1s ease-in-out infinite;
    /* width: 400px; */
  }

  &::after {
    background: purple;
    content: '';
    width: 100px;
    height: 100px;
    position: absolute;
    top: 0;
    left: 0;
  }
`

const AnimationExample = () => {
  return (
    <MainContainer>
      <Box />
    </MainContainer>
  )
}

export default AnimationExample
