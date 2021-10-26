import { Dispatch, GetState } from '../types'
import { ActionTypes, SHOPPING_LIST_ACTIONS, CartItem } from './types'

//set my 'exampleList' state with my argument 'newList'
//to call this in your component or page, wrap with dispatch
//eg dispatch(mockActionSetMyExampleList(theNewList))
export const SetShoppingCart = (newCart: CartItem[]) => async (dispatch: Dispatch<ActionTypes>, getState: GetState) => {
  const { shoppingCart } = getState().shoppingListsSKZK
  dispatch({
    type: SHOPPING_LIST_ACTIONS.SET_SHOPPING_CART,
    shoppingCart: newCart ?? shoppingCart,
  })
}

export const AddItemQuantity = (item: CartItem) => async (dispatch: Dispatch<ActionTypes>, getState: GetState) => {
  const { shoppingCart } = getState().shoppingListsSKZK
  const newCart = shoppingCart.map((e) => (e.index === item.index ? { ...e, quantity: e.quantity + 1 } : e))
  dispatch({
    type: SHOPPING_LIST_ACTIONS.ADD_ITEM_QUANTITY,
    shoppingCart: newCart ?? shoppingCart,
  })
}

export const MinusItemQuantity = (item: CartItem) => async (dispatch: Dispatch<ActionTypes>, getState: GetState) => {
  const { shoppingCart } = getState().shoppingListsSKZK
  const newCart = shoppingCart.map((e) =>
    e.index === item.index && e.quantity >= 1 ? { ...e, quantity: item.quantity - 1 } : e,
  )
  dispatch({
    type: SHOPPING_LIST_ACTIONS.MINUS_ITEM_QUANTITY,
    shoppingCart: newCart ?? shoppingCart,
  })
}

export const DeleteCartItem = (item: CartItem) => async (dispatch: Dispatch<ActionTypes>, getState: GetState) => {
  const { shoppingCart } = getState().shoppingListsSKZK
  const newCart = shoppingCart.filter((e) => e.index !== item.index)
  dispatch({
    type: SHOPPING_LIST_ACTIONS.DELETE_CART_ITEM,
    shoppingCart: newCart ?? shoppingCart,
  })
}
