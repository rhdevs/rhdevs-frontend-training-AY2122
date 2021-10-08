import React from 'react'

import styled from 'styled-components'
import { StyledCard, Person, Avatar, PersonName } from './styles/FriendCard.styled'
import Button from './Button'
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
      <Button filled={props.filledButton} buttonText={props.buttonText}></Button>
    </StyledCard>
  )
}

export default FriendCard
