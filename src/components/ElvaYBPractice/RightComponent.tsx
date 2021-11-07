import React from 'react'

import { RightComponent, RightHeader, RightBody } from './styles/RightComponent.styled'

const RightComponentContainer = () => {
  return (
    <RightComponent>
      <RightHeader>Why Us</RightHeader>
      <RightBody>
        Tutorials by industry experts
        <br />
        Peer & expert code review
        <br />
        Coding exercises
        <br />
        Access to our GitHub repos
        <br />
        Community Forum
        <br />
        Flashcard decks
        <br />
        New videos every week
      </RightBody>
    </RightComponent>
  )
}

export default RightComponentContainer
