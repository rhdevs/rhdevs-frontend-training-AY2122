import React from 'react'

import BackgroundStars from '../../../assets/YxZkCountdown/bg-stars.svg'
import BackgroundHills from '../../../assets/YxZkCountdown/pattern-hills.svg'
import {
  BackgroundContainer,
  StarBackground,
  HillBackground,
  Header,
  StarBackgroundContainer,
  HillBackgroundContainer,
} from './styles/YxZkCountdown.styled'

const CountdownTimer = () => {
  return (
    <BackgroundContainer>
      <Header>Hello</Header>
      <StarBackgroundContainer>
        <StarBackground src={BackgroundStars} />
      </StarBackgroundContainer>
      <HillBackgroundContainer>
        <HillBackground src={BackgroundHills} />
      </HillBackgroundContainer>
    </BackgroundContainer>
  )
}

export default CountdownTimer
