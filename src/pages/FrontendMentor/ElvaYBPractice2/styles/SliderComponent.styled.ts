import styled from 'styled-components'
import { Slider, Switch } from 'antd'

import BackgroundPic from '../../../../assets/ElvaYongbin/BackgroundPic.svg'
import PatternCirclePic from '../../../../assets/ElvaYongbin/images/pattern-circles.svg'
import SliderIcon from '../../../../assets/ElvaYongbin/images/icon-slider.svg'

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
  background-repeat: no-repeat;
  background-position: center;
  width: 40%;
  height: 20vh;
  text-align: center;
  position: absolute;
  top: 50px;
  align-items: center;
  @media only screen and (max-width: 600px) {
    margin-top: 30px;
    height: 22vh;
  }
`
export const TopComponentTopText = styled.div`
  font-size: 25px;
  height: 10vh;
  align-items: center;
  font-weight: bold;
  color: hsl(227, 35%, 25%);
  padding-top: 35px;
  @media only screen and (max-width: 600px) {
    width: 100%;
    font-size: 18px;
  }
`
export const TopComponentBottomText = styled.div`
  color: grey;
  font-size: 13px;
  height: 10vh;
  @media only screen and (max-width: 600px) {
    width: 65%;
    font-size: 12px;
    margin-left: 40px;
  }
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
  box-shadow: 0px 3px 10px rgb(0 0 0 / 0.2);
  top: -30px;
  @media only screen and (max-width: 600px) {
    margin-top: 180px;
    height: 60vh;
    width: 40vw;
`

export const ToggleContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 120px;
  position: relative;
  top: 70px;
  width: 80%;
  @media only screen and (max-width: 600px) {
    width: 100%;
    margin-left: 40px;
  }
`
export const Slidercontainer = styled.div`
  width: 60%;
  align-items: center;
  display: block;
  flex-direction: row;
  position: relative;
  top: 70px;
  @media only screen and (max-width: 600px) {
    width: 85%;
  }
`

export const MainBottomComponent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  box-shadow: 0 -1px 0 #d3d3d3;
  position: relative;
  top: 100px;
  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }
`
export const PageViewPriceContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-top: -20vh;
  position: relative;
  top: 50px;
`
export const PageViewContainer = styled.div`
  width: 50%;
  color: hsl(225, 20%, 60%);
  text-align: center;
  margin-left: 20px;
  font-size: 15px;
  font-weight: 500;
`
export const PriceContainer = styled.div`
  width: 10%;
  text-align: right;
  margin-left: 40px;
  font-weight: bold;
  color: hsl(227, 35%, 25%);
  font-size: 30px;
  margin-top: -13px;
`
export const MonthContainer = styled.div`
  width: 50%;
  text-align: center;
  color: hsl(225, 20%, 60%);
  margin-left: -40px;
`
export const StartTrialButton = styled.button`
  background-color: hsl(227, 35%, 25%);
  border-radius: 20px;
  width: 65%;
  height: 35%;
  color: hsl(226, 100%, 87%);
  border: none;
  margin-top: -20px;
  margin-left: 40px;
  position: relative;
  @media only screen and (max-width: 600px) {
    width: 100%;
    margin-top: 25px;
    margin-left: 0px;
    position: relative;
  }
`
export const BottomLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
  align-items: center;
  padding-right: 30px;
  padding-top: 20px;
  @media only screen and (max-width: 600px) {
    width: 100%;
    height: 30%;
    margin-top: -20px;
  }
`
export const BottomLeftText1 = styled.div`
  color: hsl(225, 20%, 60%);
  margin-top: 10px;
  margin-right: 18px;
`
export const BottomLeftText2 = styled.div`
  color: hsl(225, 20%, 60%);
  margin-top: 10px;
`
export const BottomLeftText3 = styled.div`
  color: hsl(225, 20%, 60%);
  margin-top: 10px;
  margin-right: 50px;
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
  font-weight: 700;
  width: 65%;
  height: 85%;
  margin-right: 30px;
  border: none;
  position: relative;
`
export const CheckIcon = styled.img`
  object-fit: scale-down;
  vertical-align: middle;
  margin-left: 1vh;
`
export const ToggleContainerText = styled.div`
  color: hsl(225, 20%, 60%);
  width: 90%;
  height: 100%;
  text-align: center;
  font-size: 12px;
  margin: auto;
`
export const StyleSlider = styled(Slider)`
  background-image: url(${SliderIcon});
  background-size: 100%;
`
