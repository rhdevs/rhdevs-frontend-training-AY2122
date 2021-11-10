import React from 'react'

import { HeaderBar } from '../../../components/MarcusFEMentor2/Header'
import { Page1HeaderContents } from '../../../components/MarcusFEMentor2/Page1MainComponents'
import { Page1MainBg, Page1BottomLogoBg, Page1LeftLogoBg } from './styles/MainPage.styled'

import Page1LeftLogo from '../../../assets/MarcusFEMentor2/bg-pattern-home-1.svg'
import Page1BottomLogo from '../../../assets/MarcusFEMentor2/bg-pattern-home-2.svg'

function Page1Main() {
  return (
    <Page1MainBg>
      <HeaderBar />
      <Page1HeaderContents />
      <Page1LeftLogoBg src={Page1LeftLogo} />
      <Page1BottomLogoBg src={Page1BottomLogo} />
    </Page1MainBg>
  )
}

export default Page1Main
