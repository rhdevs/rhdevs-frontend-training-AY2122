import React from 'react'
import CountryCard from '../../../components/MarcusFEMentor/CountryCard'
import SearchBar from '../../../components/MarcusFEMentor/SearchBar'
import { SearchBarBuffer, TitleContainerBuffer } from '../../../components/MarcusFEMentor/styles/Components.styled'
import Title from '../../../components/MarcusFEMentor/Title'
import { Background } from './styles/MarcusFEMentor.styled'

function MarcusFEMentor() {
  return (
    <Background>
      <Title text="Where in the world?" /> {/* TODO add night mode? */}
      <TitleContainerBuffer />
      <SearchBar />
      <SearchBarBuffer />
      <CountryCard />
      <CountryCard />
      <CountryCard />
      <CountryCard />
    </Background>
  )
}

export default MarcusFEMentor
