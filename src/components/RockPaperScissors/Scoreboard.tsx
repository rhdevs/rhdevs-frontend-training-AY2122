import React from 'react'
import { Score, StyledScoreboard, ScoreText, StyledIconTitle } from './styles/Scoreboard.styled'
import titleIcon from '../../assets/RockPaperScissors/logo-bonus.svg'

type Props = {
  score: number
}

const Scoreboard = (props: Props) => {
  return (
    <StyledScoreboard>
      <StyledIconTitle imgSize="10rem" src={titleIcon} />
      <Score>
        <div>S C O R E</div>
        <ScoreText>{props.score}</ScoreText>
      </Score>
    </StyledScoreboard>
  )
}
export default Scoreboard
