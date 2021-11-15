import React from 'react'
import { Button } from 'antd'

import { ButtonStyle2, Detailsincont, SideCont, StyledHeader, StyledNumber } from './styles/Container.styled'

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
        <hr style={{ width: 250 }} />
        {props.text1}
        <hr />
        {props.text2}
        <hr />
        {props.text3}
      </Detailsincont>
      <Button style={ButtonStyle2}> Learn more </Button>
    </SideCont>
  )
}

export default Container
