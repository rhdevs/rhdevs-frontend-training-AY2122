import { Dispatch, GetState } from '../types'
import { ActionTypes, SHOPPING_LIST_ACTIONS, ShoppingListItem } from './types'

export const AddItemToList = (newItem: ShoppingListItem[]) => (dispatch: Dispatch<ActionTypes>, getState: GetState) => {
  const { shoppingList } = getState().AnimeGangRedux
  shoppingList.push(newItem)
  dispatch({
    type: SHOPPING_LIST_ACTIONS.ADD_ITEM_TO_LIST,
    shoppingList: shoppingList,
  })
}
export const AddQuantityToItem = (index: number) => (dispatch: Dispatch<ActionTypes>, getState: GetState) => {
  const { shoppingList } = getState().AnimeGangRedux
  shoppingList[index].itemCount += 1
  dispatch({
    type: SHOPPING_LIST_ACTIONS.ADD_QUANTITY_TO_ITEM,
    shoppingList: shoppingList,
  })
}
export const DecreaseQuantityToItem = (index: number) => (dispatch: Dispatch<ActionTypes>, getState: GetState) => {
  const { shoppingList } = getState().AnimeGangRedux
  const itemCount = shoppingList[index].itemCount
  if (itemCount > 1) {
    shoppingList[index].itemCount -= 1
  }
  dispatch({
    type: SHOPPING_LIST_ACTIONS.DECREASE_QUANTITY_TO_ITEM,
    shoppingList: shoppingList,
  })
}
export const RemoveItemFromList = (index: number) => (dispatch: Dispatch<ActionTypes>, getState: GetState) => {
  const { shoppingList } = getState().AnimeGangRedux
  shoppingList.splice(index, 1)
  dispatch({
    type: SHOPPING_LIST_ACTIONS.REMOVE_ITEM_FROM_LIST,
    shoppingList: shoppingList,
  })
}
export const ShowAddItemInput = () => (dispatch: Dispatch<ActionTypes>, getState: GetState) => {
  dispatch({
    type: SHOPPING_LIST_ACTIONS.SHOW_ADD_ITEM_INPUT,
    showAddItem: true,
  })
}
export const HideAddItemInput = () => (dispatch: Dispatch<ActionTypes>, getState: GetState) => {
  dispatch({
    type: SHOPPING_LIST_ACTIONS.HIDE_ADD_ITEM_INPUT,
    showAddItem: false,
  })
}
