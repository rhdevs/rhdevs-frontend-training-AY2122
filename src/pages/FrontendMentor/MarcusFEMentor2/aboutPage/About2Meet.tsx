import React from 'react'

import About2MeetContents from '../../../../components/MarcusFEMentor2/aboutPageComponents/About2MeetComponents'
import { About2BottomRightLogoBg, About2MeetBg, About2TopLeftLogoBg } from './styles/AboutPage.styled'

import About2TopLeftLogo from '../../../../assets/MarcusFEMentor2/bg-pattern-about-2-contact-1.svg'
import About2BottomRightLogo from '../../../../assets/MarcusFEMentor2/bg-pattern-home-4-about-3.svg'

function About2Meet() {
  return (
    <About2MeetBg>
      <About2TopLeftLogoBg src={About2TopLeftLogo} />
      <About2MeetContents />
      <About2BottomRightLogoBg src={About2BottomRightLogo} />
    </About2MeetBg>
  )
}

export default About2Meet
