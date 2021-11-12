import React, { useState } from 'react'
import {
  MainContainer,
  PackagesContainer,
  PageHeader,
  ToggleContainer,
  ToggleWord,
  BackgroundRight,
  BackgroundLeft,
  SwitchButton,
} from './styles/PriceToggleJasonStyles'
import NormalPackageCard from '../../../components/PriceToggleJason/NormalPackageCard'
import HighlightPackageCard from '../../../components/PriceToggleJason/HighlightPackageCard'
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
        <SwitchButton onChange={() => togglePackageType()}></SwitchButton>
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
        />
        <HighlightPackageCard
          isMonthly={monthly}
          monthlyPrice={24.99}
          annuallyPrice={249.99}
          storageCapacity={'1 TB'}
          noOfUsers={5}
          sendCapacity={10}
        />
        <NormalPackageCard
          left={false}
          isMonthly={monthly}
          monthlyPrice={39.99}
          annuallyPrice={399.99}
          storageCapacity={'2 TB'}
          noOfUsers={10}
          sendCapacity={20}
        />
      </PackagesContainer>
    </MainContainer>
  )
}
