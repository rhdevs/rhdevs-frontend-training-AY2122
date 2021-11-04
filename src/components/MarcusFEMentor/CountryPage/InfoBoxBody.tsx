import React from 'react'

import { Country } from '../../../store/MarcusFEMentor/types'
import InfoBoxEntry from './InfoBoxEntry'
import { InfoBoxBodyDiv } from '../styles/CountryPage.styled'

type Props = {
  country: Country
}

const InfoBoxBody = (props: Props) => {
  const country = props.country
  return (
    <InfoBoxBodyDiv>
      <InfoBoxEntry title="Official Name" value={country.name.official} />
      <InfoBoxEntry title="Top Level Domain" value={country.tld?.join(', ') ?? 'none'} />
      <InfoBoxEntry title="Population" value={country.population.toLocaleString()} />
      <InfoBoxEntry
        title="Currencies"
        value={
          country.currencies
            ? Object.values<{ name: string }>(country.currencies)
                .map((currency) => currency.name)
                .join(', ')
            : 'none'
        }
      />
      <InfoBoxEntry title="Region" value={country.region ?? 'none'} />
      <InfoBoxEntry title="Languages" value={Object.values(country.languages)?.join(', ') ?? 'none'} />
      <InfoBoxEntry title="Sub Region" value={country.subregion ?? 'none'} />
      <div />
      <InfoBoxEntry title="Capital" value={country.capital?.join(', ') ?? 'none'} />
    </InfoBoxBodyDiv>
  )
}

export default InfoBoxBody
