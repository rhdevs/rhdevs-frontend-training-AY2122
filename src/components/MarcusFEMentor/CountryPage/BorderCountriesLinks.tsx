import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { PATHS } from '../../../routes/PATHS'
import { Country } from '../../../store/MarcusFEMentor/types'
import { RootState } from '../../../store/types'
import { BorderCountriesDiv, StyledBorderCountriesLinks } from '../styles/CountryPage.styled'

const BorderCountriesLinks = ({ country }: { country: Country }) => {
  const navigate = useNavigate()
  const { allCountries } = useSelector((state: RootState) => state.marcusFEMentor)
  const borders: string[] | null = country.borders
  const borderCountries: Country[] = allCountries.filter((country) => borders?.includes(country.cca3))

  return (
    <BorderCountriesDiv>
      <strong>Border Countries: </strong>
      {borderCountries.length === 0 ? (
        <span>&nbsp;none</span>
      ) : (
        borderCountries?.map((border) => (
          <StyledBorderCountriesLinks
            key={border.cca3}
            onClick={() => navigate(`${PATHS.MARCUS_FE_MENTOR}/${border.name.common}`)}
          >
            {border.name.common}
          </StyledBorderCountriesLinks>
        ))
      )}
    </BorderCountriesDiv>
  )
}

export default BorderCountriesLinks
