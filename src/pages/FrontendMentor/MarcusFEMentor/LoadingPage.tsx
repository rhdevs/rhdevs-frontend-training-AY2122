import React from 'react'

import Title from '../../../components/MarcusFEMentor/Title'
import BackButton from '../../../components/MarcusFEMentor/CountryPage/BackButton'
import { TitleContainerBuffer } from '../../../components/MarcusFEMentor/styles/Title.styled'
import { LoadingText } from '../../../components/MarcusFEMentor/styles/BufferPage.styled'

const LoadingPage = () => {
  return (
    <>
      <Title text="Where in the world?" />
      <TitleContainerBuffer />
      <BackButton />
      <LoadingText>loading...</LoadingText>
    </>
  )
}

export default LoadingPage
