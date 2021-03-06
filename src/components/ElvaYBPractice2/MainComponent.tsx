import React, { useState } from 'react'
import { Switch } from 'antd'

import IconCheck from '../../assets/ElvaYongbin/images/icon-check.svg'

import {
  MainComponent,
  PageViewContainer,
  PageViewPriceContainer,
  PriceMonthContainer,
  PriceContainer,
  MonthContainer,
  SlidercontainerDesktop,
  SlidercontainerMobile,
  StyleSlider,
  ToggleContainer,
  ToggleContainerText,
  DiscountButtonDesktop,
  DiscountButtonMobile,
  MainBottomComponent,
  BottomLeftContainer,
  BottomLeftText,
  TrialButtonContainer,
  CheckIcon,
  StartTrialButton,
} from './styles/MainComponent.styled'
const marks = {
  0: '',
  25: '',
  50: '',
  75: '',
  100: '',
}

const MainComponentContainer = () => {
  const [views, setViews] = useState(50)
  const [toggle, setToggle] = useState(false)
  return (
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
        <SlidercontainerMobile>
          <StyleSlider
            marks={marks}
            onChange={(value: React.SetStateAction<number>) => setViews(value)}
            step={null}
            defaultValue={50}
            handleStyle={{ backgroundColor: 'hsl(174, 86%, 45%)' }}
            trackStyle={{ backgroundColor: 'hsl(174, 86%, 45%)' }}
          />
        </SlidercontainerMobile>

        <PriceMonthContainer>
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
          <MonthContainer>/month</MonthContainer>
        </PriceMonthContainer>
      </PageViewPriceContainer>

      <SlidercontainerDesktop>
        <StyleSlider
          marks={marks}
          onChange={(value: React.SetStateAction<number>) => setViews(value)}
          step={null}
          defaultValue={50}
          handleStyle={{ backgroundColor: 'hsl(174, 86%, 45%)' }}
          trackStyle={{ backgroundColor: 'hsl(174, 86%, 45%)' }}
        />
      </SlidercontainerDesktop>
      <ToggleContainer>
        <ToggleContainerText>Monthly Billing</ToggleContainerText>
        <Switch onChange={(checked) => setToggle(checked)} />
        <ToggleContainerText>Yearly Billing</ToggleContainerText>
        <DiscountButtonDesktop>25% discount</DiscountButtonDesktop>
        <DiscountButtonMobile>25%</DiscountButtonMobile>
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
  )
}

export default MainComponentContainer
