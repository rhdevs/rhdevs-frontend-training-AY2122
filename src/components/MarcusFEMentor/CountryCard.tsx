import React from 'react'

import { Country } from '../../store/MarcusFEMentor/types'
import { Capital, Population, Region } from './CardComponents'
import { StyledCard } from './styles/Cards.styled'

type Props = {
  country: Country
  onClick?: React.MouseEventHandler<HTMLDivElement>
}

const CountryCard = (props: Props) => {
  return (
    <StyledCard
      id="styled-card"
      bordered={false}
      cover={
        <img width="264px" height="160px" alt={`${props.country.name.common} flag`} src={props.country.flags.svg} />
      }
      onClick={props.onClick}
    >
      <h2 className="card-text">{props.country.name.common}</h2>

      <Population population={props.country.population} />
      <br />
      <Region region={props.country.region} />
      <br />
      <Capital capital={props.country.capital} />
    </StyledCard>
  )
}

export default CountryCard
