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
  height: 40vh;
`

export const JoinCommText1 = styled.div`
  color: hsl(179, 62%, 43%);
  font-size: 30px;
  font-weight: bold;
  padding: 30px 100px 30px 100px;
`
export const JoinCommText2 = styled.div`
  color: hsl(71, 73%, 54%);
  font-size: 16px;
  font-weight: bold;
  margin: 0 100px;
`
export const JoinCommText3 = styled.div`
  color: hsl(218, 22%, 67%);
  font-size: 16px;
  margin: 0 100px;
`
export const BottomLeftContainer = styled.div`
  background-color: hsl(179, 62%, 43%);
  width: 50%;
  height: 40vh;
  box-shadow: 0px 0px 14px 1px #00000024;
`
export const BottomLeftMonthly = styled.div`
  color: hsl(204, 43%, 93%);
  font-size: 16px;
  padding: 20px 50px;
`
export const BottomLeftPrice = styled.div`
  color: hsl(204, 43%, 93%);
  font-size: 30px;
  padding: 0px 10px 20px 50px;
  font-weight: bold;
`
export const BottomLeftPerMonth = styled.div`
  color: hsl(204, 43%, 93%);
  font-size: 16px;
  padding: 15px 0px;
`
export const BottomLeftFullAccess = styled.div`
  color: hsl(204, 43%, 93%);
  font-size: 12px;
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
  height: 40vh;
  box-shadow: 0px 0px 14px 1px #00000024;
`
export const BottomRightShort = styled.div`
  color: hsl(204, 43%, 93%);
  font-size: 20px;
  padding: 20px 50px 8px 50px;
`
export const BottomRightLong = styled.div`
  color: hsl(204, 43%, 93%);
  font-size: 12px;
  padding: 0px 50px;
`

export const SignUpButton = styled.div`
  .ant-btn-primary {
    background-color: hsl(71, 73%, 54%);
    border-color: hsl(71, 73%, 54%);
    border-radius: 5px;
    padding: 0px 120px;
    position: absolute;
    left: 215px;
    top: 520px;
  }
`
