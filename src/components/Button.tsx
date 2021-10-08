import React from 'react'
import { StyledButton } from './styles/Button.styled'

type Props = {
  filled: boolean
  buttonText: string
}

const Button = (props: Props) => {
  return <StyledButton filled={props.filled}>{props.buttonText}</StyledButton>
}

export default Button
