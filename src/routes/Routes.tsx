import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'

import Lesson1Example from '../pages/Lesson1Example'
import { PATHS } from './PATHS'
import { RouteWithBothNav, RouteWithTopNav } from './RouteTypes'

export const LandingPage = React.lazy(() => import(/* webpackChunckName: "LandingPage" */ '../pages/LandingPage'))
export const NotFound = React.lazy(() => import(/* webpackChunckName: "NotFound" */ '../pages/ErrorPage/NotFound'))
export const Groups = React.lazy(() => import(/* webpackChunckName: "Groups" */ '../pages/Groups'))
export const GroupsSwitch = React.lazy(
  () => import(/* webpackChunckName: "GroupsSwitch" */ '../pages/Groups/GroupsSwitch'),
)
export const ShoppingLists = React.lazy(() => import(/* webpackChunckName: "ShoppingLists" */ '../pages/ShoppingLists'))
export const ShoppingListCYYZ = React.lazy(
  () => import(/* webpackChunckName: "ShoppingListCYYZ" */ '../pages/ShoppingLists/ShoppingListCYYZ'),
)
export const ShoppingListAnimeGangRedux = React.lazy(
  () =>
    import(
      /* webpackChunckName: "ShoppingListAnimeGangReduxPage" */ '../pages/ShoppingLists/ShoppingListAnimeGangRedux'
    ),
)
export const Pair2MainPage = React.lazy(
  () => import(/* webpackChunckName: "Pair2MainPage" */ '../pages/ShoppingLists/Pair2'),
)
export const Pair2MainPageRedux = React.lazy(
  () => import(/* webpackChunckName: "Pair2MainPageRedux" */ '../pages/ShoppingLists/Pair2Redux'),
)
export const Pair3redux = React.lazy(
  () => import(/* webpackChunckName: "Pair3redux" */ '../pages/ShoppingLists/Pair3redux'),
)
export const Pair3MainPage = React.lazy(() => import(/* webpackChunckName: "Pair3" */ '../pages/ShoppingLists/Pair3'))
export const JasonYbShoppingListPage = React.lazy(
  () => import(/* webpackChunckName: "JasonYbShoppingListPage" */ '../pages/ShoppingLists/JasonYbShoppingListPage'),
)
export const JasonYbReduxShoppingListPage = React.lazy(
  () =>
    import(
      /* webpackChunckName: "JasonYbReduxShoppingListPage" */ '../pages/ShoppingLists/JasonYbReduxShoppingListPage'
    ),
)
export const SkZkShoppingPage = React.lazy(
  () => import(/* webpackChunckName: "SkZkShoppingPage" */ '../pages/ShoppingLists/SkZkShoppingPage'),
)
export const SkZkShoppingPageRedux = React.lazy(
  () => import(/* webpackChunckName: "SkZKShoppingPageRedux" */ '../pages/ShoppingLists/SkZkShoppingPageRedux'),
)
export const Shopping_YXWP = React.lazy(() => import('../pages/ShoppingLists/Shopping_YXWP'))

export const Routes = () => (
  <Switch>
    <RouteWithBothNav exact path="/" component={LandingPage} />
    <RouteWithTopNav exact path={PATHS.SHOPPING_PAGE_CHUNYU_YONGZHANG} component={ShoppingListCYYZ} />
    <RouteWithTopNav exact path={PATHS.SHOPPING_LIST_ANIME_GANG_REDUX} component={ShoppingListAnimeGangRedux} />
    <RouteWithTopNav exact path={PATHS.SHOPPING_LISTS} component={ShoppingLists} />
    <RouteWithTopNav exact path={PATHS.SHOPPING_PAGE_YIXUAN_WEIPIN} component={Shopping_YXWP} />
    <RouteWithTopNav exact path={PATHS.PAIR_2_SHOPPING_PAGE} component={Pair2MainPage} />
    <RouteWithTopNav exact path={PATHS.PAIR_2_SHOPPING_PAGE_REDUX} component={Pair2MainPageRedux} />
    <RouteWithTopNav exact path={PATHS.PAIR3_SHOPPING_PAGE} component={Pair3redux} />
    <RouteWithTopNav exact path={PATHS.PAIR_3_SHOPPING_PAGE} component={Pair3MainPage} />
    <RouteWithTopNav exact path={PATHS.JASON_YB_SHOPPING_LIST_PAGE} component={JasonYbShoppingListPage} />
    <RouteWithTopNav exact path={PATHS.JASON_YB_REDUX_SHOPPING_LIST_PAGE} component={JasonYbReduxShoppingListPage} />
    <RouteWithTopNav exact path={PATHS.SKZK_SHOPPING_PAGE} component={SkZkShoppingPage} />
    <RouteWithTopNav exact path={PATHS.SKZK_SHOPPING_PAGE_REDUX} component={SkZkShoppingPageRedux} />
    <RouteWithBothNav exact path={PATHS.GROUP_ROUTE} component={Groups} />
    <RouteWithTopNav exact path={`${PATHS.GROUP_ROUTE}/:groupNumber`} component={GroupsSwitch} />
    <Route exact path={`${PATHS.GROUP_ROUTE}/:groupNumber/screen/:screenNumber`} component={GroupsSwitch} />
    {/* example from lesson 1 (4oct) */}
    <Route exact path="/example" component={Lesson1Example} />
    <RouteWithBothNav exact path="/" component={NotFound} /> {/* fallback */}
    <Redirect to="/" />
  </Switch>
)
