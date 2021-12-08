import React from 'react'

import Footer from '../shared/Navigation/Footer'
import MainNavigation from '../shared/Navigation/MainNavigation'

import { StyledMain } from './styles/Routes.styled'

export const RouteWithTopNav = (routeProps: { component: React.LazyExoticComponent<() => JSX.Element> }) => {
  const { component: Component } = routeProps
  return (
    <StyledMain>
      <MainNavigation />
      <Component />
    </StyledMain>
  )
}

export const RouteWithBothNav = (routeProps: { component: React.LazyExoticComponent<() => JSX.Element> }) => {
  const { component: Component } = routeProps

  return (
    <StyledMain hasFooter>
      <MainNavigation />
      <Component />
      <Footer />
    </StyledMain>
  )
}
