import styled from 'styled-components'

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
  position: relative;
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
