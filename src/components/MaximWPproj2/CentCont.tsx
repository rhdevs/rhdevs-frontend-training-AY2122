import React from 'react'

import {
  ButtonStyled,
  CentreCont,
  Detailsincont,
  StyledHr,
  StyledHeader,
  StyledNumber,
} from './styles/Container.styled'

type Props = {
  title: string
  number: string
  text1: string
  text2: string
  text3: string
}

export const CentCont = (props: Props) => {
  return (
    <CentreCont>
      <StyledHeader containertype={'Main'}>{props.title}</StyledHeader>
      <StyledNumber containertype={'Main'}>{props.number}</StyledNumber>
      <Detailsincont containertype={'Main'}>
        <StyledHr color="main"></StyledHr>
        {props.text1}
        <StyledHr color="main"></StyledHr>
        {props.text2}
        <StyledHr color="main"></StyledHr>
        {props.text3}
      </Detailsincont>
      <ButtonStyled> LEARN MORE </ButtonStyled>
    </CentreCont>
  )
}

export default CentCont
