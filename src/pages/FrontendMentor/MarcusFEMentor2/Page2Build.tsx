import React from 'react'

import { Page2Content } from '../../../components/MarcusFEMentor2/Page2BuildComponents'
import { Page2BuildBg, Page2RightLogoBg } from './styles/MainPage.styled'

import Page2RightLogo from '../../../assets/MarcusFEMentor2/bg-pattern-home-3.svg'

function Page2Build() {
  return (
    <Page2BuildBg>
      <Page2Content />
      <Page2RightLogoBg src={Page2RightLogo} />
    </Page2BuildBg>
  )
}

export default Page2Build
