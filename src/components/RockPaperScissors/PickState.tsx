import React, { ReactElement } from 'react'
import { PickStateContainer } from './styles/PickState.styled'
import { Option } from '../../pages/RockPaperScissors/util'
import PickContainer from './PickContainer'

type Props = {
  currentSelection: string
  comSelection: string
  renderOption: (option: Option) => ReactElement
}

const PickState = ({ currentSelection, comSelection, renderOption }: Props) => {
  return (
    <PickStateContainer>
      <PickContainer renderOption={renderOption} header="YOU PICKED" selection={currentSelection} />
      <PickContainer renderOption={renderOption} header="THE HOUSE PICKED" selection={comSelection} />

      {/*{renderPickContainer('YOU PICKED', currentSelection)}*/}
      {/*{renderPickContainer('THE HOUSE PICKED', comSelection)}*/}
    </PickStateContainer>
  )
}

export default PickState
