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
} from './styles/RockPaperScissors.styled'
import titleIcon from '../../assets/RockPaperScissors/logo.svg'
import scissorsIcon from '../../assets/RockPaperScissors/icon-scissors.svg'
import rockIcon from '../../assets/RockPaperScissors/icon-rock.svg'
import paperIcon from '../../assets/RockPaperScissors/icon-paper.svg'

//TODO: Pick State UI Arrangement
//TODO: Implement Lizard and Spock

const RockPaperScissors = () => {
  const [gameState, setGameState] = useState('select')
  const [currentSelection, setCurrentSelection] = useState('')
  const [comSelection, setComSelection] = useState('')
  const [result, setResult] = useState('')
  const [score, setScore] = useState(0)

  const renderButton = (option: Option) => {
    return (
      <Button borderColor={option.color} key={option.name} onClick={() => handleSelect(option.name)}>
        <StyledIcon imgSize="5rem" src={option.src} />
      </Button>
    )
  }

  const renderSelectState = () => <>{optionList.map((option) => renderButton(option))}</>

  const handleSelect = (option: string) => {
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
    const choice = Math.floor(Math.random() * 3)
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
    }
    //return statement to handle linter error
    return ''
  }

  const renderScoreboard = () => {
    return (
      <Scoreboard>
        {/*<div>ROCK, PAPER, SCISSORS</div>*/}
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

  const renderResultState = () => (
    <ResultStateContainer>
      {renderPickContainer('YOU PICKED', currentSelection)}
      <ResultContainer>
        <PickText>{getResultText()}</PickText>
        <PlayButton onClick={() => handleReset()}>PLAY AGAIN</PlayButton>
      </ResultContainer>
      {renderPickContainer('THE HOUSE PICKED', comSelection)}
    </ResultStateContainer>
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
    if (getResult(com, current) === 'win') {
      return 'lose'
    }
    return ''
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
      {/*Rules You Picked The House Picked You Win You Lose Play Again*/}
    </MainContainer>
  )
}

const optionList = [
  { name: 'rock', src: rockIcon, color: `hsl(349, 71%, 52%)` },
  { name: 'paper', src: paperIcon, color: `hsl(230, 89%, 62%)` },
  { name: 'scissors', src: scissorsIcon, color: `hsl(39, 89%, 49%)` },
]

type Option = { name: string; src: any; color: string }

export default RockPaperScissors
