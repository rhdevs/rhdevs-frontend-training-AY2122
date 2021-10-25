import { Dispatch, GetState } from '../types'
import { ActionTypes, SHOPPING_LIST_ACTIONS, ExampleType } from './types'

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

export const INCREASEITEMQUANTITY = (newList: ExampleType[]) => (dispatch: Dispatch<ActionTypes>, getState: GetState) => {
  const { } = getState().shoppingLists
  dispatch({

  })
}

export const DECREASEITEMQUANTITY = (newList: ExampleType[]) => (dispatch: Dispatch<ActionTypes>, getState: GetState) => {
  const { } = getState().shoppingLists
  dispatch({

  })
}

export const DELETEITEM = (newList: ExampleType[]) => (dispatch: Dispatch<ActionTypes>, getState: GetState) => {
  const { } = getState().shoppingLists
  dispatch({

  })
}

export const ADDITEM = (newList: ExampleType[]) => (dispatch: Dispatch<ActionTypes>, getState: GetState) => {
  const { } = getState().shoppingLists
  dispatch({

  })
}
