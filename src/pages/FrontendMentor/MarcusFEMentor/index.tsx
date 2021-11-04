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
import IndexLoadingPage from './IndexLoadingPage'

import './styles/toggle.css'
import { keepTheme } from './styles/toggleTheme'
import { CountriesDiv } from '../../../components/MarcusFEMentor/styles/Cards.styled'
import { FiltersDiv, SearchBarBuffer } from '../../../components/MarcusFEMentor/styles/FiltersDiv.styled'
import { TitleContainerBuffer } from '../../../components/MarcusFEMentor/styles/Title.styled'

function MarcusFEMentor() {
  const history = useHistory()
  const dispatch = useDispatch()

  const { all_countries, response_ok } = useSelector((state: RootState) => state.marcusFEMentor)

  useEffect(() => {
    dispatch(getContents())
  }, [])

  useEffect(() => {
    setCountries(all_countries)
    setFound(response_ok)
  }, [all_countries, response_ok])

  useEffect(() => {
    keepTheme(), []
  })

  const [found, setFound] = useState<boolean>(response_ok)
  const [countries, setCountries] = useState<Country[] | undefined>(all_countries)

  return (
    <div id="toggle-theme">
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
          <IndexLoadingPage />
        )}
      </CountriesDiv>
    </div>
  )
}

export default MarcusFEMentor
