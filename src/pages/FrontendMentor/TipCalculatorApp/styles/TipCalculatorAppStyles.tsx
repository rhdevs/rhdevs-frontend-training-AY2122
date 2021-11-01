import styled from 'styled-components'

export const MainContainer = styled.div`
  background: hsl(185, 41%, 84%);
  height: 100vh;
`
export const Header = styled.div`
  padding-top: 10vh;
  padding-bottom: 8vh;
  text-align: center;
`
export const HeaderWords = styled.div`
  color: hsl(186, 14%, 43%);
  font-family: 'Space Mono';
  font-weight: bold;
  font-size: 24px;
  margin-top: 2vh;
  margin-bottom: 2vh;
`
export const MiddleContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 50vh;
  width: 100vw;
`

export const Calculator = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  background: hsl(0, 0%, 100%);
  width: 800px;
  border-radius: 25px;
`

export const InteractionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
