import React from 'react'

import CountryCard from '../../../components/MarcusFEMentor/CountryCard'
import SearchBar from '../../../components/MarcusFEMentor/SearchBar'
import {
  CountriesDiv,
  SearchBarBuffer,
  TitleContainerBuffer,
} from '../../../components/MarcusFEMentor/styles/Components.styled'
import Title from '../../../components/MarcusFEMentor/Title'
import { Background } from './styles/MarcusFEMentor.styled'

const Country = {
  name: 'Singapore',
  topLevelDomain: ['.sg'],
  alpha2Code: 'SG',
  alpha3Code: 'SGP',
  callingCodes: ['65'],
  capital: 'Singapore',
  altSpellings: ['SG', 'Singapura', 'Republik Singapura', '新加坡共和国'],
  subregion: 'South-Eastern Asia',
  region: 'Asia',
  population: 5685807,
  latlng: [1.36666666, 103.8],
  demonym: 'Singaporean',
  area: 710.0,
  timezones: ['UTC+08:00'],
  nativeName: 'Singapore',
  numericCode: '702',
  flags: { svg: 'https://flagcdn.com/sg.svg', png: 'https://flagcdn.com/w320/sg.png' },
  currencies: [
    { code: 'BND', name: 'Brunei dollar', symbol: '$' },
    { code: 'SGD', name: 'Singapore dollar', symbol: '$' },
  ],
  languages: [
    { iso639_1: 'en', iso639_2: 'eng', name: 'English', nativeName: 'English' },
    { iso639_1: 'ms', iso639_2: 'msa', name: 'Malay', nativeName: 'bahasa Melayu' },
    { iso639_1: 'ta', iso639_2: 'tam', name: 'Tamil', nativeName: 'தமிழ்' },
    { iso639_1: 'zh', iso639_2: 'zho', name: 'Chinese', nativeName: '中文 (Zhōngwén)' },
  ],
  translations: {
    br: 'Singapura',
    pt: 'Singapura',
    nl: 'Singapore',
    hr: 'Singapur',
    fa: 'سنگاپور',
    de: 'Singapur',
    es: 'Singapur',
    fr: 'Singapour',
    ja: 'シンガポール',
    it: 'Singapore',
    hu: 'Szingapúr',
  },
  flag: 'https://flagcdn.com/sg.svg',
  regionalBlocs: [{ acronym: 'ASEAN', name: 'Association of Southeast Asian Nations' }],
  cioc: 'SIN',
  independent: true,
}

function MarcusFEMentor() {
  return (
    <Background>
      <Title text="Where in the world?" /> {/* TODO add night mode? */}
      <TitleContainerBuffer />
      <SearchBar />
      <SearchBarBuffer />
      <CountriesDiv>
        <CountryCard country={Country} />
        <CountryCard country={Country} />
        <CountryCard country={Country} />
        <CountryCard country={Country} />
        <CountryCard country={Country} />
      </CountriesDiv>
    </Background>
  )
}

export default MarcusFEMentor
