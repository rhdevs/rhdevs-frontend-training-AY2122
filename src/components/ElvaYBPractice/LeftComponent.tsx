import React from 'react'

import {
  LeftComponent,
  LeftHeader,
  PriceAndPerMonth,
  LeftPrice,
  LeftPerMonth,
  LeftFullAccess,
  SignUpButton,
} from './styles/LeftComponent.styled'

const LeftComponentContainer = () => {
  return (
    <LeftComponent>
      <LeftHeader>Monthly subscription</LeftHeader>
      <PriceAndPerMonth>
        <LeftPrice>$29</LeftPrice>
        <LeftPerMonth>per month</LeftPerMonth>
      </PriceAndPerMonth>
      <LeftFullAccess>Full access for less than $1 a day</LeftFullAccess>
      <SignUpButton>Sign Up</SignUpButton>
    </LeftComponent>
  )
}

export default LeftComponentContainer
