import React from 'react'
import styled from 'styled-components'

import {
  StyledCard,
  Properties,
  IconStyling,
  PropName,
  DivisionLine,
  RowCard,
  StatusName,
} from './styles/WashingMachineCard.styled'
import { RightOutlined } from '@ant-design/icons'

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
          <RightOutlined style={IconStyling} />
        </div>
      </RowCard>
      <DivisionLine />
    </StyledCard>
  )
}

export default WashingMachineCard
