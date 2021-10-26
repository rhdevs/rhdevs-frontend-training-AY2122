import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { shoppingLists } from './shoppingLists/reducer'
import { jasonYbReduxShoppingList } from './JasonYbReduxShoppingList/reducer'
import { shoppingListsSKZK } from './skzk/reducer'

export const rootReducer = combineReducers({
  shoppingLists,
  jasonYbReduxShoppingList,
  shoppingListsSKZK,
})
const middlewares = [thunk]
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)))

export default store
