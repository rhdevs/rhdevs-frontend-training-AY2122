import React from 'react'

import Title from '../../../components/MarcusFEMentor/Title'
import { TitleContainerBuffer } from '../../../components/MarcusFEMentor/styles/Title.styled'
import { IndexLoadingText } from '../../../components/MarcusFEMentor/styles/BufferPage.styled'

const IndexLoadingPage = () => {
  return (
    <>
      <Title text="Where in the world?" />
      <TitleContainerBuffer />
      <IndexLoadingText>loading...</IndexLoadingText>
    </>
  )
}

export default IndexLoadingPage
