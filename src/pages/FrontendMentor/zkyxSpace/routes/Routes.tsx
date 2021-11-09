import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'

import { PATHS } from './PATHS'

const SpaceHome = React.lazy(() => import(/* webpackChunckName: "LandingPage" */ '../pages/Home'))
const NotFound = React.lazy(() => import(/* webpackChunckName: "NotFound" */ '../../../../pages/ErrorPage/NotFound'))

const SpaceCrew = React.lazy(() => import(/* webpackChunckName: "SpaceCrew" */ '../pages/Crew'))
const SpaceDestination = React.lazy(() => import(/* webpackChunckName: "SpaceDestination" */ '../pages/Destination'))
const SpaceTechnology = React.lazy(() => import(/* webpackChunckName: "SpaceTechnology" */ '../pages/Technology'))
export const Routes = () => (
  <Switch>
    <Route exact path="/" component={SpaceHome} />
    <Route exact path={PATHS.CREW} component={SpaceCrew} />
    <Route exact path={PATHS.DESTINATION} component={SpaceDestination} />
    <Route exact path={PATHS.TECHNOLOGY} component={SpaceTechnology} />
    <Route exact path="/" component={NotFound} />
    <Redirect to="/" />
  </Switch>
)
