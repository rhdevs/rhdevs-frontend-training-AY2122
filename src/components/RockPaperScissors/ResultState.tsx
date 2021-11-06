import React, { ReactElement } from 'react'
import {
  MobileResultContainer,
  PlayButton,
  ResultContainer,
  ResultStateContainer,
  ResultText,
  ResultWrapper,
} from './styles/ResultState.styled'
import PickContainer from './PickContainer'
import { getResultText, Option } from '../../pages/RockPaperScissors/util'

type Props = {
  renderButton: (option: Option) => ReactElement
  result: string
  handleReset: () => void
  currentSelection: string
  comSelection: string
}

const ResultState = ({ renderButton, result, handleReset, currentSelection, comSelection }: Props) => {
  const renderDesktopResultsContainer = () => (
    <ResultStateContainer>
      <PickContainer renderButton={renderButton} header="YOU PICKED" selection={currentSelection} />
      <ResultContainer>
        <ResultText>{getResultText(result)}</ResultText>
        <PlayButton onClick={() => handleReset()}>PLAY AGAIN</PlayButton>
      </ResultContainer>
      <PickContainer renderButton={renderButton} header="THE HOUSE PICKED" selection={comSelection} />
    </ResultStateContainer>
  )

  const renderMobileDesktopContainer = () => (
    <MobileResultContainer>
      <ResultText>{getResultText(result)}</ResultText>
      <PlayButton onClick={() => handleReset()}>PLAY AGAIN</PlayButton>
    </MobileResultContainer>
  )

  return (
    <ResultWrapper>
      {renderDesktopResultsContainer()}
      {renderMobileDesktopContainer()}
    </ResultWrapper>
  )
}

export default ResultState
