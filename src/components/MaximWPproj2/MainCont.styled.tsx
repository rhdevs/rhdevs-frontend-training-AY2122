import Divider from '@material-ui/core/Divider'
import React from 'react'
import { Button } from 'antd'

import {
  ButtonStyle,
  CentreCont,
  Detailsincont,
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

export const CentCont = (props: Props) => {
  return (
    <CentreCont>
      <StyledHeader typ={'Main'}>{props.title}</StyledHeader>
      <StyledNumber typ={'Main'}>{props.number}</StyledNumber>
      <Divider style={SideDivider} />
      <Detailsincont typ={'Main'}>{props.text1}</Detailsincont>
      <Divider style={SideDivider} />
      <Detailsincont typ={'Main'}>{props.text2}</Detailsincont>
      <Divider style={SideDivider} />
      <Detailsincont typ={'Main'}>{props.text3}</Detailsincont>
      <Button style={ButtonStyle}> Learn more </Button>
    </CentreCont>
  )
}

export default CentCont
