import React from 'react'

import BackgroundStars from '../../../assets/YxZkCountdown/bg-stars.svg'
import BackgroundHills from '../../../assets/YxZkCountdown/pattern-hills.svg'
import { BackgroundContainer, Background } from './styles/YxZkCountdown.styled'

const CountdownTimer = () => {
  return (
    <>
      <BackgroundContainer>
        <Background src={BackgroundStars} />
        <Background src={BackgroundHills} />
      </BackgroundContainer>
    </>
  )
}

export default CountdownTimer
