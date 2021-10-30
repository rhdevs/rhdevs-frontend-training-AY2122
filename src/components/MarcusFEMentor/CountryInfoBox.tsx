import React from 'react'
import { Country } from '../../pages/FrontendMentor/MarcusFEMentor/countries'
import BorderCountriesLinks from './BorderCountriesLinks'
import InfoBoxEntry from './InfoBoxEntry'
import { CountryInfoBoxDiv, InfoBoxBody, InfoBoxTitle } from './styles/CountryInfoPage.styled'

type Props = {
  country: Country
}

const CountryInfoBox = (props: Props) => {
  const country = props.country
  return (
    <CountryInfoBoxDiv>
      <InfoBoxTitle>{country.name.common}</InfoBoxTitle>
      <InfoBoxBody>
        <InfoBoxEntry title="Official Name" value={country.name.official} />
        <InfoBoxEntry title="Top Level Domain" value={country.tld?.join(', ') ?? 'none'} />
        <InfoBoxEntry title="Population" value={country.population.toLocaleString()} />
        <InfoBoxEntry
          title="Currencies"
          value={
            Object.values<{ name: string }>(country.currencies)
              .map((currency) => currency.name)
              .join(', ') ?? 'none'
          }
        />
        <InfoBoxEntry title="Region" value={country.region ?? 'none'} />
        <InfoBoxEntry title="Languages" value={Object.values(country.languages)?.join(', ') ?? 'none'} />
        <InfoBoxEntry title="Sub Region" value={country.subregion ?? 'none'} />
        <div />
        <InfoBoxEntry title="Capital" value={country.capital?.join(', ') ?? 'none'} />
      </InfoBoxBody>
      <BorderCountriesLinks country={country} />
    </CountryInfoBoxDiv>
  )
}

export default CountryInfoBox
