import React from 'react'

import { TopComponent, TopComponentTopText, TopComponentBottomText } from './styles/TopComponent.styled'

const TopComponentContainer = () => {
  return (
    <TopComponent>
      <TopComponentTopText>Simple, traffic-based Pricing</TopComponentTopText>
      <TopComponentBottomText>Sign-up for our 30 day trial. No credit card required.</TopComponentBottomText>
    </TopComponent>
  )
}

export default TopComponentContainer
