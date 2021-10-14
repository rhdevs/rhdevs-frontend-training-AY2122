import React from 'react'
import { useHistory } from 'react-router-dom'

import { PATHS } from '../App'
import {
  BoldText,
  StyledCard,
  StyledGroupNumber,
  StyledMemberNameGroup,
  StyledNamesText,
} from './styles/GroupCard.styled'

type Props = {
  groupNumber: number
  devs: string
  designers: string
}

const GroupCard = (props: Props) => {
  const history = useHistory()

  return (
    <StyledCard onClick={() => history.push(`${PATHS.GROUP_ROUTE}/${props.groupNumber}`)}>
      <StyledGroupNumber>Group {props.groupNumber}</StyledGroupNumber>
      <StyledMemberNameGroup>
        <BoldText>Devs:</BoldText>
        <StyledNamesText>{props.devs}</StyledNamesText>
      </StyledMemberNameGroup>
      <StyledMemberNameGroup>
        <BoldText>Designers:</BoldText>
        <StyledNamesText>{props.designers}</StyledNamesText>
      </StyledMemberNameGroup>
    </StyledCard>
  )
}

export default GroupCard
