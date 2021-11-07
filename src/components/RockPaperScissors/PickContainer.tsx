import React, { ReactElement } from 'react'
import { Option, optionList } from '../../pages/FrontendMentor/RockPaperScissors/util'
import { Blank, PickText, StyledPickContainer } from './styles/PickContainer.styled'

type Props = {
  header: string
  selection: string
  renderOption: (option: Option) => ReactElement
}

const PickContainer = ({ header, selection, renderOption }: Props) => {
  const renderBlank = () => <Blank />

  return (
    <StyledPickContainer>
      <PickText>{header}</PickText>
      {selection === '' && renderBlank()}
      {optionList.filter((option) => option.name === selection).map((option) => renderOption(option))}
    </StyledPickContainer>
  )
}

export default PickContainer
