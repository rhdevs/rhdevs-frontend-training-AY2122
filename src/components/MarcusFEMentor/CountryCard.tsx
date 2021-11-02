import React from 'react'

import { Capital, Population, Region } from './CardComponents'
import { CardImage, StyledCard } from './styles/Cards.styled'

type Name = {
  common: string
  [key: string]: any
}

type Country = {
  name: Name
  flag?: string
  population: number
  region: string
  capital?: string[]
  [key: string]: any
}

type Props = {
  country: Country
  onClick?: React.MouseEventHandler<HTMLDivElement>
}

const CountryCard = (props: Props) => {
  return (
    <StyledCard
      bordered={true}
      cover={
        <CardImage
          width="264px"
          height="160px"
          alt={`${props.country.name.common} flag`}
          src={props.country.flags.svg}
        />
      }
      onClick={props.onClick}
    >
      <h2>{props.country.name.common}</h2>

      <Population population={props.country.population} />
      <br />
      <Region region={props.country.region} />
      <br />
      <Capital capital={props.country.capital} />
    </StyledCard>
  )
}

export default CountryCard
