import React from 'react'
import { useHistory } from 'react-router-dom'

import frontendIcon from '../assets/frontend-logo.jpeg'
import { FEContainer, StyledIcon, TitleText } from './styles/FEWebTitle.styled'

type Props = {
  fontSize?: string
  imgSize?: string
}

const FEWebTitle = (props: Props) => {
  const history = useHistory()
  return (
    <FEContainer onClick={() => history.push('/')}>
      <StyledIcon imgSize={props.imgSize} src={frontendIcon} alt="Frontend Icon" />
      <TitleText fontSize={props.fontSize}>Frontend 21/22!</TitleText>
    </FEContainer>
  )
}

export default FEWebTitle
