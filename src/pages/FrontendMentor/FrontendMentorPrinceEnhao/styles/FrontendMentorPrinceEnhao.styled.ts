import styled from 'styled-components'

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
  align-items: center;
  justify-content: start;
  position: relative;
  background-color: white;
  opacity: 1;
  box-sizing: border-box;
  box-shadow: 0.5vh 0.5vh 0.5vh 0.5vh rgba(0, 0, 0, 0.08);
  border-radius: 2vh;
  overflow: hidden;
`

export const ProfileCardBackground = styled.img`
  width: 100%;
  height: 35%;
`

export const ProfileCardBottom = styled.div`
  overflow: hidden;
  width: 100%;
  height: 30%;
  border-top: 0.2vh solid black;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const ProfileCardWordsContainer = styled.div`
  z-index: 2;
  height: 100%;
  width: 33%;
  padding: 5px;
  margin: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  background-color: white;
  overflow: hidden;
`

export const ProfileCardBigWords = styled.div`
  overflow: hidden;
  width: 100%;
  height: 50%;
  color: black;
  font-family: 'Kumbh Sans', sans-serif;
  font-size: 1.5rem;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: end;
  // background-color: black;
`
export const ProfileCardSmallWords = styled.div`
  overflow: hidden;
  width: 100%;
  height: 50%;
  color: black;
  font-family: 'Kumbh Sans', sans-serif;
  font-size: 0.75rem;
  font-weight: 300;
  text-align: center;
  // background-color: black;
  position: relative;
`
export const ProfilePicContainer = styled.div`
  width: 100%;  
  height 0%; 
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
export const NameAgeContainer = styled.div`
  width: 100%;
  height: 35%;
  position: relative;
`

export const StyledSubheader = styled.h2`
  margin: 1rem 0 0 0;
  font-family: Arial, Helvetica, sans-serif;
`

export const StyledImg = styled.img`
  z-index: 3;
  border-radius: 50%;
  position: relative;
  width: 30%;
  height: auto;
  border: 3px solid white;
`
