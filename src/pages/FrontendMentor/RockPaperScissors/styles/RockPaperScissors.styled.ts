import styled from 'styled-components'

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 3rem);
  background: radial-gradient(hsl(214, 47%, 23%), hsl(237, 49%, 15%));
  font-family: Barlow Semi Condensed, sans-serif;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const StyledIcon = styled.img`
  @media (min-width: 601px) {
    height: 5rem;
    width: 5rem;
  }
  @media (max-width: 600px) {
    height: 3rem;
    width: 3rem;
  }
`

export const GameContainer = styled.div<{ gameState: string }>`
  width: 100%;
  height: 100%;
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 601px) {
    min-height: 580px;
  }
  @media (max-width: 600px) {
    min-height: 400px;
  }
  ${(props) => props.gameState && props.gameState === 'pick' && `cursor: pointer;`}
`
