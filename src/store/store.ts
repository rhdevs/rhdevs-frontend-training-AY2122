import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { shoppingLists } from './shoppingLists/reducer'
import { pair2 } from './pair2/reducer'
import { pair3Redux } from './Pair3redux/reducer'
import { shoppingListsCYYZ } from './shoppingListsCYYZ/reducer'
import { JasonYbReduxShoppingList } from './JasonYbReduxShoppingList/reducer'
import { shoppingListsSKZK } from './skzk/reducer'

export const rootReducer = combineReducers({
  shoppingLists,
  pair3Redux,
  JasonYbReduxShoppingList,
  shoppingListsSKZK,
  shoppingListsCYYZ,
  pair2,
})
const middlewares = [thunk]
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)))

export default store
