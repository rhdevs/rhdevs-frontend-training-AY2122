import React from 'react'

import { StyledCard, Person, Avatar, PersonName } from './styles/FriendCard.styled'
import FilledButton from './FilledButton'
import avatar from '../assets/Group3/avatar.jpg'

type Props = {
  filledButton: boolean
  buttonText: string
  name: string
}

const FriendCard = (props: Props) => {
  return (
    <StyledCard>
      <Person>
        <Avatar src={avatar}></Avatar>
        <PersonName>{props.name}</PersonName>
      </Person>
      <FilledButton filled={props.filledButton} buttonText={props.buttonText} type='PRIMARY'></FilledButton>
    </StyledCard>
  )
}

export default FriendCard
