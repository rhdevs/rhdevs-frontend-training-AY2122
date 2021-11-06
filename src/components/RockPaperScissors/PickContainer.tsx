import React, { ReactElement } from 'react'
import { Option, optionList } from '../../pages/RockPaperScissors/util'
import { Blank, PickText, StyledPickContainer } from './styles/PickContainer.styled'

type Props = {
  header: string
  selection: string
  renderButton: (option: Option) => ReactElement
}

const PickContainer = ({ header, selection, renderButton }: Props) => {
  const renderBlank = () => <Blank />

  return (
    <StyledPickContainer>
      <PickText>{header}</PickText>
      {selection === '' && renderBlank()}
      {optionList.filter((option) => option.name === selection).map((option) => renderButton(option))}
    </StyledPickContainer>
  )
}

export default PickContainer
