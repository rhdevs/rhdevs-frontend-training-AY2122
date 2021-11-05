import React from 'react'

import { Country } from '../../../store/MarcusFEMentor/types'
import InfoBoxBody from './InfoBoxBody'
import BorderCountriesLinks from './BorderCountriesLinks'
import { CountryInfoBoxDiv, InfoBoxTitle } from '../styles/CountryPage.styled'

const CountryInfoBox = ({ country }: { country: Country }) => {
  return (
    <CountryInfoBoxDiv>
      <InfoBoxTitle>{country.name.common}</InfoBoxTitle>
      <InfoBoxBody country={country} />
      <BorderCountriesLinks country={country} />
    </CountryInfoBoxDiv>
  )
}

export default CountryInfoBox
