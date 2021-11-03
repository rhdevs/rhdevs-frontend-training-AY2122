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
  width: ${(props) => props.imgSize ?? '2rem'};
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
  width: 100%;
  max-width: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`

export const ScoreText = styled.div`
  font-size: 3rem;
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
export const Button = styled.div<{ borderColor: string }>`
  ${(props) => props.borderColor && `border-color: ${props.borderColor};`}
  border-radius: 50%;
  border-style: solid;
  background: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 1;
  @media (min-width: 601px) {
    border-width: 20px;
    width: 200px;
    height: 200px;
  }
  @media (max-width: 600px) {
    width: 120px;
    height: 120px;
    border-width: 15px;
  } ;
`

export const PickContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const PickText = styled.div`
  @media (min-width: 601px) {
    font-size: 2rem;
  }
  @media (max-width: 600px) {
    margin-bottom: 10px;
    font-size: 1rem;
  }
`

export const ResultText = styled.div`
  font-size: 2rem;
`

export const PickStateContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`
export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  max-width: 200px;
  margin: 0 15px;
  @media (max-width: 600px) {
    display: none;
  }
`

export const MobileResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  max-width: 200px;
  margin: 0 15px;
  @media (min-width: 601px) {
    display: none;
  }
`

export const PlayButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: 1px solid #fbfbfb;
  background: #fbfbfb;
  color: hsl(214, 47%, 23%);
  font-size: 2em;
  width: 100%;
  height: 3rem;
  cursor: pointer;
`

export const ResultStateContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`
export const Blank = styled.div`
  border-color: #161f3e;
  border-radius: 50%;
  border-style: solid;
  background: #161f3e;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  @media (min-width: 601px) {
    margin: 25px;
    border-width: 20px;
    width: 150px;
    height: 150px;
  }
  @media (max-width: 600px) {
    margin: 10px;
    border-width: 15px;
    width: 100px;
    height: 100px;
  }
`
export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  @media (min-width: 601px) {
    padding-top: 150px;
    padding-bottom: 230px;
  }
  @media (max-width: 600px) {
    padding-top: 90px;
    padding-bottom: 135px;
  }
`
export const TopSelect = styled.div`
  position: absolute;
  top: 0;
`

export const MiddleSelect = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 601px) {
    width: 600px;
  }
  @media (max-width: 600px) {
    width: 340px;
  }
`
export const BottomSelect = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: absolute;
  bottom: 0;
  @media (min-width: 601px) {
    width: 500px;
  }
  @media (max-width: 600px) {
    width: 340px;
  }
`

export const Overlay = styled.img`
  position: absolute;
  z-index: 0;
  @media (min-width: 601px) {
    height: 30rem;
    width: 30rem;
  }
  @media (max-width: 600px) {
    height: 15rem;
    width: 15rem;
  }
`

export const ResultWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
