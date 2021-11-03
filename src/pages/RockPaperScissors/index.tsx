import React, { useState } from 'react'
import {
  MainContainer,
  Scoreboard,
  Score,
  ScoreText,
  GameContainer,
  Button,
  StyledIconTitle,
  StyledIcon,
  PickContainer,
  PickText,
  PickStateContainer,
  ResultContainer,
  PlayButton,
  ResultStateContainer,
  Blank,
  SelectContainer,
  TopSelect,
  MiddleSelect,
  BottomSelect,
  Overlay,
  MobileResultContainer,
  ResultWrapper,
  ResultText,
} from './styles/RockPaperScissors.styled'
import titleIcon from '../../assets/RockPaperScissors/logo-bonus.svg'
import scissorsIcon from '../../assets/RockPaperScissors/icon-scissors.svg'
import rockIcon from '../../assets/RockPaperScissors/icon-rock.svg'
import paperIcon from '../../assets/RockPaperScissors/icon-paper.svg'
import lizardIcon from '../../assets/RockPaperScissors/icon-lizard.svg'
import spockIcon from '../../assets/RockPaperScissors/icon-spock.svg'
import pentagonIcon from '../../assets/RockPaperScissors/bg-pentagon.svg'

const RockPaperScissors = () => {
  const [gameState, setGameState] = useState('select')
  const [currentSelection, setCurrentSelection] = useState('')
  const [comSelection, setComSelection] = useState('')
  const [result, setResult] = useState('')
  const [score, setScore] = useState(0)

  const renderButton = (option: Option) => {
    return (
      <Button borderColor={option.color} key={option.name} onClick={() => handleSelect(option.name)}>
        <StyledIcon src={option.src} />
      </Button>
    )
  }

  const renderSelectState = () => (
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

  const handleSelect = (option: string) => {
    if (gameState !== 'select') {
      return
    }
    setCurrentSelection(option)
    setTimeout(getCPUSelection, 1000)
    setGameState('pick')
  }

  const renderPickContainer = (header: string, selection: string) => {
    return (
      <PickContainer>
        <PickText>{header}</PickText>
        {selection === '' && renderBlank()}
        {optionList.filter((option) => option.name === selection).map((option) => renderButton(option))}
      </PickContainer>
    )
  }

  const renderBlank = () => <Blank />

  const renderPickState = () => {
    return (
      <PickStateContainer>
        {renderPickContainer('YOU PICKED', currentSelection)}
        {renderPickContainer('THE HOUSE PICKED', comSelection)}
      </PickStateContainer>
    )
  }

  const getCPUSelection = () => {
    const choice = Math.floor(Math.random() * 5)
    switch (choice) {
      case 0:
        setComSelection(optionList[0].name)
        return
      case 1:
        setComSelection(optionList[1].name)
        return
      case 2:
        setComSelection(optionList[2].name)
        return
      case 3:
        setComSelection(optionList[3].name)
        return
      case 4:
        setComSelection(optionList[4].name)
        return
    }
    //return statement to handle linter error
    return ''
  }

  const renderScoreboard = () => {
    return (
      <Scoreboard>
        <StyledIconTitle imgSize="10rem" src={titleIcon} />
        <Score>
          <div>S C O R E</div>
          <ScoreText>{score}</ScoreText>
        </Score>
      </Scoreboard>
    )
  }

  const handleReset = () => {
    setGameState('select')
    setComSelection('')
    setResult('')
  }

  const renderDesktopResultsContainer = () => (
    <ResultStateContainer>
      {renderPickContainer('YOU PICKED', currentSelection)}
      <ResultContainer>
        <ResultText>{getResultText()}</ResultText>
        <PlayButton onClick={() => handleReset()}>PLAY AGAIN</PlayButton>
      </ResultContainer>
      {renderPickContainer('THE HOUSE PICKED', comSelection)}
    </ResultStateContainer>
  )

  const renderMobileDesktopContainer = () => (
    <MobileResultContainer>
      <ResultText>{getResultText()}</ResultText>
      <PlayButton onClick={() => handleReset()}>PLAY AGAIN</PlayButton>
    </MobileResultContainer>
  )

  const renderResultState = () => (
    <ResultWrapper>
      {renderDesktopResultsContainer()}
      {renderMobileDesktopContainer()}
    </ResultWrapper>
  )

  const getResultText = () => {
    if (result === 'win') {
      return 'YOU WIN'
    }
    if (result === 'draw') {
      return 'DRAW'
    }
    if (result === 'lose') {
      return 'YOU LOSE'
    }
  }

  const handleResults = () => {
    if (comSelection === '') {
      return
    }
    const res = getResult(currentSelection, comSelection)
    setResult(res)
    if (res === 'win') {
      setScore(score + 1)
    }
    if (res === 'lose') {
      setScore(score - 1)
    }
    setGameState('result')
    return
  }

  const getResult = (current: string, com: string) => {
    if (current === com) {
      return 'draw'
    }
    if (current === 'paper' && com === 'rock') {
      return 'win'
    }
    if (current === 'rock' && com === 'scissors') {
      return 'win'
    }
    if (current === 'scissors' && com === 'paper') {
      return 'win'
    }
    if (current === 'rock' && com === 'lizard') {
      return 'win'
    }
    if (current === 'lizard' && com === 'spock') {
      return 'win'
    }
    if (current === 'spock' && com === 'scissors') {
      return 'win'
    }
    if (current === 'scissors' && com === 'lizard') {
      return 'win'
    }
    if (current === 'paper' && com === 'spock') {
      return 'win'
    }
    if (current === 'lizard' && com === 'paper') {
      return 'win'
    }
    if (current === 'spock' && com === 'rock') {
      return 'win'
    }
    if (getResult(com, current) === 'win') {
      return 'lose'
    }
    return 'draw'
  }

  return (
    <MainContainer>
      <title>Frontend Mentor | Rock, Paper, Scissors</title>
      {renderScoreboard()}
      <GameContainer gameState={gameState} onClick={() => gameState === 'pick' && handleResults()}>
        {gameState === 'select' && renderSelectState()}
        {gameState === 'pick' && renderPickState()}
        {gameState === 'result' && renderResultState()}
      </GameContainer>
    </MainContainer>
  )
}

const optionList = [
  { name: 'scissors', src: scissorsIcon, color: `hsl(39, 89%, 49%)` },
  { name: 'spock', src: spockIcon, color: `hsl(189, 59%, 53%)` },
  { name: 'paper', src: paperIcon, color: `hsl(230, 89%, 62%)` },
  { name: 'lizard', src: lizardIcon, color: `hsl(261, 73%, 60%)` },
  { name: 'rock', src: rockIcon, color: `hsl(349, 71%, 52%)` },
]

type Option = { name: string; src: any; color: string }

export default RockPaperScissors
