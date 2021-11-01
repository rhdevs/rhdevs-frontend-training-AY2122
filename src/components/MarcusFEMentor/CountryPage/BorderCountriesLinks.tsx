import React from 'react'
import { Button } from 'antd'

import { useHistory } from 'react-router'
import { PATHS } from '../../../routes/PATHS'
import countries, { Country } from '../../../pages/FrontendMentor/MarcusFEMentor/countries'
import { BorderCountriesDiv, BorderCountriesLinksStyle } from '../styles/CountryPage.styled'

type Props = {
  country: Country
}

const BorderCountriesLinks = (props: Props) => {
  const history = useHistory()
  const borders: string[] | null = props.country.borders
  const borderCountries: Country[] = countries.filter((country) => borders?.includes(country.cca3))
  return (
    <BorderCountriesDiv>
      <strong>Border Countries: </strong>
      {borderCountries?.map((border) => (
        <Button
          key={border.cca3}
          onClick={() => {
            history.push(`${PATHS.MARCUS_FE_MENTOR}/${border.name.common}`)
            window.location.reload() // by default page won't load from country link btn without this
          }}
          style={BorderCountriesLinksStyle}
        >
          {border.name.common}
        </Button>
      ))}
    </BorderCountriesDiv>
  )
}

export default BorderCountriesLinks
