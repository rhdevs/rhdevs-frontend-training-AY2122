import React from 'react'

import Contact1MainContents from '../../../../components/MarcusFEMentor2/contactPageComponents/Contact1MainComponents'
import { Contact1LeftLogoBg, Contact1MainBg, Contact1RightLogoBg } from './styles/ContactPage.styled'

import Contact1LeftLogo from '../../../../assets/MarcusFEMentor2/bg-pattern-about-2-contact-1.svg'
import Contact1RightLogo from '../../../../assets/MarcusFEMentor2/bg-pattern-contact-2.svg'

function Contact1Main() {
  return (
    <Contact1MainBg>
      <Contact1LeftLogoBg src={Contact1LeftLogo} />
      <Contact1MainContents />
      <Contact1RightLogoBg src={Contact1RightLogo} />
    </Contact1MainBg>
  )
}

export default Contact1Main
