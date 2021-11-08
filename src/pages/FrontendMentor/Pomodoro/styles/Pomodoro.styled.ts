import styled from 'styled-components'

export const MainContainer = styled.div`
  height: calc(100vh - 3rem);
  overflow: auto;
  background: #1e213f;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const StyledTitle = styled.h1`
  font-family: Kumbh Sans, serif;
  font-size: 32px;
  color: #d7e0ff;
  margin: 0 0 55px 0;
`

export const StyledLabel = styled.div<{ isSelected: boolean }>`
  background: ${(props) => (props.isSelected ? `#f87070` : `#161932`)};
  color: ${(props) => (props.isSelected ? `#1e213f` : `#d7e0ff`)};
  border-radius: 25px;
  font-family: Kumbh Sans, serif;
  font-size: 14px;
  width: 120px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`
export const StyledLabelContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  background: #161932;
  @media (min-width: 601px) {
    margin: 0 0 45px 0;
  }
  @media (max-width: 600px) {
    margin: 0 0 109px 0;
  }
`
//hacky solution to prevent circle from going out of shape
export const StyledTimerMainContainer = styled.div`
  @media (min-width: 601px) {
    margin: 0 0 30px 0;
  }
  @media (max-width: 600px) {
    margin: 0 0 79px 0;
  }
`

export const StyledTimerContainer = styled.div`
  @media (min-width: 601px) {
    width: 410px;
    height: 410px;
  }
  @media (max-width: 600px) {
    width: 300px;
    height: 300px;
  }
  border-radius: 50%;
  background: linear-gradient(315deg, #2e325a 0%, #0e112a 100%);
  box-shadow: 50px 50px 100px 0 #121530, -50px -50px 100px 0 #272c5a;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

export const StyledTimerSubContainer = styled.div`
  font-family: Kumbh Sans, serif;
  color: #d7e0ff;
  @media (min-width: 601px) {
    width: 366px;
    height: 366px;
  }
  @media (max-width: 600px) {
    width: 268px;
    height: 268px;
  }
  border-radius: 50%;
  background: #161932;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const StyledTimer = styled.h2`
  color: inherit;
  @media (min-width: 601px) {
    font-size: 100px;
    margin: 0 0 19px 0;
  }
  @media (max-width: 600px) {
    font-size: 80px;
    margin: 0 0 12px 0;
  }
`

export const StyledPause = styled.p`
  color: inherit;
  @media (min-width: 601px) {
    font-size: 16px;
    letter-spacing: 15px;
  }
  @media (max-width: 600px) {
    font-size: 14px;
    letter-spacing: 13px;
  }
`

export const StyledSettings = styled.img`
  height: 27px;
  width: 27px;
  color: #d7e0ff;
  cursor: pointer;
`
