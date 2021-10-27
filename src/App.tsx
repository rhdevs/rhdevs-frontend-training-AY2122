import React, { Suspense, useEffect } from 'react'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'

import store from './store/store'
import LoadingSpinner from './components/LoadingSpinner'
import MainNavigation from './shared/Navigation/MainNavigation'
import Lesson1Example from './pages/Lesson1Example'
import Footer from './shared/Navigation/Footer'

import 'antd/dist/antd.css'
import { StyledMain } from './App.styled'

export enum PATHS {
  GROUP_ROUTE = '/group',
  SHOPPING_LISTS = '/shopping-lists',
  EXAMPLE_SHOPPING_PAGE = '/shopping/example',
  SHOPPING_LIST_ANIME_GANG_REDUX = '/shopping-list-anime-gang-redux',
  SHOPPING_PAGE_CHUNYU_YONGZHANG = '/shopping-lists/chunyu-yongzhang',
  JASON_YB_SHOPPING_LIST_PAGE = '/shopping-lists/jason_yb',
  JASON_YB_REDUX_SHOPPING_LIST_PAGE = '/shopping-lists/jason_yb-redux',
  SKZK_SHOPPING_PAGE = '/shopping/skzkpage',
  SKZK_SHOPPING_PAGE_REDUX = '/shopping/skzkredux',
  PAIR_2_SHOPPING_PAGE = '/shopping/pair2',
}

const LandingPage = React.lazy(() => import(/* webpackChunckName: "LandingPage" */ './pages/LandingPage'))
const NotFound = React.lazy(() => import(/* webpackChunckName: "NotFound" */ './pages/ErrorPage/NotFound'))
const Groups = React.lazy(() => import(/* webpackChunckName: "Groups" */ './pages/Groups'))
const ShoppingListCYYZ = React.lazy(
  () => import(/* webpackChunckName: "ShoppingListsMainPage" */ './pages/ShoppingListCYYZ'),
)
const ShoppingListsMainPage = React.lazy(
  () => import(/* webpackChunckName: "ShoppingListsMainPage" */ './pages/ShoppingListsMain'),
)
const ShoppingListAnimeGangRedux = React.lazy(
  () => import(/* webpackChunckName: "ShoppingListAnimeGangReduxPage" */ './pages/ShoppingListAnimeGangRedux'),
)
const JasonYbShoppingListPage = React.lazy(
  () => import(/* webpackChunckName: "JasonYbShoppingListPage" */ './pages/JasonYbShoppingListPage'),
)
const JasonYbReduxShoppingListPage = React.lazy(
  () => import(/* webpackChunckName: "JasonYbReduxShoppingListPage" */ './pages/JasonYbReduxShoppingListPage'),
)
const SkZkShoppingPage = React.lazy(
  () => import(/* webpackChunckName: "SkZkShoppingPage" */ './pages/SkZkShoppingPage'),
)
const SkZkShoppingPageRedux = React.lazy(
  () => import(/* webpackChunckName: "SkZKShoppingPageRedux" */ './pages/SkZkShoppingPageRedux'),
)
const Pair2MainPage = React.lazy(() => import(/* webpackChunckName: "Pair2MainPage" */ './pages/Pair2'))

function App() {
  useEffect(() => {
    // To bring user to the top of the page on first render
    window.scrollTo(0, 0)
  }, [])

  const routes = (
    <Switch>
      <Route path="/" exact>
        <StyledMain hasFooter>
          <MainNavigation />
          <LandingPage />
          <Footer />
        </StyledMain>
      </Route>
      <Route path={PATHS.SHOPPING_PAGE_CHUNYU_YONGZHANG} exact>
        <StyledMain>
          <MainNavigation />
          <ShoppingListCYYZ />
        </StyledMain>
      </Route>
      <Route path={PATHS.SHOPPING_LIST_ANIME_GANG_REDUX} exact>
        <StyledMain>
          <MainNavigation />
          <ShoppingListAnimeGangRedux />
        </StyledMain>
      </Route>
      <Route path={PATHS.SHOPPING_LISTS} exact>
        <StyledMain>
          <MainNavigation />
          <ShoppingListsMainPage />
        </StyledMain>
      </Route>
      <>
        <Route path={PATHS.JASON_YB_SHOPPING_LIST_PAGE} exact>
          <StyledMain>
            <MainNavigation />
            <JasonYbShoppingListPage />
          </StyledMain>
        </Route>
        <Route path={PATHS.JASON_YB_REDUX_SHOPPING_LIST_PAGE} exact>
          <StyledMain>
            <MainNavigation />
            <JasonYbReduxShoppingListPage />
          </StyledMain>
        </Route>
        <Route path={PATHS.SKZK_SHOPPING_PAGE} exact>
          <StyledMain>
            <MainNavigation />
            <SkZkShoppingPage />
          </StyledMain>
        </Route>
        <Route path={PATHS.SKZK_SHOPPING_PAGE_REDUX} exact>
          <StyledMain>
            <MainNavigation />
            <SkZkShoppingPageRedux />
          </StyledMain>
        </Route>
        <Route path={`${PATHS.GROUP_ROUTE}/:groupNumber`} exact>
          <StyledMain>
            <MainNavigation />
            <Groups />
          </StyledMain>
        </Route>
        <Route path={PATHS.PAIR_2_SHOPPING_PAGE} exact>
          <StyledMain>
            <MainNavigation />
            <Pair2MainPage />
          </StyledMain>
        </Route>
        <Route path={`${PATHS.GROUP_ROUTE}/:groupNumber/screen/:screenNumber`} exact component={Groups} />
      </>
      {/* example from lesson 1 (4oct) */}
      <Route path="/example" exact component={Lesson1Example} />
      <Route>
        <StyledMain>
          <MainNavigation />
          <NotFound />
          <Footer />
        </StyledMain>
      </Route>
      <Redirect to="/" />
    </Switch>
  )

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Suspense fallback={<LoadingSpinner />}>{routes}</Suspense>
      </BrowserRouter>
    </Provider>
  )
}

export default App
