import styled from 'styled-components'
import { Slider, Switch } from 'antd'

import BackgroundPic from '../../../assets/ElvaYongbin/BackgroundPic.svg'
import PatternCirclePic from '../../../assets/ElvaYongbin/images/pattern-circles.svg'
import SliderIcon from '../../../assets/ElvaYongbin/images/icon-slider.svg'

export const MainComponent = styled.div`
z-index: 2;
border-radius: 15px;
width: max-content;
height: auto;
display: flex;
padding-top: 30px;
background-color: #ffffff;
align-items: center;
justify-content: center;
flex-direction: column;
box-shadow: 0px 3px 10px rgb(0 0 0 / 0.2);
@media only screen and (max-width: 600px) {
  margin-top: 180px;
  height: 60vh;
  width: 55vw;

  
`

export const ToggleContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 120px;

  width: 80%;
  @media only screen and (max-width: 600px) {
    width: 100%;
    margin-left: 40px;
    top: -10px;
  }
`
export const Slidercontainer = styled.div`
  width: 60%;
  align-items: center;
  display: block;
  flex-direction: row;

  @media only screen and (max-width: 600px) {
    width: 85%;
    top: -85px;
  }
`

export const MainBottomComponent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  height: auto;
  box-shadow: 0 -1px 0 #d3d3d3;
  margin-top: 30px;
  padding-top: 20px;
  padding-bottom: 20px;

  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    top: 10px;
  }
`
export const PageViewPriceContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;

  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    margin-top: 0px;
    top: 10px;

    height: 50%;
  }
`
export const PageViewContainer = styled.div`
  width: 50%;
  color: hsl(225, 20%, 60%);
  text-align: center;
  margin-left: 20px;
  font-size: 15px;
  font-weight: 500;
  @media only screen and (max-width: 600px) {
    width: 100%;
    margin-left: 0px;
    margin-top: 20px;

    font-size: 14px;
  }
`
export const PriceContainer = styled.div`
  width: auto;
  text-align: right;
  font-weight: bold;
  color: hsl(227, 35%, 25%);
  font-size: 30px;
  margin-top: -13px;
  border: 2px solid green;
  @media only screen and (max-width: 600px) {
  }
`
export const PriceMonthContainer = styled.div`
  width: min-content;
  display: flex;
  flex-direction: row;
  border: 2px solid green;
  margin-left: auto;
  margin-right: auto;
  @media only screen and (max-width: 600px) {
    margin-top: 90px;
    border: 2px solid red;
  }
`
export const MonthContainer = styled.div`
  width: min-content;
  text-align: center;
  color: hsl(225, 20%, 60%);
  margin-left: 0px;
  border: 2px solid green;
  @media only screen and (max-width: 600px) {
    margin-left: 85px;
  }
`
export const StartTrialButton = styled.button`
  background-color: hsl(227, 35%, 25%);
  border-radius: 20px;
  width: 65%;
  height: 35%;
  color: hsl(226, 100%, 87%);
  border: none;
  margin-left: 40px;
  @media only screen and (max-width: 600px) {
    width: 100%;
    margin-top: 25px;
    margin-left: 0px;
    height: 25%;
  }
`
export const BottomLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
  align-items: center;
  padding-right: 30px;

  @media only screen and (max-width: 600px) {
    width: 100%;
    height: 30%;
    margin-top: -20px;
  }
`
export const BottomLeftText1 = styled.div`
  color: hsl(225, 20%, 60%);

  margin-right: 18px;
`
export const BottomLeftText2 = styled.div`
  color: hsl(225, 20%, 60%);
`
export const BottomLeftText3 = styled.div`
  color: hsl(225, 20%, 60%);

  margin-right: 50px;
`
export const TrialButtonContainer = styled.div`
  width: 50%;
  height: 100%;
  align-items: center;
  display: flex;
  padding-top: 20px;
`
export const DiscountButtonDesktop = styled.button`
  background-color: hsl(14, 92%, 95%);
  color: hsl(15, 100%, 70%);
  border-radius: 15px;
  font-size: 10px;
  font-weight: 700;
  width: 100%;
  height: 85%;
  margin-right: 30px;
  border: none;
  @media only screen and (max-width: 600px) {
    display: none;
  }
`
export const DiscountButtonMobile = styled.button`
  background-color: hsl(14, 92%, 95%);
  color: hsl(15, 100%, 70%);
  border-radius: 15px;
  font-size: 10px;
  font-weight: 700;
  width: 65%;
  height: 85%;
  margin-right: 30px;
  border: none;
  display: none;
  @media only screen and (max-width: 600px) {
    display: flex;
    height: 55%;
    text-align: center;
    padding-left: 10px;
    padding-top: 3px;
    width: 40%;
  }
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
  background-size: 100%;
  .ant-slider-handle {
    background-image: url(${SliderIcon});
    background-size: cover;
  }
`
