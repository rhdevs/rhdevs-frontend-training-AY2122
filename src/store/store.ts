import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { shoppingLists } from './shoppingLists/reducer'
import { shoppingCart4Redux } from './shoppingCart4Redux/reducer'
import { animeGangRedux } from './animeGangRedux/reducer'
import { jasonYbReduxShoppingList } from './JasonYbReduxShoppingList/reducer'
import { pair2 } from './pair2/reducer'
import { pair3Redux } from './Pair3redux/reducer'
import { shoppingListsCYYZ } from './shoppingListsCYYZ/reducer'
import { shoppingListsSKZK } from './skzk/reducer'
import { marcusFEMentor } from './MarcusFEMentor/reducer'
import { yxwp_store } from './yxwp_store/reducer'
import { tipCalculatorApp } from './tipCalculatorApp/reducer'
import { kyJobListing } from './KYJobListing/reducer'

export const rootReducer = combineReducers({
  animeGangRedux,
  shoppingLists,
  shoppingCart4Redux,
  jasonYbReduxShoppingList,
  pair3Redux,
  shoppingListsSKZK,
  yxwp_store,
  pair2,
  marcusFEMentor,
  shoppingListsCYYZ,
  tipCalculatorApp,
  kyJobListing,
})
const middlewares = [thunk]
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)))

export default store
