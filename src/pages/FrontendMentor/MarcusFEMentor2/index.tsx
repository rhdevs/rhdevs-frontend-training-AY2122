import React from 'react'

import Footer from '../../../components/MarcusFEMentor2/FooterComponents'
import Page1Main from './Page1Main'
import Page2Build from './Page2Build'
import Page3Delivering from './Page3Delivering'
import { MainPageStyled } from './styles/MainPage.styled'

function MarcusFEMentor2() {
  return (
    <MainPageStyled>
      <Page1Main />
      <Page2Build />
      <Page3Delivering />
      <Footer />
    </MainPageStyled>
  )
}

export default MarcusFEMentor2
