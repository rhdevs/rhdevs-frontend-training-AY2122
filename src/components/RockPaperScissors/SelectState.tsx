import React, { ReactElement } from 'react'
import { BottomSelect, MiddleSelect, Overlay, SelectContainer, TopSelect } from './styles/SelectState.styled'
import pentagonIcon from '../../assets/RockPaperScissors/bg-pentagon.svg'
import { Option } from '../../pages/RockPaperScissors/util'

type Props = {
  renderOption: (option: Option) => ReactElement
  optionList: Option[]
}

const SelectState = ({ renderOption, optionList }: Props) => (
  <SelectContainer>
    <Overlay src={pentagonIcon} />
    <TopSelect>{renderOption(optionList[0])}</TopSelect>
    <MiddleSelect>
      {renderOption(optionList[1])}
      {renderOption(optionList[2])}
    </MiddleSelect>
    <BottomSelect>
      {renderOption(optionList[3])}
      {renderOption(optionList[4])}
    </BottomSelect>
  </SelectContainer>
)

export default SelectState
