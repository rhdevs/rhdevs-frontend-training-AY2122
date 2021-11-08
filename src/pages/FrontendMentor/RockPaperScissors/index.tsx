import React, { useState } from 'react'

import { MainContainer, GameContainer, StyledIcon } from './styles/RockPaperScissors.styled'
import Button from '../../../components/RockPaperScissors/Button'
import Scoreboard from '../../../components/RockPaperScissors/Scoreboard'
import SelectState from '../../../components/RockPaperScissors/SelectState'
import ResultState from '../../../components/RockPaperScissors/ResultState'
import PickState from '../../../components/RockPaperScissors/PickState'
import { Option, optionList, getCPUSelection, getResult } from './util'

const RockPaperScissors = () => {
  const [gameState, setGameState] = useState('select')
  const [currentSelection, setCurrentSelection] = useState('')
  const [comSelection, setComSelection] = useState('')
  const [result, setResult] = useState('')
  const [score, setScore] = useState(0)
  const [isLoading, setLoading] = useState(false)

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
    setLoading(false)
  }

  const handleResults = () => {
    if (isLoading) {
      return
    }
    setLoading(true)
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

  const handleResultTimeout = () => {
    setTimeout(() => handleResults(), 1000)
    //empty return so that no timeout id returns on screen
    return
  }

  return (
    <MainContainer>
      <title>Frontend Mentor | Rock, Paper, Scissors</title>
      <Scoreboard score={score} />
      <GameContainer gameState={gameState} onChange={() => gameState === 'pick' && handleResultTimeout()}>
        {gameState === 'select' && <SelectState renderOption={renderOption} optionList={optionList} />}
        {gameState === 'pick' && (
          <PickState currentSelection={currentSelection} comSelection={comSelection} renderOption={renderOption} />
        )}
        {/*hacky solution to switch to pick state automatically after a period of time*/}
        {gameState === 'pick' && handleResultTimeout()}
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
