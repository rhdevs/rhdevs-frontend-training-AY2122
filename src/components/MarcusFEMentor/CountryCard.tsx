import React from 'react'

import { Card } from 'antd'
import { CardImage, CardStyle } from './styles/Components.styled'

type Country = {
  name: string
  flag: string
  population: number
  region: string
  capital: string
  [key: string]: any
}

type Props = {
  country: Country
}

const CountryCard = (props: Props) => {
  return (
    <Card
      style={CardStyle}
      bordered={true}
      cover={<CardImage alt={`${props.country.name} flag`} src={props.country.flag} />}
    >
      <h1>{props.country.name}</h1>
      <text>
        <strong>Population: </strong>
        {props.country.population}
      </text>
      <br />
      <text>
        <strong>Region: </strong>
        {props.country.region}
      </text>
      <br />
      <text>
        <strong>Capital: </strong>
        {props.country.capital}
      </text>
    </Card>
  )
}

export default CountryCard
