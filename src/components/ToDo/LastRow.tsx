import React, { useState } from 'react'
import { ItemsLeft, MiddleTBox, Rectangle, TextBox, Clear } from './styles/LastRow.styled'

const LastRow = () => {
  return (
    <Rectangle>
      <ItemsLeft>2 items left</ItemsLeft>
      <MiddleTBox>
        <TextBox>All</TextBox>
        <TextBox>Active</TextBox>
        <TextBox>Completed</TextBox>
      </MiddleTBox>
      <Clear>Clear completed</Clear>
    </Rectangle>
  )
}

export default LastRow
