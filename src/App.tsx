import React, { Suspense, useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import { Routes } from './routes/Routes'
import store from './store/store'
import LoadingSpinner from './components/LoadingSpinner'

import 'antd/dist/antd.css'
<<<<<<< HEAD
import { StyledMain } from './App.styled'

export enum PATHS {
  GROUP_ROUTE = '/group',
  SHOPPING_LISTS = '/shopping-lists',
  EXAMPLE_SHOPPING_PAGE = '/shopping/example',
  SKZK_SHOPPING_PAGE = '/shopping/skzkpage',
  SKZK_SHOPPING_PAGE_REDUX = '/shopping/skzkredux',
  PAIR_2_SHOPPING_PAGE = '/shopping/pair2',
  SHOPPING_PAGE_CHUNYU_YONGZHANG = '/shopping-lists/chunyu-yongzhang',
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
const SkZkShoppingPage = React.lazy(
  () => import(/* webpackChunckName: "SkZkShoppingPage" */ './pages/SkZkShoppingPage'),
)
const SkZkShoppingPageRedux = React.lazy(
  () => import(/* webpackChunckName: "SkZKShoppingPageRedux" */ './pages/SkZkShoppingPageRedux'),
)
const Pair2MainPage = React.lazy(() => import(/* webpackChunckName: "Pair2MainPage" */ './pages/Pair2'))
=======
>>>>>>> 603f6c96d8b7cef6cc63e31961818a202afdcc42

function App() {
  useEffect(() => {
    // To bring user to the top of the page on first render
    window.scrollTo(0, 0)
  }, [])

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes />
        </Suspense>
      </BrowserRouter>
    </Provider>
  )
}

export default App
