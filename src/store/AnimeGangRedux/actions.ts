import { Dispatch, GetState } from '../types'
import { ActionTypes, SHOPPING_LIST_ACTIONS, ShoppingListItem } from './types'

//set my 'exampleList' state with my argument 'newList'
//to call this in your component or page, wrap with dispatch
//eg dispatch(mockActionSetMyExampleList(theNewList))
export const AddItemToList = (newItem: ShoppingListItem[]) => (dispatch: Dispatch<ActionTypes>, getState: GetState) => {
  //you can also get the 'exampleList' state here
  const { shoppingList } = getState().AnimeGangRedux
  shoppingList.push(newItem)
  dispatch({
    type: SHOPPING_LIST_ACTIONS.ADD_ITEM_TO_LIST,
    shoppingList: shoppingList, // if newList is undefined, use exampleList
  })
}
