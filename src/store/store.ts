import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

//import { shoppingLists } from './shoppingLists/reducer'
import { AnimeGangRedux } from './AnimeGangRedux/reducer'

export const rootReducer = combineReducers({
  AnimeGangRedux,
})
const middlewares = [thunk]
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)))

export default store
