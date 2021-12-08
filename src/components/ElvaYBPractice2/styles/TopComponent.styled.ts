import styled from 'styled-components'
import BackgroundPic from '../../../assets/ElvaYongbin/BackgroundPic.svg'
import PatternCirclePic from '../../../assets/ElvaYongbin/images/pattern-circles.svg'
import SliderIcon from '../../../assets/ElvaYongbin/images/icon-slider.svg'

export const TopComponent = styled.div`
  background-image: url(${PatternCirclePic});
  background-repeat: no-repeat;
  background-position: center;
  width: auto;
  height: auto;
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
