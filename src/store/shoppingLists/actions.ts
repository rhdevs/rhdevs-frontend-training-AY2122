import { Dispatch, GetState } from '../types'
import { ActionTypes, SHOPPING_LIST_ACTIONS, ExampleType, CartItem } from './types'

//set my 'exampleList' state with my argument 'newList'
//to call this in your component or page, wrap with dispatch
//eg dispatch(mockActionSetMyExampleList(theNewList))
export const mockActionSetMyExampleList =
  (newList: ExampleType[]) => (dispatch: Dispatch<ActionTypes>, getState: GetState) => {
    //you can also get the 'exampleList' state here
    const { exampleList } = getState().shoppingLists
    dispatch({
      type: SHOPPING_LIST_ACTIONS.SET_EXAMPLE_LIST,
      exampleList: newList ?? exampleList, // if newList is undefined, use exampleList
    })
  }

export const SetShoppingCart = (newCart: CartItem[]) => async (dispatch: Dispatch<ActionTypes>, getState: GetState) => {
  const { shoppingCart } = getState().shoppingLists
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
