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
  justify-content: space-evenly;
  font-family: 'Space Mono';
  width: 40%;
`

export const ItemHeader = styled.div`
  font-weight: bold;
  color: hsl(186, 14%, 43%);
  padding-bottom: 1vh;
`

export const ItemContainer = styled.div`
  padding-top: 0.5vh;
`

export const InputContainer = styled.div`
  height: 5vh;
  line-height: 5vh;
  background: hsl(189, 41%, 97%);
  border-radius: 3px;
`

export const InputIcon = styled.img`
  padding-left: 2vh;
`

export const TipGridBox = styled.div`
  display: grid;
  height: 10vh;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  font-family: 'Space Mono';
`

export const TipGridItem = styled.button`
  background: hsl(183, 100%, 15%);
  color: hsl(185, 41%, 84%);
  border-radius: 3px;
  font-weight: 700;
  text-align: center;
`
