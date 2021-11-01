import React, { useEffect, useState } from 'react'

import Title from '../../../components/MarcusFEMentor/Title'
import { Country } from './countries'
import BackButton from '../../../components/MarcusFEMentor/BackButton'
import CountryInfoBox from '../../../components/MarcusFEMentor/CountryPage/CountryInfoBox'
import FlagImage from '../../../components/MarcusFEMentor/CountryPage/FlagImage'
import LoadingPage from './LoadingPage'
import ErrorPage from './ErrorPage'
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

  const [found, setFound] = useState<boolean>(true)
  const [country, setCountry] = useState<Country | null>(null)

  const getContents = async () => {
    const url = `https://restcountries.com/v3.1/name/${props.countryName}?fullText=true`
    const response = await fetch(url)
    const json = await response.json()
    !response.ok && setFound(false)
    setCountry(json[0])
  }

  useEffect(() => {
    getContents()
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
      ) : found ? (
        <LoadingPage />
      ) : (
        <ErrorPage />
      )}
    </>
  )
}

export default CountryPage
