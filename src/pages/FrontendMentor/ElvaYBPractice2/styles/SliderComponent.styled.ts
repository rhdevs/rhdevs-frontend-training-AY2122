import styled from 'styled-components'
import { Slider, Switch } from 'antd'

import BackgroundPic from '../../../../assets/ElvaYongbin/BackgroundPic.svg'
import PatternCirclePic from '../../../../assets/ElvaYongbin/images/pattern-circles.svg'

export const MainPage = styled.div`
  z-index: 0;
  min-height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-image: url(${BackgroundPic});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: 0vw -40vh;
  color: hsl(230, 100%, 99%);
`

export const TopComponent = styled.div`
  background-image: url(${PatternCirclePic});
  background-size: 40% 40%;
  background-repeat: no-repeat;
  background-position: center;
  width: 40%;
  height: 20vh;
  text-align: center;
  position: absolute;
  top: 50px;
  align-items: center;
`
export const TopComponentTopText = styled.div`
  font-size: 20px;
  height: 10vh;
  align-items: center;
  font-weight: bold;
  color: hsl(227, 35%, 25%);
`
export const TopComponentBottomText = styled.div`
  color: grey;
  font-size: 15px;
  height: 10vh;
`
export const MainComponent = styled.div`
  z-index: 2;
  border-radius: 15px;
  width: 33vw;
  height: 50vh;
  display: flex;
  position: relative;
  background-color: #ffffff;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: 5px 5px black;
  top: -30px;
`

export const ToggleContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 100px;
`
export const Slidercontainer = styled.div`
  width: 60%;
  align-items: center;
  display: flex;
  flex-direction: row;
  position: absolute;
`

export const MainBottomComponent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  box-shadow: 0 -1px 0 #d3d3d3;
`
export const PageViewPriceContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-top: -20vh;
`
export const PageViewContainer = styled.div`
  width: 50%;
  color: hsl(225, 20%, 60%);
  text-align: center;
  margin-left: 20px;
  font-size: 15px;
`
export const PriceContainer = styled.div`
  width: 10%;
  text-align: right;
  margin-left: 40px;
  font-weight: bold;
  color: hsl(227, 35%, 25%);
  font-size: 50px;
`
export const MonthContainer = styled.div`
  width: 50%;
  text-align: center;
  color: hsl(225, 20%, 60%);
`
export const StartTrialButton = styled.button`
  background-color: hsl(227, 35%, 25%);
  border-radius: 20px;
  width: 65%;
  height: 35%;
  color: hsl(226, 100%, 87%);
`
export const BottomLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
  align-items: center;
  padding-right: 30px;
  padding-top: 20px;
`
export const BottomLeftText = styled.div`
  color: hsl(225, 20%, 60%);
  margin-top: 10px;
`
export const TrialButtonContainer = styled.div`
  width: 50%;
  height: 100%;
  align-items: center;
  display: flex;
  margin-top: 30px;
`
export const DiscountButton = styled.button`
  background-color: hsl(14, 92%, 95%);
  color: hsl(15, 100%, 70%);
  border-radius: 15px;
  font-size: 10px;
  width: 55%;
  height: 50%;
  margin-left: 20px;
  border: none;
`
export const CheckIcon = styled.img`
  object-fit: scale-down;
  vertical-align: middle;
  margin-left: 1vh;
`
export const ToggleContainerText = styled.div`
  color: hsl(225, 20%, 60%);
  width: 70%;
  height: 100%;
  text-align: center;
`
