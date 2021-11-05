import React from 'react'

import Title from '../../../components/MarcusFEMentor/Title'
import BackButton from '../../../components/MarcusFEMentor/CountryPage/BackButton'
import { TitleContainerBuffer } from '../../../components/MarcusFEMentor/styles/Title.styled'
import { IndexLoadingText, LoadingText } from '../../../components/MarcusFEMentor/styles/BufferPage.styled'

const LoadingPage = ({ location }: { location: 'index' | 'country-page' }) => {
  return (
    <>
      <Title text="Where in the world?" />
      <TitleContainerBuffer />
      {location === 'index' ? (
        <IndexLoadingText>loading...</IndexLoadingText>
      ) : (
        <>
          <BackButton />
          <LoadingText>loading...</LoadingText>
        </>
      )}
    </>
  )
}

export default LoadingPage
