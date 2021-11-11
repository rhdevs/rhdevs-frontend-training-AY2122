import React from 'react'
import {
  DollarSign,
  LearnMoreButton,
  NormalDetailsContainer,
  NormalPackageContainer,
  NormalPrice,
  NormalPriceContainer,
  PackageHeader,
} from './styles/NormalPackageCard.styled'

interface PackageDetails {
  left: boolean
  isMonthly: boolean
  monthlyPrice: number
  annuallyPrice: number
  storageCapacity: string
  noOfUsers: number
  sendCapacity: number
  isHighlightPackage: boolean
}

const NormalPackageCard = (props: PackageDetails) => {
  return (
    <NormalPackageContainer left={props.left}>
      <PackageHeader>Basic</PackageHeader>
      <NormalPriceContainer>
        <DollarSign>$</DollarSign>
        <NormalPrice>{props.isMonthly ? props.monthlyPrice : props.annuallyPrice}</NormalPrice>
      </NormalPriceContainer>
      <NormalDetailsContainer>{props.storageCapacity} Storage</NormalDetailsContainer>
      <NormalDetailsContainer>{props.noOfUsers} Users Allowed</NormalDetailsContainer>
      <NormalDetailsContainer>Send up to {props.sendCapacity} GB</NormalDetailsContainer>
      <LearnMoreButton isHighlightPackage={props.isHighlightPackage}>LEARN MORE</LearnMoreButton>
    </NormalPackageContainer>
  )
}

export default NormalPackageCard
