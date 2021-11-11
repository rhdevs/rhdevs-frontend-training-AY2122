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
  background-size: 100% 50%;
  color: hsl(230, 100%, 99%);
`

export const TopComponent = styled.div`
  background-image: url(${PatternCirclePic});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  padding: 10px;
  width: 40%;
  text-align: center;
  position: relative;
`
export const TopComponentTopText = styled.div`
  color: black;
  font-size: 15px;
`
export const TopComponentBottomText = styled.div`
  color: grey;
  font-size: 7px;
`
export const MainComponent = styled.div`
  z-index: 2;
  border-radius: 15px;
  width: 70vw;
  height: 70vh;
  display: flex;
  position: relative;
  background-color: white;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const SliderBoxComponent = styled.div``
export const Slidercontainer = styled.div`
  width: 60%;
  align-items: center;
`

export const SliderBar = styled.div`
  webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 25px;
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
`
export const MainBottomComponent = styled.div``
export const PageViewPriceContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`
export const PageViewContainer = styled.div`
  width: 50%;
  color: black;
  text-align: center;
`
export const PriceContainer = styled.div`
  width: 50%;
  color: black;
  text-align: center;
`
export const RightTrialButton = styled.div``
export const LeftTrialText = styled.div``
