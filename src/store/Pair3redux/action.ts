import { Dispatch, GetState } from '../types'
import { ActionTypes, ITEM_ACTIONS, Item } from './types'

//set my 'exampleList' state with my argument 'newList'
//to call this in your component or page, wrap with dispatch
//eg dispatch(mockActionSetMyExampleList(theNewList))
export const IncreaseItemQuantity = () => async (dispatch: Dispatch<ActionTypes>, getState: GetState) => {
  //you can also get the 'exampleList' state here
  const { quantity } = getState().Pair3redux
  dispatch({
    type: ITEM_ACTIONS.INCREASE_ITEM_QUANTITY,
    quantity: quantity + 1,
  })
}

export const DecreaseItemQuantity = () => async (dispatch: Dispatch<ActionTypes>, getState: GetState) => {
  //you can also get the 'exampleList' state here
  const { quantity } = getState().Pair3redux
  dispatch({
    type: ITEM_ACTIONS.DECREASE_ITEM_QUANTITY,
    quantity: quantity - 1,
  })
}
