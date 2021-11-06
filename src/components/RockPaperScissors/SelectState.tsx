import React, { ReactElement } from 'react'
import { BottomSelect, MiddleSelect, Overlay, SelectContainer, TopSelect } from './styles/SelectState.styled'
import pentagonIcon from '../../assets/RockPaperScissors/bg-pentagon.svg'
import { Option } from '../../pages/RockPaperScissors/util'

type Props = {
  renderButton: (option: Option) => ReactElement
  optionList: Option[]
}

const SelectState = ({ renderButton, optionList }: Props) => (
  <SelectContainer>
    <Overlay src={pentagonIcon} />
    <TopSelect>{renderButton(optionList[0])}</TopSelect>
    <MiddleSelect>
      {renderButton(optionList[1])}
      {renderButton(optionList[2])}
    </MiddleSelect>
    <BottomSelect>
      {renderButton(optionList[3])}
      {renderButton(optionList[4])}
    </BottomSelect>
  </SelectContainer>
)

export default SelectState
