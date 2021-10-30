import React from 'react'
import { Card } from 'antd'

import { CardImage, StyledCardDiv } from './styles/Cards.styled'
import { Capital, Population, Region } from './CardComponents'

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
    <StyledCardDiv>
      <Card
        style={{ boxShadow: '2px 2px 5px gray' }}
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
      </Card>
    </StyledCardDiv>
  )
}

export default CountryCard
