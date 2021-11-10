import React from 'react'

import About1Main from './About1Main'
import About2Meet from './About2Meet'
import About3Some from './About3Some'
import Footer from '../../../../components/MarcusFEMentor2/FooterComponents'
import { AboutPageStyled } from './styles/AboutPage.styled'

function MarcusFEMentor2About() {
  return (
    <AboutPageStyled>
      <About1Main />
      <About2Meet />
      <About3Some />
      <Footer />
    </AboutPageStyled>
  )
}

export default MarcusFEMentor2About
