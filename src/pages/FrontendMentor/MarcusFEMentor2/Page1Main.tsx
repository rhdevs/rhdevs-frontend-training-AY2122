import React from 'react'
import { Page1HeaderBar, Page1HeaderContents } from '../../../components/MarcusFEMentor2/Page1MainComponents'
import { Page1MainBg } from './styles/MainPage.styled'

function Page1Main() {
  return (
    <Page1MainBg>
      <Page1HeaderBar />
      <Page1HeaderContents />
    </Page1MainBg>
  )
}

export default Page1Main
