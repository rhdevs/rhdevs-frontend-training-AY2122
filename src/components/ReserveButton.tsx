import React from 'react'
import { StyledButton } from './styles/ReserveButton.styled'

type Props = {
  filled: boolean
  buttonText: string
}

const ReserveButton = (props: Props) => {
  return <StyledButton filled={props.filled}>{props.buttonText}</StyledButton>
}

export default ReserveButton
