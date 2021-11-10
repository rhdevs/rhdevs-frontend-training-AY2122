import styled from 'styled-components'

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5vh auto 0 2vw;
  width: 13vw;
  height: 100%;
  flex-wrap: wrap;
  overflow: auto;
  @media (max-width: 786px) {
    width: 100%;
    margin: 1.5vh 0 1vh 0;
    justify-content: center;
    align-items: center;
  }
`

export const StyledHeader = styled.div`
  color: hsl(0, 0%, 59%);
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 1px;
  @media (max-width: 786px) {
    font-size: calc(10px + 0.5vw);
  }
`

export const StyledBody = styled.div`
  font-size: calc(16px + 0.5vw);
  font-weight: 700;
  line-height: 125%;
  @media (max-width: 786px) {
    font-size: calc(14px + 0.5vw);
  }
`
