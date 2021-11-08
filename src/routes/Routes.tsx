import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'

import Lesson1Example from '../pages/Lesson1Example'
import { PATHS } from './PATHS'
import { RouteWithBothNav, RouteWithTopNav } from './RouteTypes'

const LandingPage = React.lazy(() => import(/* webpackChunckName: "LandingPage" */ '../pages/LandingPage'))
const NotFound = React.lazy(() => import(/* webpackChunckName: "NotFound" */ '../pages/ErrorPage/NotFound'))
const Groups = React.lazy(() => import(/* webpackChunckName: "Groups" */ '../pages/Groups'))
const GroupsSwitch = React.lazy(() => import(/* webpackChunckName: "GroupsSwitch" */ '../pages/Groups/GroupsSwitch'))
const ShoppingLists = React.lazy(() => import(/* webpackChunckName: "ShoppingLists" */ '../pages/ShoppingLists'))
const ShoppingListExample = React.lazy(
  () => import(/* webpackChunckName: "ShoppingListExample" */ '../pages/ShoppingLists/ShoppingExample'),
)
const FrontendMentorLanding = React.lazy(
  () => import(/* webpackChunckName: "FrontendMentorLanding" */ '../pages/FrontendMentor'),
)
const ShoppingListCYYZ = React.lazy(
  () => import(/* webpackChunckName: "ShoppingListCYYZ" */ '../pages/ShoppingLists/ShoppingListCYYZ'),
)
const ShoppingListAnimeGangRedux = React.lazy(
  () =>
    import(
      /* webpackChunckName: "ShoppingListAnimeGangReduxPage" */ '../pages/ShoppingLists/ShoppingListAnimeGangRedux'
    ),
)
const Pair2MainPage = React.lazy(() => import(/* webpackChunckName: "Pair2MainPage" */ '../pages/ShoppingLists/Pair2'))
const Pair2MainPageRedux = React.lazy(
  () => import(/* webpackChunckName: "Pair2MainPageRedux" */ '../pages/ShoppingLists/Pair2Redux'),
)
const Pair3redux = React.lazy(() => import(/* webpackChunckName: "Pair3redux" */ '../pages/ShoppingLists/Pair3redux'))
const Pair3MainPage = React.lazy(() => import(/* webpackChunckName: "Pair3" */ '../pages/ShoppingLists/Pair3'))
const JasonYbShoppingListPage = React.lazy(
  () => import(/* webpackChunckName: "JasonYbShoppingListPage" */ '../pages/ShoppingLists/JasonYbShoppingListPage'),
)
const JasonYbReduxShoppingListPage = React.lazy(
  () =>
    import(
      /* webpackChunckName: "JasonYbReduxShoppingListPage" */ '../pages/ShoppingLists/JasonYbReduxShoppingListPage'
    ),
)
const SkZkShoppingPage = React.lazy(
  () => import(/* webpackChunckName: "SkZkShoppingPage" */ '../pages/ShoppingLists/SkZkShoppingPage'),
)
const SkZkShoppingPageRedux = React.lazy(
  () => import(/* webpackChunckName: "SkZKShoppingPageRedux" */ '../pages/ShoppingLists/SkZkShoppingPageRedux'),
)
const Shopping_YXWP = React.lazy(() => import('../pages/ShoppingLists/Shopping_YXWP'))
const YXWPRedux = React.lazy(() => import(/* webpackChunckName: "YXWPRedux" */ '../pages/ShoppingLists/YXWPRedux'))
const ShoppingCart4 = React.lazy(
  () => import(/* webpackChunckName: "ShoppingCart4" */ '../pages/ShoppingLists/ShoppingCart4'),
)
const ShoppingCart4Redux = React.lazy(
  () => import(/* webpackChunckName: "ShoppingCart4Redux" */ '../pages/ShoppingLists/ShoppingCart4Redux'),
)
const ShoppingListAnimegang = React.lazy(
  () => import(/* webpackChunckName: "ShoppingAnimegang" */ '../pages/ShoppingLists/ShoppingAnimegang'),
)
const TimeDashboard = React.lazy(
  () => import(/* webpackChunckName: "TimeDashBoard" */ '../pages/FrontendMentor/zkyxTimeDashboard'),
)
const FrontendMentorPrinceEnhao = React.lazy(
  () =>
    import(/* webpackChunckName: "FrontendMentorPrinceEnhao" */ '../pages/FrontendMentor/FrontendMentorPrinceEnhao'),
)
const TipCalculatorApp = React.lazy(
  () => import(/* webpackChunckName: "TipCalculatorApp" */ '../pages/FrontendMentor/TipCalculatorApp'),
)
const MarcusFEMentor = React.lazy(
  () => import(/* webpackChunckName: "MarcusFEMentor" */ '../pages/FrontendMentor/MarcusFEMentor'),
)
const CountriesSwitch = React.lazy(
  () => import(/* webpackChunckName: "CountriesSwitch" */ '../pages/FrontendMentor/MarcusFEMentor/CountriesSwitch'),
)
const ElvaYBPractice = React.lazy(
  () => import(/* webpackChunckName: "ElvaYBPractice" */ '../pages/FrontendMentor/ElvaYBPractice'),
)
const SkDashboard = React.lazy(
  () => import(/* webpackChunckName: "SkDashboard" */ '../pages/FrontendMentor/SkDashboard'),
)
const RockPaperScissors = React.lazy(
  () => import(/* webpackChunckName: "RockPaperScissors" */ '../pages/FrontendMentor/RockPaperScissors'),
)
const KYStatsCard = React.lazy(
  () => import(/* webpackChunckName: "KYStatsCard" */ '../pages/FrontendMentor/KYStatsCard'),
)

const FrontEndMentorHubble = React.lazy(
  () => import(/* webpackChunckName: "hubble" */ '../pages/FrontendMentor/hubble'),
)

export const Routes = () => (
  <Switch>
    <RouteWithBothNav exact path="/" component={LandingPage} />
    <RouteWithBothNav exact path={PATHS.GROUP_ROUTE} component={Groups} />
    <RouteWithTopNav exact path={`${PATHS.GROUP_ROUTE}/:groupNumber`} component={GroupsSwitch} />
    <Route exact path={`${PATHS.GROUP_ROUTE}/:groupNumber/screen/:screenNumber`} component={GroupsSwitch} />
    <RouteWithTopNav exact path={PATHS.SHOPPING_LISTS} component={ShoppingLists} />
    <RouteWithTopNav exact path={PATHS.EXAMPLE_SHOPPING_PAGE} component={ShoppingListExample} />
    <RouteWithTopNav exact path={PATHS.SHOPPING_PAGE_CHUNYU_YONGZHANG} component={ShoppingListCYYZ} />
    <RouteWithTopNav exact path={PATHS.SHOPPING_LIST_ANIME_GANG_REDUX} component={ShoppingListAnimeGangRedux} />
    <RouteWithTopNav exact path={PATHS.SHOPPING_LIST_ANIME_GANG} component={ShoppingListAnimegang} />
    <RouteWithTopNav exact path={PATHS.SHOPPING_PAGE_YIXUAN_WEIPIN} component={Shopping_YXWP} />
    <RouteWithTopNav exact path={PATHS.YIXUAN_WEIPIN_SHOPPING_REDUX} component={YXWPRedux} />
    <RouteWithTopNav exact path={PATHS.PAIR_2_SHOPPING_PAGE} component={Pair2MainPage} />
    <RouteWithTopNav exact path={PATHS.PAIR_2_SHOPPING_PAGE_REDUX} component={Pair2MainPageRedux} />
    <RouteWithTopNav exact path={PATHS.PAIR3_SHOPPING_PAGE} component={Pair3redux} />
    <RouteWithTopNav exact path={PATHS.PAIR_3_SHOPPING_PAGE} component={Pair3MainPage} />
    <RouteWithTopNav exact path={PATHS.JASON_YB_SHOPPING_LIST_PAGE} component={JasonYbShoppingListPage} />
    <RouteWithTopNav exact path={PATHS.JASON_YB_REDUX_SHOPPING_LIST_PAGE} component={JasonYbReduxShoppingListPage} />
    <RouteWithTopNav exact path={PATHS.SKZK_SHOPPING_PAGE} component={SkZkShoppingPage} />
    <RouteWithTopNav exact path={PATHS.SKZK_SHOPPING_PAGE_REDUX} component={SkZkShoppingPageRedux} />
    <RouteWithTopNav exact path={PATHS.SHOPPING_PAGE_PAIR_FOUR} component={ShoppingCart4} />
    <RouteWithTopNav exact path={PATHS.SHOPPING_PAGE_PAIR_FOUR_REDUX} component={ShoppingCart4Redux} />
    <RouteWithTopNav exact path={PATHS.FRONTEND_MENTOR} component={FrontendMentorLanding} />
    <RouteWithTopNav exact path={PATHS.KY_STATS_CARD_COMPONENT} component={KYStatsCard} />
    <RouteWithTopNav exact path={PATHS.FRONTEND_MENTOR_ELVA_YONGBIN_PRACTICE} component={ElvaYBPractice} />
    <RouteWithTopNav exact path={PATHS.TIME_DASHBOARD} component={TimeDashboard} />
    <RouteWithTopNav exact path={PATHS.SK_DASHBOARD} component={SkDashboard} />
    <Route exact path={PATHS.MARCUS_FE_MENTOR} component={MarcusFEMentor} />
    <Route exact path={`${PATHS.MARCUS_FE_MENTOR}/:countryName`} component={CountriesSwitch} />
    <RouteWithTopNav exact path={PATHS.ROCK_PAPER_SCISSORS} component={RockPaperScissors} />
    {/* example from lesson 1 (4oct) */}
    <Route exact path="/example" component={Lesson1Example} />
    <Route exact path={PATHS.FRONTEND_MENTOR_TIP_CALCULATOR_APP} component={TipCalculatorApp} />
    <Route exact path={PATHS.FRONTEND_MENTOR_PRINCE_ENHAO} component={FrontendMentorPrinceEnhao} />
    <RouteWithTopNav exact path={PATHS.FRONTEND_MENTOR_HUBBLE component={FrontEndMentorHubble} />
    <RouteWithBothNav exact path="/" component={NotFound} /> {/* fallback */}
    <Redirect to="/" />
  </Switch>
)
