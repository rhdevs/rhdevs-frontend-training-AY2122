import React from 'react'
import { useNavigate } from 'react-router-dom'
import { PATHS } from '../routes/PATHS'
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
  const navigate = useNavigate()

  return (
    <StyledCard onClick={() => navigate(`${PATHS.GROUP_ROUTE}/${props.groupNumber}`)}>
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
