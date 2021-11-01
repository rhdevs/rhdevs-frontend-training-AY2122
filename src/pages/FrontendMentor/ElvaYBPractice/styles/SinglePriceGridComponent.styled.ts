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

export const MainText = styled.div`
  width: 1440px;
`

export const MiddleContainer = styled.div`
  color: hsl(179, 62%, 43%);
  border-radius: 8px;
  margin 50px 100px;
  box-shadow: 0px 0px 14px 1px #00000024;
  background-color: #FFFFFF;
  width: 70%;
  height: 40vh;
`

export const JoinCommText1 = styled.div`
  color: 239593;
  font-size: 16px;
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
  width: 40%;
  height: 40vh;
`
export const Header2 = styled.div`
  color: white;
  font-size: 16px;
  margin: 50px 100px;
`
export const BottomRightContainer = styled.div`
  background-color: #38e0cd;
  width: 40%;
  height: 40vh;
`
