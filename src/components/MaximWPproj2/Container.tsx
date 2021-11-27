import React from 'react'

import { ButtonStyle2, Detailsincont, SideCont, StyledHeader, StyledNumber, Hrstyle } from './styles/Container.styled'

type Props = {
  title: string
  number: string
  text1: string
  text2: string
  text3: string
}

export const Container = (props: Props) => {
  return (
    <SideCont>
      <StyledHeader>{props.title}</StyledHeader>
      <StyledNumber>{props.number}</StyledNumber>
      <Detailsincont>
        <Hrstyle></Hrstyle>
        {props.text1}
        <Hrstyle></Hrstyle>
        {props.text2}
        <Hrstyle></Hrstyle>
        {props.text3}
      </Detailsincont>
      <ButtonStyle2> Learn more </ButtonStyle2>
    </SideCont>
  )
}

export default Container
