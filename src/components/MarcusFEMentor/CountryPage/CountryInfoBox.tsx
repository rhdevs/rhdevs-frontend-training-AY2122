import React from 'react'
import { Country } from '../../../pages/FrontendMentor/MarcusFEMentor/countries'
import BorderCountriesLinks from './BorderCountriesLinks'
import InfoBoxBody from './InfoBoxBody'
import { CountryInfoBoxDiv, InfoBoxTitle } from '../styles/CountryPage.styled'

type Props = {
  country: Country
}

const CountryInfoBox = (props: Props) => {
  const country = props.country
  return (
    <CountryInfoBoxDiv>
      <InfoBoxTitle>{country.name.common}</InfoBoxTitle>
      <InfoBoxBody country={country} />
      <BorderCountriesLinks country={country} />
    </CountryInfoBoxDiv>
  )
}

export default CountryInfoBox
