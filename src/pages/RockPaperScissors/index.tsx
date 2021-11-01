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
} from './styles/RockPaperScissors.styled'
import titleIcon from '../../assets/RockPaperScissors/logo.svg'
import scissorsIcon from '../../assets/RockPaperScissors/icon-scissors.svg'
import rockIcon from '../../assets/RockPaperScissors/icon-rock.svg'
import paperIcon from '../../assets/RockPaperScissors/icon-paper.svg'

// TODO: Implement Game logic

const RockPaperScissors = () => {
  const [isSelectState, setSelectState] = useState(true)
  const [currentSelection, setCurrentSelection] = useState('')

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
    setSelectState(false)
  }

  const renderPickContainer = (header: string, selection: string) => {
    return (
      <PickContainer>
        <PickText>{header}</PickText>
        {optionList.filter((option) => option.name === selection).map((option) => renderButton(option))}
      </PickContainer>
    )
  }

  const renderPickState = () => (
    <PickStateContainer>
      {renderPickContainer('YOU PICKED', currentSelection)}
      {renderPickContainer('THE HOUSE PICKED', currentSelection)}
    </PickStateContainer>
  )

  const renderScoreboard = () => {
    return (
      <Scoreboard>
        {/*<div>ROCK, PAPER, SCISSORS</div>*/}
        <StyledIconTitle imgSize="10rem" src={titleIcon} />
        <Score>
          <div>S C O R E</div>
          <ScoreText>12</ScoreText>
        </Score>
      </Scoreboard>
    )
  }

  return (
    <MainContainer>
      <title>Frontend Mentor | Rock, Paper, Scissors</title>
      {renderScoreboard()}
      <GameContainer isSelectState={isSelectState} onClick={() => !isSelectState && setSelectState(true)}>
        {isSelectState && renderSelectState()}
        {!isSelectState && renderPickState()}
      </GameContainer>
      {/*Rules You Picked The House Picked You Win You Lose Play Again*/}
    </MainContainer>
  )
}

//TODO: implement lizard and spock
const optionList = [
  { name: 'rock', src: rockIcon, color: `hsl(349, 71%, 52%)` },
  { name: 'paper', src: paperIcon, color: `hsl(230, 89%, 62%)` },
  { name: 'scissors', src: scissorsIcon, color: `hsl(39, 89%, 49%)` },
]

type Option = { name: string; src: any; color: string }

export default RockPaperScissors
