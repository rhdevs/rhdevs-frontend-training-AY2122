import styled from 'styled-components'

export const MainPage = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(225, 217, 221, 0.8);
`

export const MainContainer = styled.div`
  width: 70%;
  border-radius: 15px;
  overflow: hidden;
  @media (max-width: 375px) {
    border-radius: 5px;
  }
`
export const BottomComponent = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 375px) {
    flex-direction: column;
  }
`

export const TopComponent = styled.div`
  color: hsl(179, 62%, 43%);
  background-color: #ffffff;
  width: 100%;
  height: 35vh;
  @media (max-width: 375px) {
    display: flex;
    flex-direction: column;
    padding: 10%;
    height: 60vw;
  }
`

export const JoinCommHeader = styled.h1`
  color: hsl(179, 62%, 43%);
  font-size: 30px;
  font-weight: bold;
  padding: 30px 80px 10px 80px;
  @media (max-width: 375px) {
    font-size: 5vw;
    padding: 2vw;
  }
`
export const JoinCommSubHeader = styled.h2`
  color: hsl(71, 73%, 54%);
  font-size: 16px;
  font-weight: bold;
  padding: 00px 80px 10px 80px;
  @media (max-width: 375px) {
    font-size: 3vw;
    padding: 2vw;
  }
`
export const JoinCommBody = styled.div`
  color: hsl(218, 22%, 67%);
  font-size: 16px;
  padding: 00px 80px 00px 80px;
  break-between: always;
  @media (max-width: 375px) {
    font-size: 2.5vw;
    padding: 2vw;
    break-between: none;
  }
`
export const LeftComponent = styled.div`
  background-color: hsl(179, 62%, 43%);
  width: 50%;
  height: 45vh;
  @media (max-width: 375px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 60vw;
    overflow: hidden;
    padding: 10%;
  }
`
export const LeftHeader = styled.h1`
  color: hsl(204, 43%, 93%);
  font-size: 20px;
  padding: 40px 30px 5px 50px;
  font-weight: bold;
  @media (max-width: 375px) {
    font-size: 4vw;
    padding: 2vw;
  }
`
export const LeftPrice = styled.div`
  color: hsl(204, 43%, 93%);
  font-size: 30px;
  padding: 0px 10px 0px 50px;
  font-weight: bold;
  @media (max-width: 375px) {
    font-size: 7vw;
    padding: 2vw;
  }
`
export const LeftPerMonth = styled.div`
  color: hsl(204, 43%, 83%);
  font-size: 16px;
  padding: 15px 0px;
  @media (max-width: 375px) {
    font-size: 3vw;
    padding: 2vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
export const LeftFullAccess = styled.div`
  color: hsl(204, 43%, 93%);
  font-size: 16px;
  padding: 0px 50px;
  @media (max-width: 375px) {
    font-size: 3vw;
    padding: 2vw;
    margin-top: -5vw;
    margin-bottom: 4vw;
  }
`
export const PriceAndPerMonth = styled.div`
  flex-direction: row;
  display: flex;
  justify-content: flex-start;
  text-align: center;
  @media (max-width: 375px) {
    font-size: 5vw;
    padding: 2vw;
  }
`
export const RightComponent = styled.div`
  background-color: hsl(179, 62%, 48%);
  width: 50%;
  height: 45vh;
  @media (max-width: 375px) {
    width: 100%;
    height: 60vw;
    padding: 10%;
  }
`
export const RightHeader = styled.h1`
  color: hsl(204, 43%, 93%);
  font-size: 20px;
  padding: 40px 0px 10px 50px;
  @media (max-width: 375px) {
    font-size: 4vw;
    padding: 2vw;
  }
`
export const RightBody = styled.div`
  color: hsl(204, 43%, 83%);
  font-size: 16px;
  padding: 0px 0px 0px 50px;
  @media (max-width: 375px) {
    font-size: 2.5vw;
    padding: 2vw;
  }
`

export const ButtonContainer = styled.div`
  @media (max-width: 375px) {
  }
`
export const SignUpButton = styled.button`
  background-color: hsl(71, 73%, 54%);
  border: none;
  border-radius: 5px;
  padding: 0px 120px;
  position: absolute;
  margin-top: 15px;
  margin-left: 50px;
  padding: 10px 100px;
  color: hsl(204, 43%, 93%);
  font-size: 15px;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  @media (max-width: 375px) {
    margin: 1vw;
    margin-bottom: 5vw;
    justify-content: center;
    padding: 2vw 20vw;
    font-size: 3vw;
    position: relative;
    display: flex;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
  }
`
