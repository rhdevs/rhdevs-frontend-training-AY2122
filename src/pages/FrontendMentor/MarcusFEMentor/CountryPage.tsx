import React, { useEffect } from 'react'

import Title from '../../../components/MarcusFEMentor/Title'
import countries from './countries'
import ErrorPage from './ErrorPage'
import { TitleContainerBuffer } from '../../../components/MarcusFEMentor/styles/Title.styled'
import BackButton from '../../../components/MarcusFEMentor/BackButton'
import CountryInfoBox from '../../../components/MarcusFEMentor/CountryInfoBox'
import { CountryPageContentDiv, FlagImage } from '../../../components/MarcusFEMentor/styles/CountryInfoPage.styled'
import FlagImageDiv from '../../../components/MarcusFEMentor/FlagImageDiv'

type Props = {
  countryName: string
}

const CountryPage = (props: Props) => {
  useEffect(() => {
    // To bring user to the top of the page on first render
    window.scrollTo(0, 0)
  }, [])
  const country = countries.find((cnt) => cnt.name.common == props.countryName)
  return (
    <>
      {country ? (
        <>
          <Title text="Where in the world?" />
          <TitleContainerBuffer />
          <BackButton />
          <CountryPageContentDiv>
            <FlagImageDiv country={country} />
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
