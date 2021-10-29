import React from 'react'
import { Route } from 'react-router-dom'
import Footer from '../shared/Navigation/Footer'

import MainNavigation from '../shared/Navigation/MainNavigation'

import { StyledMain } from './styles/Routes.styled'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const RouteWithTopNav = (routeProps: any) => {
  const { component: Component, ...rest } = routeProps
  return (
    <Route
      {...rest}
      sensitive
      render={(props) => (
        <StyledMain>
          <MainNavigation />
          <Component {...props} />
        </StyledMain>
      )}
    />
  )
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const RouteWithBothNav = (routeProps: any) => {
  const { component: Component, ...rest } = routeProps
  return (
    <Route
      {...rest}
      sensitive
      render={(props) => (
        <StyledMain hasFooter>
          <MainNavigation />
          <Component {...props} />
          <Footer />
        </StyledMain>
      )}
    />
  )
}
