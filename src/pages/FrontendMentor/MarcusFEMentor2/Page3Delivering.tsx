import React from 'react'

import { Page3Content } from '../../../components/MarcusFEMentor2/Page3DeliveringComponents'
import { Page3DeliveringBg, Page3TopLeftLogoBg, Page3BottomRightLogoBg } from './styles/MainPage.styled'

import Page3TopLeftLogo from '../../../assets/MarcusFEMentor2/bg-pattern-home-4-about-3.svg'
import Page3BottomRightLogo from '../../../assets/MarcusFEMentor2/bg-pattern-home-5.svg'

function Page3Delivering() {
  return (
    <Page3DeliveringBg>
      <Page3TopLeftLogoBg src={Page3TopLeftLogo} />
      <Page3Content />
      <Page3BottomRightLogoBg src={Page3BottomRightLogo} />
    </Page3DeliveringBg>
  )
}

export default Page3Delivering
