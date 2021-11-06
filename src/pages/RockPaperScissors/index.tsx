import React, { useState } from 'react'

import { MainContainer, GameContainer, StyledIcon } from './styles/RockPaperScissors.styled'
import Button from '../../components/RockPaperScissors/Button'
import Scoreboard from '../../components/RockPaperScissors/Scoreboard'
import SelectState from '../../components/RockPaperScissors/SelectState'
import ResultState from '../../components/RockPaperScissors/ResultState'
import PickState from '../../components/RockPaperScissors/PickState'
import { Option, optionList, getCPUSelection, getResult } from './util'

const RockPaperScissors = () => {
  const [gameState, setGameState] = useState('select')
  const [currentSelection, setCurrentSelection] = useState('')
  const [comSelection, setComSelection] = useState('')
  const [result, setResult] = useState('')
  const [score, setScore] = useState(0)

  const renderOption = (option: Option) => {
    return (
      <Button key={option.name} option={option} onClick={() => handleSelect(option.name)}>
        <StyledIcon src={option.src} />
      </Button>
    )
  }

  const handleSelect = (option: string) => {
    if (gameState !== 'select') {
      return
    }
    setCurrentSelection(option)
    setTimeout(() => getCPUSelection(setComSelection), 1000)
    setGameState('pick')
  }

  const handleReset = () => {
    setGameState('select')
    setComSelection('')
    setResult('')
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

  return (
    <MainContainer>
      <title>Frontend Mentor | Rock, Paper, Scissors</title>
      <Scoreboard score={score} />
      <GameContainer gameState={gameState} onClick={() => gameState === 'pick' && handleResults()}>
        {gameState === 'select' && <SelectState renderOption={renderOption} optionList={optionList} />}
        {gameState === 'pick' && (
          <PickState currentSelection={currentSelection} comSelection={comSelection} renderOption={renderOption} />
        )}
        {gameState === 'result' && (
          <ResultState
            renderOption={renderOption}
            result={result}
            handleReset={handleReset}
            currentSelection={currentSelection}
            comSelection={comSelection}
          />
        )}
      </GameContainer>
    </MainContainer>
  )
}

export default RockPaperScissors
