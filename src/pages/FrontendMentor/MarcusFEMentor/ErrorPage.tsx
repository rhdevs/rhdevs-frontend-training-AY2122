import React from 'react'
import BackButton from '../../../components/MarcusFEMentor/BackButton'
import { TitleContainerBuffer } from '../../../components/MarcusFEMentor/styles/Title.styled'
import Title from '../../../components/MarcusFEMentor/Title'

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
