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
`
export const BottomContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const MiddleContainer = styled.div`
  color: hsl(179, 62%, 43%);
  background-color: #ffffff;
  width: 100%;
  height: 35vh;
`

export const JoinCommText1 = styled.div`
  color: hsl(179, 62%, 43%);
  font-size: 30px;
  font-weight: bold;
  padding: 30px 0px 10px 80px;
`
export const JoinCommText2 = styled.div`
  color: hsl(71, 73%, 54%);
  font-size: 16px;
  font-weight: bold;
  margin: 0px 0px 10px 80px;
`
export const JoinCommText3 = styled.div`
  color: hsl(218, 22%, 67%);
  font-size: 16px;
  margin: 0px 0px 0px 80px;
`
export const BottomLeftContainer = styled.div`
  background-color: hsl(179, 62%, 43%);
  width: 50%;
  height: 50vh;
`
export const BottomLeftMonthly = styled.div`
  color: hsl(204, 43%, 93%);
  font-size: 20px;
  padding: 40px 30px 5px 50px;
  font-weight: bold;
`
export const BottomLeftPrice = styled.div`
  color: hsl(204, 43%, 93%);
  font-size: 30px;
  padding: 0px 10px 0px 50px;
  font-weight: bold;
`
export const BottomLeftPerMonth = styled.div`
  color: hsl(204, 43%, 83%);
  font-size: 16px;
  padding: 15px 0px;
`
export const BottomLeftFullAccess = styled.div`
  color: hsl(204, 43%, 93%);
  font-size: 16px;
  padding: 0px 50px;
`
export const PriceAndPerMonth = styled.div`
  flex-direction: row;
  display: flex;
  justify-content: flex-start;
  text-align: center;
`
export const BottomRightContainer = styled.div`
  background-color: hsl(179, 62%, 48%);
  width: 50%;
  height: 50vh;
`
export const BottomRightShort = styled.div`
  color: hsl(204, 43%, 93%);
  font-size: 20px;
  padding: 40px 0px 10px 50px;
`
export const BottomRightLong = styled.div`
  color: hsl(204, 43%, 83%);
  font-size: 16px;
  padding: 0px 0px 0px 50px;
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
`
