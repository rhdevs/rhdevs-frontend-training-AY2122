import React from 'react'

import { Country } from '../../../store/MarcusFEMentor/types'
import { FlagImageStyle } from '../styles/CountryPage.styled'

const FlagImage = ({ country }: { country: Country }) => {
  return <FlagImageStyle width="560px" height="401px" alt={`${country.name.common} flag`} src={country.flags.svg} />
}

export default FlagImage
