import React from 'react'
import {
  HighlightPackageContainer,
  MainContainer,
  NormalPackageContainerLeft,
  NormalPackageContainerRight,
  PackagesContainer,
  PageHeader,
  ToggleContainer,
  ToggleWord,
} from './styles/PriceToggleJasonStyles'
import { Switch } from 'antd'

export default function PriceToggleJason() {
  return (
    <MainContainer>
      <PageHeader>Our pricing</PageHeader>
      <ToggleContainer>
        <ToggleWord>Annually</ToggleWord>
        <Switch></Switch>
        <ToggleWord>Monthly</ToggleWord>
      </ToggleContainer>
      <PackagesContainer>
        <NormalPackageContainerLeft></NormalPackageContainerLeft>
        <HighlightPackageContainer></HighlightPackageContainer>
        <NormalPackageContainerRight></NormalPackageContainerRight>
      </PackagesContainer>
    </MainContainer>
  )
}
