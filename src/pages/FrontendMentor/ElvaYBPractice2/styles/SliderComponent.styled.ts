import styled from 'styled-components'
import { Slider, Switch } from 'antd'

import BackgroundPic from '../../../../assets/ElvaYongbin/BackgroundPic.svg'
import PatternCirclePic from '../../../../assets/ElvaYongbin/images/pattern-circles.svg'

export const MainPage = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${BackgroundPic});
  background-repeat: no-repeat;
  background-size: 100% 50%;
`

export const TopComponent = styled.div`
  background-image: url(${PatternCirclePic});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  padding: 10px;
  width: 40%;
  text-align: center;
  height: 50%;
  margin: 0 auto;
`
export const MainComponent = styled.div`
  border-radius: 15px;
  width: 70%;
  background-color: red;
  height: 70%;
`

export const SliderBoxComponent = styled.div``
export const Slidercontainer = styled.div`
  width: 100%;
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
export const RightTrialButton = styled.div``
export const LeftTrialText = styled.div``
