import React from 'react'
import { Route, Routes as Switch } from 'react-router-dom'

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
const MarcusFEMentor2Home = React.lazy(
  () => import(/* webpackChunckName: "MarcusFEMentor2" */ '../pages/FrontendMentor/MarcusFEMentor2/mainPage'),
)
const MarcusFEMentor2About = React.lazy(
  () => import(/* webpackChunckName: "MarcusFEMentor2_about" */ '../pages/FrontendMentor/MarcusFEMentor2/aboutPage'),
)
const MarcusFEMentor2Contact = React.lazy(
  () =>
    import(/* webpackChunckName: "MarcusFEMentor2_contact" */ '../pages/FrontendMentor/MarcusFEMentor2/contactPage'),
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
const MaximWpWebsite = React.lazy(
  () => import(/* webpackChunckName: "MaximWpWebsite " */ '../pages/FrontendMentor/Maximweipin'),
)
const RockPaperScissors = React.lazy(
  () => import(/* webpackChunckName: "RockPaperScissors" */ '../pages/FrontendMentor/RockPaperScissors'),
)
const MaximWPProj2 = React.lazy(
  () => import(/* webpackChunckName: "Maximwp_proj2" */ '../pages/FrontendMentor/Maximwp_proj2'),
)
const CalculatorApp = React.lazy(
  () => import(/* webpackChunckName: "CalculatorApp" */ '../pages/FrontendMentor/CalculatorApp'),
)
const SkIPAddress = React.lazy(
  () => import(/* webpackChunckName: "SkIPAddress" */ '../pages/FrontendMentor/SkIPAddress'),
)
const KYStatsCard = React.lazy(
  () => import(/* webpackChunckName: "KYStatsCard" */ '../pages/FrontendMentor/KYStatsCard'),
)
const FrontEndMentorHubble = React.lazy(
  () => import(/* webpackChunckName: "hubble" */ '../pages/FrontendMentor/hubble'),
)
const YxZkCountdown = React.lazy(
  () => import(/* webpackChunckName: "YxZkCountdown" */ '../pages/FrontendMentor/YxZkCountdown'),
)
const KYJobListing = React.lazy(
  () => import(/* webpackChunckName: "KYJobListing" */ '../pages/FrontendMentor/KYJobListing'),
)
const PriceToggleJason = React.lazy(
  () => import(/* webpackChunckName: "PriceToggleJason" */ '../pages/FrontendMentor/PriceToggleJason'),
)

const Pomodoro = React.lazy(() => import(/* webpackChunckName: "Pomodoro" */ '../pages/FrontendMentor/Pomodoro'))

export const Routes = () => (
  <Switch>
    <Route path="/" element={<RouteWithBothNav component={LandingPage} />} />
    <Route path={PATHS.GROUP_ROUTE} element={<RouteWithBothNav component={Groups} />} />
    <Route path={PATHS.SHOPPING_LISTS} element={<RouteWithTopNav component={ShoppingLists} />} />
    <Route path={PATHS.EXAMPLE_SHOPPING_PAGE} element={<RouteWithTopNav component={ShoppingListExample} />} />
    <Route path={PATHS.SHOPPING_PAGE_CHUNYU_YONGZHANG} element={<RouteWithTopNav component={ShoppingListCYYZ} />} />
    <Route
      path={PATHS.SHOPPING_LIST_ANIME_GANG_REDUX}
      element={<RouteWithTopNav component={ShoppingListAnimeGangRedux} />}
    />
    <Route path={PATHS.SHOPPING_LIST_ANIME_GANG} element={<RouteWithTopNav component={ShoppingListAnimegang} />} />
    <Route path={PATHS.SHOPPING_PAGE_YIXUAN_WEIPIN} element={<RouteWithTopNav component={Shopping_YXWP} />} />
    <Route path={PATHS.YIXUAN_WEIPIN_SHOPPING_REDUX} element={<RouteWithTopNav component={YXWPRedux} />} />
    <Route path={PATHS.PAIR_2_SHOPPING_PAGE} element={<RouteWithTopNav component={Pair2MainPage} />} />
    <Route path={PATHS.PAIR_2_SHOPPING_PAGE_REDUX} element={<RouteWithTopNav component={Pair2MainPageRedux} />} />
    <Route path={PATHS.PAIR3_SHOPPING_PAGE} element={<RouteWithTopNav component={Pair3redux} />} />
    <Route path={PATHS.PAIR_3_SHOPPING_PAGE} element={<RouteWithTopNav component={Pair3MainPage} />} />
    <Route path={PATHS.JASON_YB_SHOPPING_LIST_PAGE} element={<RouteWithTopNav component={JasonYbShoppingListPage} />} />
    <Route
      path={PATHS.JASON_YB_REDUX_SHOPPING_LIST_PAGE}
      element={<RouteWithTopNav component={JasonYbReduxShoppingListPage} />}
    />
    <Route path={PATHS.SKZK_SHOPPING_PAGE} element={<RouteWithTopNav component={SkZkShoppingPage} />} />
    <Route path={PATHS.SKZK_SHOPPING_PAGE_REDUX} element={<RouteWithTopNav component={SkZkShoppingPageRedux} />} />
    <Route path={PATHS.SHOPPING_PAGE_PAIR_FOUR} element={<RouteWithTopNav component={ShoppingCart4} />} />
    <Route path={PATHS.SHOPPING_PAGE_PAIR_FOUR_REDUX} element={<RouteWithTopNav component={ShoppingCart4Redux} />} />
    <Route path={PATHS.FRONTEND_MENTOR} element={<RouteWithTopNav component={FrontendMentorLanding} />} />
    <Route path={PATHS.MAXIM_WEIPIN_WEBSITE} element={<RouteWithTopNav component={MaximWpWebsite} />} />
    <Route path={PATHS.KY_STATS_CARD_COMPONENT} element={<RouteWithTopNav component={KYStatsCard} />} />
    <Route
      path={PATHS.FRONTEND_MENTOR_ELVA_YONGBIN_PRACTICE}
      element={<RouteWithTopNav component={ElvaYBPractice} />}
    />
    <Route path={PATHS.TIME_DASHBOARD} element={<RouteWithTopNav component={TimeDashboard} />} />
    <Route path={PATHS.SK_DASHBOARD} element={<RouteWithTopNav component={SkDashboard} />} />
    <Route path={`${PATHS.GROUP_ROUTE}/:groupNumber`} element={<RouteWithTopNav component={GroupsSwitch} />} />
    <Route path={PATHS.ROCK_PAPER_SCISSORS} element={<RouteWithTopNav component={RockPaperScissors} />} />
    <Route path={PATHS.MAXIMWP_PROJ2} element={<RouteWithTopNav component={MaximWPProj2} />} />
    <Route path={PATHS.POMODORO} element={<RouteWithTopNav component={Pomodoro} />} />
    <Route path={PATHS.YX_ZK_COUNTDOWN} element={<RouteWithTopNav component={YxZkCountdown} />} />
    <Route path={PATHS.SK_IPADDRESS} element={<RouteWithTopNav component={SkIPAddress} />} />
    <Route path={PATHS.FRONTEND_MENTOR_HUBBLE} element={<RouteWithTopNav component={FrontEndMentorHubble} />} />
    <Route path={PATHS.KY_JOB_LISTING} element={<RouteWithTopNav component={KYJobListing} />} />
    <Route path={`${PATHS.GROUP_ROUTE}/:groupNumber/screen/:screenNumber`} element={<GroupsSwitch />} />
    <Route path={PATHS.MARCUS_FE_MENTOR} element={<MarcusFEMentor />} />
    <Route path={`${PATHS.MARCUS_FE_MENTOR}/:countryName`} element={<CountriesSwitch />} />
    <Route path={PATHS.MARCUS_FE_MENTOR_2_HOME} element={<MarcusFEMentor2Home />} />
    <Route path={PATHS.MARCUS_FE_MENTOR_2_ABOUT} element={<MarcusFEMentor2About />} />
    <Route path={PATHS.MARCUS_FE_MENTOR_2_CONTACT} element={<MarcusFEMentor2Contact />} />
    <Route path={PATHS.FRONTEND_MENTOR_TIP_CALCULATOR_APP} element={<TipCalculatorApp />} />
    <Route path={PATHS.FRONTEND_MENTOR_PRINCE_ENHAO} element={<FrontendMentorPrinceEnhao />} />
    <Route path={PATHS.FRONTEND_MENTOR_PRINCE_ENHAO_CALC} element={<CalculatorApp />} />
    <Route path={PATHS.FRONTEND_MENTOR_PRICE_TOGGLE_JASON} element={<PriceToggleJason />} />
    {/* example from lesson 1 (4oct) */}
    <Route path="/example" element={<Lesson1Example />} />
    <Route path="*" element={<RouteWithBothNav component={NotFound} />} />
    {/* fallback */}
  </Switch>
)
