import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { shoppingLists } from './shoppingLists/reducer'
<<<<<<< HEAD
import { shoppingListsSKZK } from './skzk/reducer'
import { shoppingListsCYYZ } from './shoppingListsCYYZ/reducer'

export const rootReducer = combineReducers({
  shoppingLists,
  shoppingListsSKZK,
  shoppingListsCYYZ,
=======
import { shoppingCart4Redux } from './shoppingCart4Redux/reducer'
import { animeGangRedux } from './animeGangRedux/reducer'
import { jasonYbReduxShoppingList } from './JasonYbReduxShoppingList/reducer'
import { pair2 } from './pair2/reducer'
import { pair3Redux } from './Pair3redux/reducer'
import { shoppingListsCYYZ } from './shoppingListsCYYZ/reducer'
import { shoppingListsSKZK } from './skzk/reducer'

export const rootReducer = combineReducers({
  animeGangRedux,
  shoppingLists,
  shoppingCart4Redux,
  jasonYbReduxShoppingList,
  pair3Redux,
  shoppingListsSKZK,
  shoppingListsCYYZ,
  pair2,
>>>>>>> 603f6c96d8b7cef6cc63e31961818a202afdcc42
})
const middlewares = [thunk]
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)))

export default store
