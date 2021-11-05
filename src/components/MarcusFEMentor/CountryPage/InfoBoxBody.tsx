import React from 'react'

import { Country } from '../../../store/MarcusFEMentor/types'
import InfoBoxEntry from './InfoBoxEntry'
import { InfoBoxBodyDiv } from '../styles/CountryPage.styled'

const InfoBoxBody = ({ country }: { country: Country }) => {
  const nativeLangs: string[] = Object.keys(country.languages)
  const nativeNames: string[] = nativeLangs.map((lang) => country.name.nativeName[lang].common)

  return (
    <InfoBoxBodyDiv>
      <InfoBoxEntry title="Native Name(s)" value={nativeNames.join(', ')} />
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
