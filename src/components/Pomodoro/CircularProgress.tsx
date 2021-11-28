import React from 'react'
import { StyledSvg, StyledCircle } from './styles/CircularProgress.styled'

const CircularProgress = ({ percent }: { percent: number }) => {
  const getPercentage = () => {
    return 1 - percent
  }

  return (
    <StyledSvg>
      <StyledCircle percentage={getPercentage()} />
    </StyledSvg>
  )
}

export default CircularProgress
