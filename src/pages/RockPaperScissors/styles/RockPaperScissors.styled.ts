import styled from 'styled-components'

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  min-width: 100vw;
  min-height: calc(100vh - 3rem);
  background: radial-gradient(hsl(214, 47%, 23%), hsl(237, 49%, 15%));
  font-family: Barlow Semi Condensed;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const StyledIconTitle = styled.img<{ imgSize?: string }>`
  height: ${(props) => props.imgSize ?? '2rem'};
  width: calc(${(props) => props.imgSize ?? '2rem'} + 6rem);
`

export const StyledIcon = styled.img<{ imgSize?: string }>`
  height: ${(props) => props.imgSize ?? '2rem'};
  width: ${(props) => props.imgSize ?? '2rem'};
`

export const Scoreboard = styled.div`
  width: 100%;
  max-width: 800px;
  //min-height: 150px;
  border-radius: 5px;
  border: 2px solid #4e5f7d;
  font-size: 3rem;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const Score = styled.div`
  font-size: 1rem;
  border-radius: 5px;
  color: hsl(229, 64%, 46%);
  background: #f7f7f7;
  border-color: #f7f7f7;
  height: 100%;
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`

export const ScoreText = styled.div`
  font-size: 3rem;
`
export const GameContainer = styled.div<{ isSelectState: boolean }>`
  width: 100%;
  //max-width: 800px;
  // min-height: 500px;
  height: 100%;
  border-radius: 5px;
  border: 2px solid #4e5f7d;
  display: flex;
  justify-content: center;
  align-items: center;
  ${(props) => props.isSelectState === false && `cursor: pointer;`}
`
export const Button = styled.div<{ borderColor: string }>`
  ${(props) => props.borderColor && `border-color: ${props.borderColor};`}
  border-radius: 50%;
  border-width: 20px;
  border-style: solid;
  background: #f0f0f0;
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

export const PickContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const PickText = styled.div`
  font-size: 2em;
`
export const PickStateContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`
