import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { shoppingLists } from './shoppingLists/reducer'
<<<<<<< HEAD
import { pair3Redux } from './Pair3redux/reducer'

export const rootReducer = combineReducers({
  shoppingLists,
  pair3Redux,
=======
import { shoppingListsCYYZ } from './shoppingListsCYYZ/reducer'
import { JasonYbReduxShoppingList } from './JasonYbReduxShoppingList/reducer'
import { shoppingListsSKZK } from './skzk/reducer'

export const rootReducer = combineReducers({
  shoppingLists,
  JasonYbReduxShoppingList,
  shoppingListsSKZK,
  shoppingListsCYYZ,
>>>>>>> main
})
const middlewares = [thunk]
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)))

export default store
