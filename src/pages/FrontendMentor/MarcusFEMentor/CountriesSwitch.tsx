import React from 'react'
import { useParams } from 'react-router-dom'

import CountryPage from './CountryPage'

const CountriesSwitch = () => {
  const params = useParams<'countryName'>()

  return <CountryPage countryName={params.countryName ?? ''} />
}

export default CountriesSwitch
