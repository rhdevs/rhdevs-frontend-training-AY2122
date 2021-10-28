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
  SHOPPING_PAGE_PAIR_FOUR = '/shopping-lists-pair-4',
  SHOPPING_PAGE_PAIR_FOUR_REDUX = '/shopping-lists-pair-4-redux',
  SHOPPING_LIST_ANIME_GANG_REDUX = '/shopping-list-anime-gang-redux',
  PAIR_2_SHOPPING_PAGE = '/shopping/pair2',
  PAIR_2_SHOPPING_PAGE_REDUX = '/shopping/pair2-redux',
  PAIR3_SHOPPING_PAGE = '/shopping/pair3redux',
  PAIR_3_SHOPPING_PAGE = '/shopping/pair3',
  SHOPPING_PAGE_CHUNYU_YONGZHANG = '/shopping-lists/chunyu-yongzhang',
  JASON_YB_SHOPPING_LIST_PAGE = '/shopping-lists/jason_yb',
  JASON_YB_REDUX_SHOPPING_LIST_PAGE = '/shopping-lists/jason_yb-redux',
  SKZK_SHOPPING_PAGE = '/shopping/skzkpage',
  SKZK_SHOPPING_PAGE_REDUX = '/shopping/skzkredux',
  SHOPPING_PAGE_YIXUAN_WEIPIN = '/shopping/yixuanweipin',
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
const ShoppingCart4 = React.lazy(() => import(/* webpackChunckName: "ShoppingCart4" */ './pages/ShoppingCart4'))
const ShoppingCart4Redux = React.lazy(
  () => import(/* webpackChunckName: "ShoppingCart4Redux" */ './pages/ShoppingCart4Redux'),
)
const ShoppingListAnimeGangRedux = React.lazy(
  () => import(/* webpackChunckName: "ShoppingListAnimeGangReduxPage" */ './pages/ShoppingListAnimeGangRedux'),
)
const Pair2MainPage = React.lazy(() => import(/* webpackChunckName: "Pair2MainPage" */ './pages/Pair2'))
const Pair2MainPageRedux = React.lazy(() => import(/* webpackChunckName: "Pair2MainPageRedux" */ './pages/Pair2Redux'))
const Pair3redux = React.lazy(() => import(/* webpackChunckName: "Pair3redux" */ './pages/Pair3redux'))
const Pair3MainPage = React.lazy(() => import(/* webpackChunckName: "Pair3" */ './pages/Pair3'))
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
const Shopping_YXWP = React.lazy(() => import('./pages/Shopping_YXWP'))

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
      <Route path={PATHS.SHOPPING_PAGE_PAIR_FOUR} exact>
        <StyledMain>
          <MainNavigation />
          <ShoppingCart4 />
        </StyledMain>
      </Route>
      <Route path={PATHS.SHOPPING_PAGE_PAIR_FOUR_REDUX} exact>
        <StyledMain>
          <MainNavigation />
          <ShoppingCart4Redux />
        </StyledMain>
      </Route>
      <Route path={`${PATHS.SHOPPING_LISTS}/:groupnumber`} exact>
        <StyledMain>
          <MainNavigation />
        </StyledMain>
      </Route>
      <Route path={`${PATHS.GROUP_ROUTE}/:groupNumber`} exact></Route>
      <Route path={PATHS.SHOPPING_PAGE_YIXUAN_WEIPIN} exact>
        <StyledMain>
          <MainNavigation />
          <Shopping_YXWP />
        </StyledMain>
      </Route>
      <Route path={PATHS.PAIR_2_SHOPPING_PAGE} exact>
        <StyledMain>
          <MainNavigation />
          <Pair2MainPage />
        </StyledMain>
      </Route>
      <Route path={PATHS.PAIR_2_SHOPPING_PAGE_REDUX} exact>
        <StyledMain>
          <MainNavigation />
          <Pair2MainPageRedux />
        </StyledMain>
      </Route>
      <Route path={PATHS.PAIR3_SHOPPING_PAGE} exact>
        <StyledMain>
          <MainNavigation />
          <Pair3redux />
        </StyledMain>
      </Route>
      <Route path={PATHS.PAIR_3_SHOPPING_PAGE} exact>
        <StyledMain>
          <MainNavigation />
          <Pair3MainPage />
        </StyledMain>
      </Route>
      <Route path={`${PATHS.GROUP_ROUTE}/:groupNumber/screen/:screenNumber`} exact component={Groups} />
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
