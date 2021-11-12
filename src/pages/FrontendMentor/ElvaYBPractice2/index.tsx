import React, { useState } from 'react'
import { Slider, Switch } from 'antd'

import IconCheck from '../../../assets/ElvaYongbin/images/icon-check.svg'
import SliderIcon from '../../../../assets/ElvaYongbin/images/icon-slider.svg'

import {
  MainPage,
  TopComponent,
  TopComponentTopText,
  TopComponentBottomText,
  MainComponent,
  Slidercontainer,
  PageViewPriceContainer,
  PageViewContainer,
  PriceContainer,
  MonthContainer,
  StartTrialButton,
  BottomLeftContainer,
  BottomLeftText,
  MainBottomComponent,
  ToggleContainer,
  DiscountButton,
  CheckIcon,
  ToggleContainerText,
  TrialButtonContainer,
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
                <PageViewContainer>{10}k PAGEVIEWS</PageViewContainer>
              ) : views === 25 ? (
                <PageViewContainer>{50}k PAGEVIEWS</PageViewContainer>
              ) : views === 50 ? (
                <PageViewContainer>{100}k PAGEVIEWS</PageViewContainer>
              ) : views === 75 ? (
                <PageViewContainer>{500}k PAGEVIEWS</PageViewContainer>
              ) : (
                <PageViewContainer>{1}M PAGEVIEWS</PageViewContainer>
              )
            ) : views === 0 ? (
              <PageViewContainer>{10}k PAGEVIEWS</PageViewContainer>
            ) : views === 25 ? (
              <PageViewContainer>{50}k PAGEVIEWS</PageViewContainer>
            ) : views === 50 ? (
              <PageViewContainer>{100}k PAGEVIEWS</PageViewContainer>
            ) : views === 75 ? (
              <PageViewContainer>{500}k PAGEVIEWS</PageViewContainer>
            ) : (
              <PageViewContainer>{1}M PAGEVIEWS</PageViewContainer>
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
            <MonthContainer>/Month</MonthContainer>
          </PageViewPriceContainer>
          <Slidercontainer>
            <Slider marks={marks} onChange={(value) => setViews(value)} step={null} defaultValue={50} />
          </Slidercontainer>
          <ToggleContainer>
            <ToggleContainerText>Monthly Billing</ToggleContainerText>
            <Switch onChange={(checked) => setToggle(checked)} />
            <ToggleContainerText>Yearly Billing</ToggleContainerText>
            <DiscountButton>25% discount</DiscountButton>
          </ToggleContainer>
          <MainBottomComponent>
            <BottomLeftContainer>
              <BottomLeftText>
                <CheckIcon src={IconCheck} alt="Tick"></CheckIcon>Unlimited websites
              </BottomLeftText>
              <BottomLeftText>
                <CheckIcon src={IconCheck} alt="Tick"></CheckIcon>100% data ownership
              </BottomLeftText>
              <BottomLeftText>
                <CheckIcon src={IconCheck} alt="Tick"></CheckIcon>Email reports
              </BottomLeftText>
            </BottomLeftContainer>
            <TrialButtonContainer>
              <StartTrialButton>Start my trial</StartTrialButton>
            </TrialButtonContainer>
          </MainBottomComponent>
        </MainComponent>
      </MainPage>
    </>
  )
}

export default ElvaYBPractice
