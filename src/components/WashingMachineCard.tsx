import React from 'react'

import styled from 'styled-components'
import { StyledCard, Properties, Avatar, PropName } from './styles/WashingMachineCard.styled'
import Button from './Button'
import next from '../assets/Group3/next.png'

type Props = {
  filledButton: boolean
  buttonText: string
  name: string
}

const WashingMachineCard = (props: Props) => {
  return (
    <StyledCard>
      <Properties>
        <PropName>{props.name}</PropName>
      </Properties>
      <div>
        <Button filled={props.filledButton} buttonText={props.buttonText}></Button>
        <Avatar src={next}></Avatar>
      </div>
    </StyledCard>
  )
}

export default WashingMachineCard
