import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { shoppingLists } from './shoppingLists/reducer'
import { animeGangRedux } from './animeGangRedux/reducer'
import { shoppingListsCYYZ } from './shoppingListsCYYZ/reducer'
import { JasonYbReduxShoppingList } from './JasonYbReduxShoppingList/reducer'
import { shoppingListsSKZK } from './skzk/reducer'

export const rootReducer = combineReducers({
  animeGangRedux,
  shoppingLists,
  JasonYbReduxShoppingList,
  shoppingListsSKZK,
  shoppingListsCYYZ,
})
const middlewares = [thunk]
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)))

export default store
