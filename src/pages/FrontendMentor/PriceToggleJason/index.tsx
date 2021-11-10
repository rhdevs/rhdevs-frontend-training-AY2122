import React, { useState } from 'react'
import {
  HighlightPackageContainer,
  MainContainer,
  NormalPackageContainerLeft,
  NormalPackageContainerRight,
  PackageHeader,
  HighlightPackageHeader,
  PackagesContainer,
  PageHeader,
  ToggleContainer,
  ToggleWord,
  HighlightAlignmentContainer,
  NormalPriceContainer,
  DollarSign,
  NormalPrice,
  HighlightPriceContainer,
  HighlightPrice,
  NormalDetailsContainer,
  NormalLearnMoreButton,
  HighlightDetailsContainer,
  HighlightLearnMoreButton,
  BackgroundRight,
  BackgroundLeft,
  BackgroundContainer,
  HighlightDollarSign,
} from './styles/PriceToggleJasonStyles'
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
      <BackgroundContainer>
        <BackgroundRight src={RightImage}></BackgroundRight>
        <BackgroundLeft src={LeftImage}></BackgroundLeft>
        <PageHeader>Our Pricing</PageHeader>
        <ToggleContainer>
          <ToggleWord>Annually</ToggleWord>
          <Switch onChange={() => togglePackageType}></Switch>
          <ToggleWord>Monthly</ToggleWord>
        </ToggleContainer>
        <PackagesContainer>
          <NormalPackageContainerLeft>
            <PackageHeader>Basic</PackageHeader>
            <NormalPriceContainer>
              <DollarSign>$</DollarSign>
              <NormalPrice>{monthly ? '19.99' : '199.99'}</NormalPrice>
            </NormalPriceContainer>
            <NormalDetailsContainer>500 GB Storage</NormalDetailsContainer>
            <NormalDetailsContainer>2 Users Allowed</NormalDetailsContainer>
            <NormalDetailsContainer>Send up to 3 GB</NormalDetailsContainer>
            <NormalLearnMoreButton>LEARN MORE</NormalLearnMoreButton>
          </NormalPackageContainerLeft>
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
          <NormalPackageContainerRight>
            <PackageHeader>Master</PackageHeader>
            <NormalPriceContainer>
              <DollarSign>$</DollarSign>
              <NormalPrice>{monthly ? '39.99' : '399.99'}</NormalPrice>
            </NormalPriceContainer>
            <NormalDetailsContainer>2 TB Storage</NormalDetailsContainer>
            <NormalDetailsContainer>10 Users Allowed</NormalDetailsContainer>
            <NormalDetailsContainer>Send up to 20 GB</NormalDetailsContainer>
            <NormalLearnMoreButton>LEARN MORE</NormalLearnMoreButton>
          </NormalPackageContainerRight>
        </PackagesContainer>
      </BackgroundContainer>
    </MainContainer>
  )
}
