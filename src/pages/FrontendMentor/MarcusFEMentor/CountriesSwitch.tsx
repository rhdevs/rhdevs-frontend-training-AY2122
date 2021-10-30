import React from 'react'
import { useParams } from 'react-router-dom'

const CountriesSwitch = () => {
  const params = useParams<{ countryName: string }>()

  return <h1>{params.countryName}</h1>
}

export default CountriesSwitch
