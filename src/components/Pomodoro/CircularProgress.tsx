import React from 'react'
import { StyledSvg, StyledCircle } from './styles/CircularProgress.styled'

const CircularProgress = ({ percent }: { percent: number }) => {
  const getPercentage = () => {
    return (1 - percent) * 1055
  }

  return (
    <StyledSvg transform="rotate(-90)">
      <StyledCircle percentage={getPercentage()} />
    </StyledSvg>
  )
}

export default CircularProgress
