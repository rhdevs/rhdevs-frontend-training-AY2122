import React from 'react'

import { Country } from '../../../store/MarcusFEMentor/types'
import { FlagImageStyle } from '../styles/CountryPage.styled'

type Props = {
  country: Country
}

const FlagImage = (props: Props) => {
  return (
    <FlagImageStyle
      width="560px"
      height="401px"
      alt={`${props.country.name.common} flag`}
      src={props.country.flags.svg}
    />
  )
}

export default FlagImage
