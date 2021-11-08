import styled from 'styled-components'

import BackgroundPic from '../../../../assets/ElvaYongbin/BackgroundPic.svg'
import PatternCirclePic from '../../../../assets/ElvaYongbin/images/pattern-circles.svg'

export const MainPage = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Background = styled.div`
  background-image: url(${BackgroundPic});
  background-position: center top;
`

export const TopComponent = styled.div`
  background-image: url(${PatternCirclePic});
  background-position: center top;
  padding: 10px;
  margin: 10px;
`
export const MainComponent = styled.div`
  border-radius: 15px;
  width: 70%;
  background-color: red;
  height: 70%;
`

export const SliderBoxComponent = styled.div``
export const MainBottomComponent = styled.div``
export const RightTrialButton = styled.div``
export const LeftTrialText = styled.div``
