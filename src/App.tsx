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
  SHOPPING_LISTS = '/shopping-lists',
  EXAMPLE_SHOPPING_PAGE = '/shopping/example',
}

const LandingPage = React.lazy(() => import(/* webpackChunckName: "LandingPage" */ './pages/LandingPage'))
const NotFound = React.lazy(() => import(/* webpackChunckName: "NotFound" */ './pages/ErrorPage/NotFound'))
const Groups = React.lazy(() => import(/* webpackChunckName: "Groups" */ './pages/Groups'))
const ShoppingListsMainPage = React.lazy(
  () => import(/* webpackChunckName: "ShoppingListsMainPage" */ './pages/ShoppingListsMain'),
)

function App() {
  useEffect(() => {
    // To bring user to the top of the page on first render
    window.scrollTo(0, 0)
  }, [])

  const routes = (
    <Switch>
      <Route path="/" exact>
        <main className="main-with-footer">
          <MainNavigation />
          <LandingPage />
          <Footer />
        </main>
      </Route>
      <Route path={PATHS.SHOPPING_LISTS} exact>
        <main>
          <MainNavigation />
          <ShoppingListsMainPage />
        </main>
      </Route>
      <Route path={`${PATHS.GROUP_ROUTE}/:groupNumber`} exact>
        <main>
          <MainNavigation />
          <Groups />
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
