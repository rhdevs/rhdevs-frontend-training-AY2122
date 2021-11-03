import React from 'react'

import Title from '../../../components/MarcusFEMentor/Title'
import BackButton from '../../../components/MarcusFEMentor/CountryPage/BackButton'
import { TitleContainerBuffer } from '../../../components/MarcusFEMentor/styles/Title.styled'

const ErrorPage = () => {
  return (
    <>
      <Title text="Where in the world?" />
      <TitleContainerBuffer />
      <BackButton />
      <h1>country not found</h1>
    </>
  )
}

export default ErrorPage
