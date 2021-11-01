import styled from 'styled-components'
import BackgroundBottom from '../../../assets/princeenhao/bg-pattern-bottom.svg'
import BackgroundCard from '../../../assets/princeenhao/bg-pattern-card.svg'
import img from '../../../assets/princeenhao/bg-pattern-top.svg'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem 3rem;
  background-image: url(${img});
`

export const StyledHeader = styled.h1`
  color: rgb(25, 25, 121);
  font-family: Arial, sans-serif;
  margin: 1rem auto;
`

export const StyledParagraph = styled.p`
  text-align: justify;
`

export const StyledSubheader = styled.h2`
  margin: 1rem 0 0 0;
  font-family: Arial, Helvetica, sans-serif;
`

export const StyledImg = styled.img`
  border-radius: 10px;
`
