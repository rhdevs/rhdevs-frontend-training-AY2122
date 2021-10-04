import React, { Suspense, useEffect } from 'react'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'

import LoadingSpinner from './components/LoadingSpinner'
import MainNavigation from './shared/Navigation/MainNavigation'
import Lesson1Example from './pages/Lesson1Example'
import Footer from './shared/Navigation/Footer'

import './App.css'
import 'antd/dist/antd.css'

export enum PATHS {
  GROUP_ROUTE = '/group',
}
const LandingPage = React.lazy(() => import(/* webpackChunckName: "LandingPage" */ './pages/LandingPage'))
const NotFound = React.lazy(() => import(/* webpackChunckName: "NotFound" */ './pages/ErrorPage/NotFound'))
const Groups = React.lazy(() => import(/* webpackChunckName: "Groups" */ './pages/Groups'))

function App() {
  useEffect(() => {
    // To bring user to the op of the page on first render
    window.scrollTo(0, 0)
  }, [])

  const routes = (
    <Switch>
      <Route path="/" exact>
        <main>
          <MainNavigation />
          <LandingPage />
          <Footer />
        </main>
      </Route>
      <Route path={`${PATHS.GROUP_ROUTE}/:groupNumber`} exact>
        <main>
          <MainNavigation />
          <Groups />
          <Footer />
        </main>
      </Route>
      <Route path={`${PATHS.GROUP_ROUTE}/:groupNumber/screen/:screenNumber`} exact component={Groups} />
      {/* example from lesson 1 (4oct) */}
      <Route path="/example" exact component={Lesson1Example} />
      <Route>
        <main>
          <MainNavigation />
          <NotFound />
          <Footer />
        </main>
      </Route>
      <Redirect to="/" />
    </Switch>
  )

  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingSpinner />}>{routes}</Suspense>
    </BrowserRouter>
  )
}

export default App
