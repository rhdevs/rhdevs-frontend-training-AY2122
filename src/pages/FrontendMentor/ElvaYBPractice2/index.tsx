import React, { useState } from 'react'
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
  0: '',
  25: '',
  50: '',
  75: '',
  100: '',
}

const ElvaYBPractice = () => {
  const [views, setViews] = useState(50)
  const [toggle, setToggle] = useState(false)
  console.log(views)
  return (
    <>
      <MainPage>
        <TopComponent>
          <TopComponentTopText>Simple, traffic-based Pricing</TopComponentTopText>
          <TopComponentBottomText>Sign-up for our 30 day trial. No credit card required.</TopComponentBottomText>
        </TopComponent>
        <MainComponent>
          <PageViewPriceContainer>
            {toggle === false ? (
              views === 0 ? (
                <PageViewContainer>{10}k Pageviews</PageViewContainer>
              ) : views === 25 ? (
                <PageViewContainer>{50}k Pageviews</PageViewContainer>
              ) : views === 50 ? (
                <PageViewContainer>{100}k Pageviews</PageViewContainer>
              ) : views === 75 ? (
                <PageViewContainer>{500}k Pageviews</PageViewContainer>
              ) : (
                <PageViewContainer>{1}M Pageviews</PageViewContainer>
              )
            ) : views === 0 ? (
              <PageViewContainer>{10}k Pageviews</PageViewContainer>
            ) : views === 25 ? (
              <PageViewContainer>{50}k Pageviews</PageViewContainer>
            ) : views === 50 ? (
              <PageViewContainer>{100}k Pageviews</PageViewContainer>
            ) : views === 75 ? (
              <PageViewContainer>{500}k Pageviews</PageViewContainer>
            ) : (
              <PageViewContainer>{1}M Pageviews</PageViewContainer>
            )}

            {toggle === false ? (
              views === 0 ? (
                <PriceContainer>$8.00</PriceContainer>
              ) : views === 25 ? (
                <PriceContainer>$12.00</PriceContainer>
              ) : views === 50 ? (
                <PriceContainer>$16.00</PriceContainer>
              ) : views === 75 ? (
                <PriceContainer>$24.00</PriceContainer>
              ) : (
                <PriceContainer>$36.00</PriceContainer>
              )
            ) : views === 0 ? (
              <PriceContainer>$6.00</PriceContainer>
            ) : views === 25 ? (
              <PriceContainer>$9.00</PriceContainer>
            ) : views === 50 ? (
              <PriceContainer>$12.00</PriceContainer>
            ) : views === 75 ? (
              <PriceContainer>$18.00</PriceContainer>
            ) : (
              <PriceContainer>$27.00</PriceContainer>
            )}
            <PriceContainer>/Month</PriceContainer>
          </PageViewPriceContainer>
          <Slidercontainer>
            <Slider marks={marks} onChange={(value) => setViews(value)} step={null} defaultValue={50} />
          </Slidercontainer>
          <Switch onChange={(checked) => setToggle(checked)} />
        </MainComponent>
      </MainPage>
    </>
  )
}

export default ElvaYBPractice
