import { Dispatch, GetState } from '../types'
import { ActionTypes, ITEM_ACTIONS, Item } from './types'

//set my 'exampleList' state with my argument 'newList'
//to call this in your component or page, wrap with dispatch
//eg dispatch(mockActionSetMyExampleList(theNewList))
export const IncreaseItemQuantity = (index: number) => async (dispatch: Dispatch<ActionTypes>, getState: GetState) => {
  //you can also get the 'exampleList' state here
  const { itemList } = getState().pair3Redux
  itemList[index].quantity = itemList[index].quantity + 1
  dispatch({
    type: ITEM_ACTIONS.INCREASE_ITEM_QUANTITY,
    itemList: itemList,
  })
}

export const DecreaseItemQuantity = (index: number) => async (dispatch: Dispatch<ActionTypes>, getState: GetState) => {
  //you can also get the 'exampleList' state here
  const { itemList } = getState().pair3Redux
  itemList[index].quantity = itemList[index].quantity - 1
  dispatch({
    type: ITEM_ACTIONS.DECREASE_ITEM_QUANTITY,
    itemList: itemList,
  })
}
