import React from 'react'

import { ButtonStyle, CentreCont, Detailsincont, Hrstyle2, StyledHeader, StyledNumber } from './styles/Container.styled'

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
        <Hrstyle2></Hrstyle2>
        {props.text1}
        <Hrstyle2></Hrstyle2>
        {props.text2}
        <Hrstyle2></Hrstyle2>
        {props.text3}
      </Detailsincont>
      <ButtonStyle> Learn more </ButtonStyle>
    </CentreCont>
  )
}

export default CentCont
