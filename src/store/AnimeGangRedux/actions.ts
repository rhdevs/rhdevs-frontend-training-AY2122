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
export const AddQuantityToItem = (index: number) => (dispatch: Dispatch<ActionTypes>, getState: GetState) => {
  //you can also get the 'exampleList' state here
  const { shoppingList } = getState().AnimeGangRedux
  shoppingList[index].itemCount += 1
  dispatch({
    type: SHOPPING_LIST_ACTIONS.ADD_QUANTITY_TO_ITEM,
    shoppingList: shoppingList, // if newList is undefined, use exampleList
  })
}
export const DecreaseQuantityToItem = (index: number) => (dispatch: Dispatch<ActionTypes>, getState: GetState) => {
  //you can also get the 'exampleList' state here
  const { shoppingList } = getState().AnimeGangRedux
  const itemCount = shoppingList[index].itemCount
  if (itemCount > 1) {
    shoppingList[index].itemCount -= 1
  }
  dispatch({
    type: SHOPPING_LIST_ACTIONS.DECREASE_QUANTITY_TO_ITEM,
    shoppingList: shoppingList, // if newList is undefined, use exampleList
  })
}
export const RemoveItemFromList = (index: number) => (dispatch: Dispatch<ActionTypes>, getState: GetState) => {
  //you can also get the 'exampleList' state here
  const { shoppingList } = getState().AnimeGangRedux
  shoppingList.splice(index, 1)
  dispatch({
    type: SHOPPING_LIST_ACTIONS.REMOVE_ITEM_FROM_LIST,
    shoppingList: shoppingList, // if newList is undefined, use exampleList
  })
}
export const ShowAddItemInput = () => (dispatch: Dispatch<ActionTypes>, getState: GetState) => {
  //you can also get the 'exampleList' state here
  dispatch({
    type: SHOPPING_LIST_ACTIONS.SHOW_ADD_ITEM_INPUT,
    showAddItem: true, // if newList is undefined, use exampleList
  })
}
export const HideAddItemInput = () => (dispatch: Dispatch<ActionTypes>, getState: GetState) => {
  //you can also get the 'exampleList' state here
  dispatch({
    type: SHOPPING_LIST_ACTIONS.HIDE_ADD_ITEM_INPUT,
    showAddItem: false, // if newList is undefined, use exampleList
  })
}
