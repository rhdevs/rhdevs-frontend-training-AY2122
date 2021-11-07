import React, { ReactElement } from 'react'
import { StyledButton } from './styles/Button.styled'
import { Option } from '../../pages/FrontendMentor/RockPaperScissors/util'

type Props = {
  option: Option
  onClick: () => void
  children: ReactElement
}

const Button = (props: Props) => {
  return (
    <StyledButton borderColor={props.option.color} shadowColor={props.option.shadow} onClick={props.onClick}>
      {props.children}
    </StyledButton>
  )
}

export default Button
