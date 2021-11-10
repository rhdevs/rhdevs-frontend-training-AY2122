import React from 'react'
import { Slider, Switch } from 'antd'

import {
  MainPage,
  TopComponent,
  TopComponentTopText,
  TopComponentBottomText,
  MainComponent,
  SliderBar,
  Slidercontainer,
  PageViewPriceContainer,
  PageViewContainer,
  PriceContainer,
} from './styles/SliderComponent.styled'

const marks = {
  0: '0°C',
  26: '26°C',
  37: '37°C',
  100: {
    style: {
      color: '#f50',
    },
    label: <strong>100°C</strong>,
  },
}

const ElvaYBPractice = () => {
  return (
    <>
      <MainPage>
        <TopComponent>
          <TopComponentTopText>Simple, traffic-based Pricing</TopComponentTopText>
          <TopComponentBottomText>Sign-up for our 30 day trial. No credit card required.</TopComponentBottomText>
        </TopComponent>
        <MainComponent>
          <PageViewPriceContainer>
            <PageViewContainer>100k PageViews</PageViewContainer>
            <PriceContainer>$16.00/Month</PriceContainer>
          </PageViewPriceContainer>
          <Slidercontainer>
            <Slider marks={marks} step={null} defaultValue={37} />
          </Slidercontainer>
        </MainComponent>
      </MainPage>
    </>
  )
}

export default ElvaYBPractice
