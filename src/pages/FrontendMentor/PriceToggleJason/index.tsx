import React, { useState } from 'react'
import {
  HighlightPackageContainer,
  MainContainer,
  HighlightPackageHeader,
  PackagesContainer,
  PageHeader,
  ToggleContainer,
  ToggleWord,
  HighlightAlignmentContainer,
  HighlightPriceContainer,
  HighlightPrice,
  HighlightDetailsContainer,
  HighlightLearnMoreButton,
  BackgroundRight,
  BackgroundLeft,
  HighlightDollarSign,
} from './styles/PriceToggleJasonStyles'
import NormalPackageCard from '../../../components/PriceToggleJason/NormalPackageCard'
import { Switch } from 'antd'
import RightImage from './info/images/bg-top.svg'
import LeftImage from './info/images/bg-bottom.svg'

export default function PriceToggleJason() {
  const [monthly, setPackageType] = useState(false)

  const togglePackageType = () => {
    setPackageType(!monthly)
  }

  return (
    <MainContainer>
      <BackgroundRight src={RightImage}></BackgroundRight>
      <BackgroundLeft src={LeftImage}></BackgroundLeft>
      <PageHeader>Our Pricing</PageHeader>
      <ToggleContainer>
        <ToggleWord>Annually</ToggleWord>
        <Switch
          style={{ backgroundImage: 'linear-gradient(to right, hsl(236, 72%, 79%), hsl(237, 63%, 64%))' }}
          onChange={() => togglePackageType()}
        ></Switch>
        <ToggleWord>Monthly</ToggleWord>
      </ToggleContainer>
      <PackagesContainer>
        <NormalPackageCard
          left={true}
          isMonthly={monthly}
          monthlyPrice={19.99}
          annuallyPrice={199.99}
          storageCapacity={'500 GB'}
          noOfUsers={2}
          sendCapacity={3}
          isHighlightPackage={false}
        />
        <HighlightPackageContainer>
          <HighlightAlignmentContainer>
            <HighlightPackageHeader>Professional</HighlightPackageHeader>
            <HighlightPriceContainer>
              <HighlightDollarSign>$</HighlightDollarSign>
              <HighlightPrice>{monthly ? '24.99' : '249.99'}</HighlightPrice>
            </HighlightPriceContainer>
            <HighlightDetailsContainer>2 TB Storage</HighlightDetailsContainer>
            <HighlightDetailsContainer>10 Users Allowed</HighlightDetailsContainer>
            <HighlightDetailsContainer>Send up to 20 GB</HighlightDetailsContainer>
            <HighlightLearnMoreButton>LEARN MORE</HighlightLearnMoreButton>
          </HighlightAlignmentContainer>
        </HighlightPackageContainer>
        <NormalPackageCard
          left={false}
          isMonthly={monthly}
          monthlyPrice={39.99}
          annuallyPrice={399.99}
          storageCapacity={'2 TB'}
          noOfUsers={10}
          sendCapacity={20}
          isHighlightPackage={false}
        />
      </PackagesContainer>
    </MainContainer>
  )
}
