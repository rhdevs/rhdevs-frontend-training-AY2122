import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { shoppingLists } from './shoppingLists/reducer'
import { shoppingListsSKZK } from './skzk/reducer'
import { shoppingListsCYYZ } from './shoppingListsCYYZ/reducer'

export const rootReducer = combineReducers({
  shoppingLists,
  shoppingListsSKZK,
  shoppingListsCYYZ,
})
const middlewares = [thunk]
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)))

export default store
