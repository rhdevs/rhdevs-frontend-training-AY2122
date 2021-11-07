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
import { getResultText, Option } from '../../pages/FrontendMentor/RockPaperScissors/util'

type Props = {
  renderOption: (option: Option) => ReactElement
  result: string
  handleReset: () => void
  currentSelection: string
  comSelection: string
}

const ResultState = ({ renderOption, result, handleReset, currentSelection, comSelection }: Props) => {
  const renderDesktopResultsContainer = () => (
    <ResultStateContainer>
      <PickContainer renderOption={renderOption} header="YOU PICKED" selection={currentSelection} />
      <ResultContainer>
        <ResultText>{getResultText(result)}</ResultText>
        <PlayButton onClick={() => handleReset()}>PLAY AGAIN</PlayButton>
      </ResultContainer>
      <PickContainer renderOption={renderOption} header="THE HOUSE PICKED" selection={comSelection} />
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
