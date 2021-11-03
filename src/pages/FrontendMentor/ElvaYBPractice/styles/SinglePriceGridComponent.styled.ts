import { Content } from 'antd/lib/layout/layout'
import styled from 'styled-components'
import { preProcessFile } from 'typescript'

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
  color: 239593;
  font-size: 30px;
  margin: 0 100px;
`
export const JoinCommText2 = styled.div`
  color: #ded02b;
  font-size: 16px;
  margin: 0 100px;
`
export const JoinCommText3 = styled.div`
  color: #9b9a8e;
  font-size: 16px;
  margin: 0 100px;
`
export const BottomLeftContainer = styled.div`
  background-color: #2db3a3;
  width: 50%;
  height: 40vh;
  border-radius: 8px;
  box-shadow: 0px 0px 14px 1px #00000024;
  flex-direction: column;
  align-items: center;
`
export const BottomLeftMonthly = styled.div`
  color: white;
  font-size: 16px;
  margin: auto 10%;
`
export const BottomLeftPrice = styled.div`
  color: #fcfeff;
  font-size: 30px;
  margin-left: 10%;
  font-weight: bold;
`
export const BottomLeftPerMonth = styled.div`
  color: #d4d7d9;
  font-size: 16px;
  margin-left: 5%;
`
export const BottomLeftFullAccess = styled.div`
  color: white;
  font-size: 12px;
  margin: auto;
  margin-left: 10%;
`
export const PriceAndPerMonth = styled.div`
  flex-direction: row;
  display: flex;
  justify-content: flex-start;
  text-align: center;
  align-items: center;
`
export const BottomRightContainer = styled.div`
  background-color: #38e0cd;
  width: 50%;
  height: 40vh;
  border-radius: 8px;
  box-shadow: 0px 0px 14px 1px #00000024;
`
export const BottomRightShort = styled.div`
  color: #fcfeff;
  font-size: 20px;
  margin: auto;
  margin-left: 10%;
`
export const BottomRightLong = styled.div`
  color: #d4d7d9;
  font-size: 12px;
  margin: auto;
  margin-left: 10%;
  white-space: pre-line;
`

export const SignUpButton = styled.div`
  text-align: center;
  border-radius: 20px;
  .ant-btn {
    font-size: 17px;
    letter-spacing: 0em;
    text-align: center;
    font-weight: 200;
  }
  .ant-btn-primary {
    background-color: #dbed11;
    border-color: #72ba75;
    width: 80%;
    margin-top: 10px;
    border-radius: 10px;
    height: 20%;
  }
  .ant-btn-primary:focus {
    background-color: #72ba75;
    border-color: #72ba75;
  }
  .ant-btn-primary:hover {
    background-color: #72ba75;
    border-color: #72ba75;
  }
`
