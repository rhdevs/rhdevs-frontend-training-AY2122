import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'

import { PATHS } from '../../../routes/PATHS'
import { Country } from '../../../store/MarcusFEMentor/types'
import { RootState } from '../../../store/types'
import { BorderCountriesDiv, StyledBorderCountriesLinks } from '../styles/CountryPage.styled'

type Props = {
  country: Country
}

const BorderCountriesLinks = (props: Props) => {
  const history = useHistory()
  const { all_countries } = useSelector((state: RootState) => state.marcusFEMentor)
  const borders: string[] | null = props.country.borders
  const borderCountries: Country[] = all_countries.filter((country) => borders?.includes(country.cca3))
  return (
    <BorderCountriesDiv>
      <strong>Border Countries: </strong>
      {borderCountries?.map((border) => (
        <StyledBorderCountriesLinks
          key={border.cca3}
          onClick={() => {
            history.push(`${PATHS.MARCUS_FE_MENTOR}/${border.name.common}`)
          }}
        >
          {border.name.common}
        </StyledBorderCountriesLinks>
      ))}
    </BorderCountriesDiv>
  )
}

export default BorderCountriesLinks
