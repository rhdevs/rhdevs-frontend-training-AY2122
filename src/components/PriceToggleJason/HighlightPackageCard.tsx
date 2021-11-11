import React from 'react'

import {
  HighlightAlignmentContainer,
  HighlightDollarSign,
  HighlightLearnMoreButton,
  HighlightDetailsContainer,
  HighlightPackageContainer,
  HighlightPrice,
  HighlightPriceContainer,
  HighlightPackageHeader,
} from './styles/HighlightPackageCard.styled'

interface PackageDetails {
  isMonthly: boolean
  monthlyPrice: number
  annuallyPrice: number
  storageCapacity: string
  noOfUsers: number
  sendCapacity: number
}

const HighlightPackageCard = (props: PackageDetails) => {
  return (
    <HighlightPackageContainer>
      <HighlightAlignmentContainer>
        <HighlightPackageHeader>Professional</HighlightPackageHeader>
        <HighlightPriceContainer>
          <HighlightDollarSign>$</HighlightDollarSign>
          <HighlightPrice>{props.isMonthly ? props.monthlyPrice : props.annuallyPrice}</HighlightPrice>
        </HighlightPriceContainer>
        <HighlightDetailsContainer>{props.storageCapacity} Storage</HighlightDetailsContainer>
        <HighlightDetailsContainer>{props.noOfUsers} Users Allowed</HighlightDetailsContainer>
        <HighlightDetailsContainer>Send up to {props.sendCapacity} GB</HighlightDetailsContainer>
        <HighlightLearnMoreButton>LEARN MORE</HighlightLearnMoreButton>
      </HighlightAlignmentContainer>
    </HighlightPackageContainer>
  )
}

export default HighlightPackageCard
