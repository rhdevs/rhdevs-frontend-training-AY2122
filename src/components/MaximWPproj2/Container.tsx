import React from 'react'

import { ButtonStyled2, Detailsincont, SideCont, StyledHeader, StyledNumber, StyledHr } from './styles/Container.styled'

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
        <StyledHr color="side"></StyledHr>
        {props.text1}
        <StyledHr color="side"></StyledHr>
        {props.text2}
        <StyledHr color="side"></StyledHr>
        {props.text3}
      </Detailsincont>
      <ButtonStyled2> LEARN MORE </ButtonStyled2>
    </SideCont>
  )
}

export default Container
