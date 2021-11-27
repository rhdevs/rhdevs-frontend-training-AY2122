import React from 'react'

import About3SomeContents from '../../../../components/MarcusFEMentor2/aboutPageComponents/About3SomeComponents'
import { About3SomeBg, About3TopLeftLogoBg } from './styles/AboutPage.styled'

import About3TopLeftLogo from '../../../../assets/MarcusFEMentor2/bg-pattern-about-4.svg'

function About3Some() {
  return (
    <About3SomeBg>
      <About3TopLeftLogoBg src={About3TopLeftLogo} />
      <About3SomeContents />
    </About3SomeBg>
  )
}

export default About3Some
