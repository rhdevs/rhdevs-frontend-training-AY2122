import React from 'react'

import Page1Main from './Page1Main'
import Page2Build from './Page2Build'
import Page3Delivering from './Page3Delivering'
import Page4Footer from './Page4Footer'
import { MainPageStyled } from './styles/MainPage.styled'

function MarcusFEMentor2() {
  return (
    <MainPageStyled>
      <Page1Main />
      <Page2Build />
      <Page3Delivering />
      <Page4Footer />
    </MainPageStyled>
  )
}

export default MarcusFEMentor2
