import React from 'react'

import { Page4LowerContent, Page4UpperContent } from '../../../components/MarcusFEMentor2/Page4FooterComponents'
import { Page4FooterDiv, Page4LeftLogoBg, Page4LowerFooterBg, Page4UpperFooterBg } from './styles/MainPage.styled'

import Page4LeftLogo from '../../../assets/MarcusFEMentor2/bg-pattern-home-6-about-5.svg'

function Page4Footer() {
  return (
    <Page4FooterDiv>
      <Page4LeftLogoBg src={Page4LeftLogo} />
      <Page4UpperFooterBg>
        <Page4UpperContent />
      </Page4UpperFooterBg>
      <Page4LowerFooterBg>
        <Page4LowerContent />
      </Page4LowerFooterBg>
    </Page4FooterDiv>
  )
}

export default Page4Footer
