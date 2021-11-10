import React from 'react'
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
  HighlightPriceContainer,
  NormalDetailsContainer,
  NormalLearnMoreButton,
  HighlightDetailsContainer,
  HighlightLearnMoreButton,
} from './styles/PriceToggleJasonStyles'
import { Switch } from 'antd'

export default function PriceToggleJason() {
  return (
    <MainContainer>
      <PageHeader>Our Pricing</PageHeader>
      <ToggleContainer>
        <ToggleWord>Annually</ToggleWord>
        <Switch></Switch>
        <ToggleWord>Monthly</ToggleWord>
      </ToggleContainer>
      <PackagesContainer>
        <NormalPackageContainerLeft>
          <PackageHeader>Basic</PackageHeader>
          <NormalPriceContainer>$199.99</NormalPriceContainer>
          <NormalDetailsContainer>500 GB Storage</NormalDetailsContainer>
          <NormalDetailsContainer>2 Users Allowed</NormalDetailsContainer>
          <NormalDetailsContainer>Send up to 3 GB</NormalDetailsContainer>
          <NormalLearnMoreButton>LEARN MORE</NormalLearnMoreButton>
        </NormalPackageContainerLeft>
        <HighlightPackageContainer>
          <HighlightAlignmentContainer>
            <HighlightPackageHeader>Professional</HighlightPackageHeader>
            <HighlightPriceContainer>$249.99</HighlightPriceContainer>
            <HighlightDetailsContainer>2 TB Storage</HighlightDetailsContainer>
            <HighlightDetailsContainer>10 Users Allowed</HighlightDetailsContainer>
            <HighlightDetailsContainer>Send up to 20 GB</HighlightDetailsContainer>
            <HighlightLearnMoreButton>LEARN MORE</HighlightLearnMoreButton>
          </HighlightAlignmentContainer>
        </HighlightPackageContainer>
        <NormalPackageContainerRight>
          <PackageHeader>Master</PackageHeader>
          <NormalPriceContainer>$399.99</NormalPriceContainer>
          <NormalDetailsContainer>2 TB Storage</NormalDetailsContainer>
          <NormalDetailsContainer>10 Users Allowed</NormalDetailsContainer>
          <NormalDetailsContainer>Send up to 20 GB</NormalDetailsContainer>
          <NormalLearnMoreButton>LEARN MORE</NormalLearnMoreButton>
        </NormalPackageContainerRight>
      </PackagesContainer>
    </MainContainer>
  )
}
