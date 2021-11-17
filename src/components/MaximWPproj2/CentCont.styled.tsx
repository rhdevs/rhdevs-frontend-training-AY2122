import React from 'react'

import { ButtonStyle, CentreCont, Detailsincont, StyledHeader, StyledNumber } from './styles/Container.styled'

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
        <hr style={{ width: 250 }} />
        {props.text1}
        <hr />
        {props.text2}
        <hr />
        {props.text3}
      </Detailsincont>
      <ButtonStyle> Learn more </ButtonStyle>
    </CentreCont>
  )
}

export default CentCont
