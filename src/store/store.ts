import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { shoppingLists } from './shoppingLists/reducer'
import { JasonYbReduxShoppingList } from './JasonYbReduxShoppingList/reducer'
import { shoppingListsSKZK } from './skzk/reducer'
import { yxwp_store } from './yxwp_store/reducer'

export const rootReducer = combineReducers({
  shoppingLists,
  JasonYbReduxShoppingList,
  shoppingListsSKZK,
  yxwp_store,
})
const middlewares = [thunk]
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)))

export default store
