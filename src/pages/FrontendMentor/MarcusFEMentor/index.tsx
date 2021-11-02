import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { PATHS } from '../../../routes/PATHS'
import { RootState } from '../../../store/types'
import { Country } from '../../../store/MarcusFEMentor/types'
import { getContents } from '../../../store/MarcusFEMentor/actions'
import CountryCard from '../../../components/MarcusFEMentor/CountryCard'
import SearchBar from '../../../components/MarcusFEMentor/SearchBar'
import Title from '../../../components/MarcusFEMentor/Title'
import RegionsDropdown from '../../../components/MarcusFEMentor/RegionsDropdown'
import LoadingPage from './LoadingPage'
import ErrorPage from './ErrorPage'

import { Background } from './styles/MarcusFEMentor.styled'
import { CountriesDiv } from '../../../components/MarcusFEMentor/styles/Cards.styled'
import { FiltersDiv, SearchBarBuffer } from '../../../components/MarcusFEMentor/styles/FiltersDiv.styled'
import { TitleContainerBuffer } from '../../../components/MarcusFEMentor/styles/Title.styled'

function MarcusFEMentor() {
  const history = useHistory()
  const dispatch = useDispatch()

  const { json, response_ok } = useSelector((state: RootState) => state.marcusFEMentor)

  useEffect(() => {
    dispatch(getContents())
    setCountries(json)
    setFound(response_ok)
  }, [])

  const [found, setFound] = useState<boolean>(response_ok)
  const [countries, setCountries] = useState<Country[] | undefined>(json)

  return (
    <Background>
      <Title text="Where in the world?" /> {/* TODO add night mode? */}
      <TitleContainerBuffer />
      <FiltersDiv>
        <SearchBar setCountries={setCountries} />
        <RegionsDropdown setCountries={setCountries} />
      </FiltersDiv>
      <SearchBarBuffer />
      <CountriesDiv>
        {countries ? (
          countries.map((country) => (
            <CountryCard
              key={country.cca2}
              country={country}
              onClick={() => history.push(`${PATHS.MARCUS_FE_MENTOR}/${country.name.common}`)}
            />
          ))
        ) : found ? (
          <LoadingPage />
        ) : (
          <ErrorPage />
        )}
      </CountriesDiv>
    </Background>
  )
}

export default MarcusFEMentor
