import React from 'react'
import styled from 'styled-components'

import {
  StyledCard,
  Properties,
  NextButton,
  PropName,
  DivisionLine,
  RowCard,
  StatusName,
} from './styles/WashingMachineCard.styled'

import next from '../assets/Group3/next.svg'

type Props = {
  filledButton: boolean
  buttonText: string
  name: string
}

const WashingMachineCard = (props: Props) => {
  return (
    <StyledCard>
      <RowCard>
        <Properties>
          <PropName>{props.name}</PropName>
        </Properties>
        <div>
          <StatusName>None</StatusName>
          <NextButton src={next}></NextButton>
        </div>
      </RowCard>
      <DivisionLine></DivisionLine>
    </StyledCard>
  )
}

export default WashingMachineCard
