import { Dispatch, GetState } from '../types'
import { ActionTypes, SHOPPING_LIST_ACTIONS, ListEntry } from './types'

//set my 'exampleList' state with my argument 'newList'
//to call this in your component or page, wrap with dispatch
//eg dispatch(mockActionSetMyExampleList(theNewList))
export const pair2SetList = (newList: ListEntry[]) => (dispatch: Dispatch<ActionTypes>, getState: GetState) => {
  //you can also get the 'exampleList' state here
  const { exampleList } = getState().shoppingLists
  dispatch({
    type: SHOPPING_LIST_ACTIONS.SET_EXAMPLE_LIST,
    exampleList: newList ?? exampleList, // if newList is undefined, use exampleList
  })
}
