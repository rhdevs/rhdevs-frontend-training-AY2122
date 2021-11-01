import React from 'react'

import { FlagImageStyle } from '../styles/CountryPage.styled'
import { Country } from '../../../pages/FrontendMentor/MarcusFEMentor/countries'

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
