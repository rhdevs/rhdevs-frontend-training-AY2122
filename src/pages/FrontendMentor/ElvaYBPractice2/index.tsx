import Slider from '@ant-design/react-slick'
import React from 'react'

import { MainPage, TopComponent, MainComponent, SliderBar, Slidercontainer } from './styles/SliderComponent.styled'

const ElvaYBPractice = () => {
  return (
    <MainPage>
      <TopComponent>Simple, Traffic Based Pricing</TopComponent>
      <MainComponent>
        <Slidercontainer>
          <Slider />
        </Slidercontainer>
      </MainComponent>
    </MainPage>
  )
}

export default ElvaYBPractice
