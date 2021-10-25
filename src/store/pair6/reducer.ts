import { Reducer } from 'redux'
import { ActionTypes, SHOPPING_LIST_ACTIONS, CartItem } from './types'

//set an initial state for your variable
const initialState = {
  shoppingCart: [
    {
      index: 1,
      itemName: 'deez',
      quantity: 2,
    },
    {
      index: 2,
      itemName: 'nutz',
      quantity: 2,
    },
  ],
}

//declare your variable type
type State = {
  shoppingCart: CartItem[]
}

export const shoppingListsSKZK: Reducer<State, ActionTypes> = (state = initialState, action) => {
  switch (action.type) {
    //this is to update the state if the action type is called
    case SHOPPING_LIST_ACTIONS.SET_SHOPPING_CART: {
      return { ...state, shoppingCart: action.shoppingCart }
    }
    case SHOPPING_LIST_ACTIONS.ADD_ITEM_QUANTITY: {
      const update = state.shoppingCart.map((e) =>
        e.index === action.update.index ? { ...e, quantity: action.update.quantity + 1 } : e,
      )
      return { ...state, shoppingCart: update }
    }
    case SHOPPING_LIST_ACTIONS.MINUS_ITEM_QUANTITY: {
      const update = state.shoppingCart.map((e) =>
        e.index === action.update.index && e.quantity >= 1 ? { ...e, quantity: action.update.quantity - 1 } : e,
      )
      return { ...state, shoppingCart: update }
    }
    case SHOPPING_LIST_ACTIONS.DELETE_CART_ITEM: {
      const update = state.shoppingCart.filter((e) => e.index !== action.update.index)
      return { ...state, shoppingCart: update }
    }
    default:
      return state
  }
}
