import Divider from '@material-ui/core/Divider'
import React from 'react'
import { Button } from 'antd'

import {
  ButtonStyle2,
  CentreCont,
  Detailsincont,
  SideCont,
  SideDivider,
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

export const Cont = (props: Props) => {
  return (
    <SideCont>
      <StyledHeader>{props.title}</StyledHeader>
      <StyledNumber>{props.number}</StyledNumber>
      <Divider style={SideDivider} />
      <Detailsincont>{props.text1}</Detailsincont>
      <Divider style={SideDivider} />
      <Detailsincont>{props.text2}</Detailsincont>
      <Divider style={SideDivider} />
      <Detailsincont>{props.text3}</Detailsincont>
      <Button style={ButtonStyle2}> Learn more </Button>
    </SideCont>
  )
}

export default Cont
