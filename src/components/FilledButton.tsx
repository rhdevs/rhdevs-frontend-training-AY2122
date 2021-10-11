import React from 'react'
import { StyledPrimaryButton, StyledReserveButton } from './styles/FilledButton.styled'

type Props = {
  filled: boolean
  buttonText: string
  type: 'RESERVE' | 'PRIMARY'
}

const FilledButton = (props: Props) => {
  return props.type === 'PRIMARY' ? (
    <StyledPrimaryButton filled={props.filled}>{props.buttonText}</StyledPrimaryButton>
  ) : (
    <StyledReserveButton filled={props.filled}>{props.buttonText}</StyledReserveButton>
  )
}

export default FilledButton
