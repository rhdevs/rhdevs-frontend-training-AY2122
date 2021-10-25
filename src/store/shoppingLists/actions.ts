import { Dispatch, GetState } from '../types'
import { ActionTypes, SHOPPING_LIST_ACTIONS, ExampleType, ShoppingListEntry } from './types'

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

export const INCREASEITEMQUANTITY = (ItemList: ShoppingListEntry[]) => (dispatch: Dispatch<ActionTypes>, getState: GetState) => {
  const { } = getState().shoppingLists
  dispatch({
    type: SHOPPING_LIST_ACTIONS.INCREASE_QUANTITY,

  })
}

export const DECREASEITEMQUANTITY = (ItemList: ShoppingListEntry[]) => (dispatch: Dispatch<ActionTypes>, getState: GetState) => {
  const { } = getState().shoppingLists
  dispatch({
    type: SHOPPING_LIST_ACTIONS.DECREASE_QUANTITY,

  })
}

export const DELETEITEM = (IndexOfItem: number) => (dispatch: Dispatch<ActionTypes>, getState: GetState) => {
  const { } = getState().shoppingLists
  dispatch({
    type: SHOPPING_LIST_ACTIONS.REMOVE_SHOPPING_ITEM,

  })
}

export const ADDITEM = (IndexOfItem: number) => (dispatch: Dispatch<ActionTypes>, getState: GetState) => {
  const { } = getState().shoppingLists
  dispatch({

  })
}
