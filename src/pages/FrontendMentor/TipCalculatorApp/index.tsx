import React from 'react'
import { MainContainer, Header, HeaderWords, MiddleContainer, Calculator } from './styles/TipCalculatorAppStyles'

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
          SPLI
          <br />
          TTER
        </Calculator>
      </MiddleContainer>
    </MainContainer>
  )
}

export default TipCalculatorApp
