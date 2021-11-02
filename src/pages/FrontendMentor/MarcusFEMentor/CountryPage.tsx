import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

import Title from '../../../components/MarcusFEMentor/Title'
import BackButton from '../../../components/MarcusFEMentor/BackButton'
import CountryInfoBox from '../../../components/MarcusFEMentor/CountryPage/CountryInfoBox'
import FlagImage from '../../../components/MarcusFEMentor/CountryPage/FlagImage'
import ErrorPage from './ErrorPage'
import { RootState } from '../../../store/types'
import { getContents } from '../../../store/MarcusFEMentor/actions'

import { TitleContainerBuffer } from '../../../components/MarcusFEMentor/styles/Title.styled'
import { CountryPageContentDiv } from '../../../components/MarcusFEMentor/styles/CountryPage.styled'

type Props = {
  countryName: string
}

const CountryPage = (props: Props) => {
  useEffect(() => {
    // To bring user to the top of the page on first render
    window.scrollTo(0, 0)
  }, [])

  const { json } = useSelector((state: RootState) => state.marcusFEMentor)
  const country = json.find((cnt) => cnt.name.common === props.countryName)

  useEffect(() => {
    !json && getContents()
  }, [])

  return (
    <>
      {country ? (
        <>
          <Title text="Where in the world?" />
          <TitleContainerBuffer />
          <BackButton />
          <CountryPageContentDiv>
            <FlagImage country={country} />
            <CountryInfoBox country={country} />
          </CountryPageContentDiv>
        </>
      ) : (
        <ErrorPage />
      )}
    </>
  )
}

export default CountryPage
