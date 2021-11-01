import React from 'react'
import {
  MainContainer,
  Header,
  HeaderWords,
  MiddleContainer,
  Calculator,
  InteractionContainer,
} from './styles/TipCalculatorAppStyles'

const TipCalculatorApp = () => {
  return (
    <MainContainer>
      <Header>
        <HeaderWords>
          SPLI
          <br />
          TTER
        </HeaderWords>
      </Header>
      <MiddleContainer>
        <Calculator>
          <InteractionContainer> #1 </InteractionContainer>
          <InteractionContainer> #2 </InteractionContainer>
        </Calculator>
      </MiddleContainer>
    </MainContainer>
  )
}

export default TipCalculatorApp
