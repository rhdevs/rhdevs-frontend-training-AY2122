import React from 'react'
import { useHistory } from 'react-router-dom'

import CountryCard from '../../../components/MarcusFEMentor/CountryCard'
import SearchBar from '../../../components/MarcusFEMentor/SearchBar'
import { CountriesDiv } from '../../../components/MarcusFEMentor/styles/Cards.styled'
import { SearchBarBuffer } from '../../../components/MarcusFEMentor/styles/FiltersDiv.styled'
import { TitleContainerBuffer } from '../../../components/MarcusFEMentor/styles/Title.styled'
import Title from '../../../components/MarcusFEMentor/Title'
import { PATHS } from '../../../routes/PATHS'
import countries from './countries'
import { Background, FiltersDiv } from './styles/MarcusFEMentor.styled'
import RegionsDropdown from '../../../components/MarcusFEMentor/RegionsDropdown'

function MarcusFEMentor() {
  const history = useHistory()

  return (
    <Background>
      <Title text="Where in the world?" /> {/* TODO add night mode? */}
      <TitleContainerBuffer />
      <FiltersDiv>
        <SearchBar />
        <RegionsDropdown />
      </FiltersDiv>
      <SearchBarBuffer />
      <CountriesDiv>
        {countries.map((country) => (
          <CountryCard
            key={country.cca2}
            country={country}
            onClick={() => history.push(`${PATHS.MARCUS_FE_MENTOR}/${country.name.common}`)}
          />
        ))}
      </CountriesDiv>
    </Background>
  )
}

export default MarcusFEMentor
