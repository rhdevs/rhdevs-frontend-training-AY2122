import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { PATHS } from '../../../routes/PATHS'
import { RootState } from '../../../store/types'
import { Country, Themes } from '../../../store/MarcusFEMentor/types'
import { getContents } from '../../../store/MarcusFEMentor/actions'
import Title from '../../../components/MarcusFEMentor/Title'
import SearchBar from '../../../components/MarcusFEMentor/SearchBar'
import RegionsDropdown from '../../../components/MarcusFEMentor/RegionsDropdown'
import CountryCard from '../../../components/MarcusFEMentor/CountryCard'
import LoadingPage from './LoadingPage'

import { ThemeProvider } from 'styled-components'
import ThemedDiv from './styles/ThemedDiv.styled'
import { TitleContainerBuffer } from '../../../components/MarcusFEMentor/styles/Title.styled'
import { FiltersDiv, SearchBarBuffer } from '../../../components/MarcusFEMentor/styles/FiltersDiv.styled'
import { CountriesDiv } from '../../../components/MarcusFEMentor/styles/Cards.styled'

function MarcusFEMentor() {
  const history = useHistory()
  const dispatch = useDispatch()

  const { allCountries, responseOk, themeMode } = useSelector((state: RootState) => state.marcusFEMentor)

  useEffect(() => {
    dispatch(getContents())
  }, [])

  useEffect(() => {
    setCountries(allCountries)
    setFound(responseOk)
  }, [allCountries, responseOk])

  useEffect(() => {
    setTheme(themeMode)
  }, [themeMode])

  const [found, setFound] = useState<boolean>(responseOk)
  const [countries, setCountries] = useState<Country[] | undefined>(allCountries)
  const [theme, setTheme] = useState<Themes>(themeMode)

  return (
    <ThemeProvider theme={theme}>
      <ThemedDiv>
        <Title text="Where in the world?" />
        <TitleContainerBuffer />
        <FiltersDiv>
          <SearchBar setCountries={setCountries} />
          <RegionsDropdown setCountries={setCountries} />
        </FiltersDiv>
        <SearchBarBuffer />
        <CountriesDiv>
          {found ? (
            countries?.map((country) => (
              <CountryCard
                key={country.cca2}
                country={country}
                onClick={() => history.push(`${PATHS.MARCUS_FE_MENTOR}/${country.name.common}`)}
              />
            ))
          ) : (
            <LoadingPage location="index" />
          )}
        </CountriesDiv>
      </ThemedDiv>
    </ThemeProvider>
  )
}

export default MarcusFEMentor
