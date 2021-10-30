import React from 'react'

import { FlagImage } from './styles/CountryInfoPage.styled'
import { Country } from '../../pages/FrontendMentor/MarcusFEMentor/countries'

type Props = {
  country: Country
}

const FlagImageDiv = (props: Props) => {
  return (
    <FlagImage width="560px" height="401px" alt={`${props.country.name.common} flag`} src={props.country.flags.svg} />
  )
}

export default FlagImageDiv
