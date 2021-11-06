import React, { ReactElement } from 'react'
import { PickStateContainer } from './styles/PickState.styled'
import { Option } from '../../pages/RockPaperScissors/util'
import PickContainer from './PickContainer'

type Props = {
  currentSelection: string
  comSelection: string
  renderButton: (option: Option) => ReactElement
}

const PickState = ({ currentSelection, comSelection, renderButton }: Props) => {
  return (
    <PickStateContainer>
      <PickContainer renderButton={renderButton} header="YOU PICKED" selection={currentSelection} />
      <PickContainer renderButton={renderButton} header="THE HOUSE PICKED" selection={comSelection} />

      {/*{renderPickContainer('YOU PICKED', currentSelection)}*/}
      {/*{renderPickContainer('THE HOUSE PICKED', comSelection)}*/}
    </PickStateContainer>
  )
}

export default PickState
