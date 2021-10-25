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

export const AddItemQuantity = (item: CartItem) => async (dispatch: Dispatch<ActionTypes>) => {
  dispatch({
    type: SHOPPING_LIST_ACTIONS.ADD_ITEM_QUANTITY,
    update: item,
  })
}

export const MinusItemQuantity = (item: CartItem) => async (dispatch: Dispatch<ActionTypes>) => {
  dispatch({
    type: SHOPPING_LIST_ACTIONS.MINUS_ITEM_QUANTITY,
    update: item,
  })
}

export const DeleteCartItem = (item: CartItem) => async (dispatch: Dispatch<ActionTypes>) => {
  dispatch({
    type: SHOPPING_LIST_ACTIONS.DELETE_CART_ITEM,
    update: item,
  })
}
