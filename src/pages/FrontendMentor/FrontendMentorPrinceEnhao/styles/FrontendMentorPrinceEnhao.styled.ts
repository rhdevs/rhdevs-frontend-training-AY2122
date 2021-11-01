import styled from 'styled-components'
// import BackgroundBottom from '../../../assets/princeenhao/bg-pattern-bottom.svg'
// import BackgroundCard from '../../../assets/princeenhao/bg-pattern-card.svg'
// import img from '../../../assets/princeenhao/bg-pattern-top.svg'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-color: #19a2ae;
  color: #19a2ae;
`
export const TopBackground = styled.img`
  z-index: 1;
  height: auto;
  width: 50vw;
  left: 0vw;
  top: -40vh;
  position: fixed;
`
export const BottomBackground = styled.img`
  z-index: 1;
  height: auto;
  width: 50vw;
  right: 0px;
  bottom: -40vh;
  position: fixed;
`
export const ProfileCardContainer = styled.div`
  z-index: 2;
  height: 60vh;
  width: 55vh;
  display: flex;
  flex-direction: column;
  justify-content: start;
  position: relative;
  background-color: white;
  opacity: 1;
  border: 0.3vh solid hsl(229, 23%, 23%);
  box-sizing: border-box;
  box-shadow: 0.5vh 0.5vh 0.5vh 0.5vh rgba(0, 0, 0, 0.08);
  border-radius: 2vh;
  overflow: hidden;
`

export const ProfileCardBackground = styled.img`
  overflow: hidden;
  width: 100%;
  height: 20%;
`

export const StyledSubheader = styled.h2`
  margin: 1rem 0 0 0;
  font-family: Arial, Helvetica, sans-serif;
`

export const StyledImg = styled.img`
  border-radius: 10px;
`
