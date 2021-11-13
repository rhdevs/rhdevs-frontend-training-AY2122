import React from 'react'

import About1MainContents from '../../../../components/MarcusFEMentor2/aboutPageComponents/About1MainComponents'
import { About1MainBg, About1RightLogoBg } from './styles/AboutPage.styled'

import About1RightLogo from '../../../../assets/MarcusFEMentor2/bg-pattern-about-1-mobile-nav-1.svg'

function About1Main() {
  return (
    <About1MainBg>
      <About1RightLogoBg src={About1RightLogo} />
      <About1MainContents />
    </About1MainBg>
  )
}

export default About1Main
