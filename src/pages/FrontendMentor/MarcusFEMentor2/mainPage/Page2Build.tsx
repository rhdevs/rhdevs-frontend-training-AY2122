import React from 'react'

import Page2BuildContents from '../../../../components/MarcusFEMentor2/mainPageComponents/Page2BuildComponents'
import { Page2BuildBg, Page2RightLogoBg } from './styles/MainPage.styled'

import Page2RightLogo from '../../../../assets/MarcusFEMentor2/bg-pattern-home-3.svg'

function Page2Build() {
  return (
    <Page2BuildBg>
      <Page2BuildContents />
      <Page2RightLogoBg src={Page2RightLogo} />
    </Page2BuildBg>
  )
}

export default Page2Build
