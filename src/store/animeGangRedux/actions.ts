import { Dispatch, GetState } from '../types'
import { ActionTypes, ANIME_GANG_ACTIONS, ShoppingListItem } from './types'

export const addItemToList = (newItem: ShoppingListItem) => (dispatch: Dispatch<ActionTypes>, getState: GetState) => {
  const { shoppingList } = getState().animeGangRedux
  const newList = []
  for (let i = 0; i < shoppingList.length; i += 1) {
    newList.push(shoppingList[i])
  }
  newList.push(newItem)
  dispatch({
    type: ANIME_GANG_ACTIONS.ADD_ITEM_TO_LIST,
    shoppingList: newList,
  })
}
export const addQuantityToItem = (index: number) => (dispatch: Dispatch<ActionTypes>, getState: GetState) => {
  const { shoppingList } = getState().animeGangRedux
  shoppingList[index].Quantity += 1
  dispatch({
    type: ANIME_GANG_ACTIONS.ADD_QUANTITY_TO_ITEM,
    shoppingList: shoppingList,
  })
}
export const decreaseQuantityToItem = (index: number) => (dispatch: Dispatch<ActionTypes>, getState: GetState) => {
  const { shoppingList } = getState().animeGangRedux
  const itemCount = shoppingList[index].Quantity
  if (itemCount > 1) {
    shoppingList[index].Quantity -= 1
  }
  dispatch({
    type: ANIME_GANG_ACTIONS.DECREASE_QUANTITY_TO_ITEM,
    shoppingList: shoppingList,
  })
}
export const removeItemFromList = (index: number) => (dispatch: Dispatch<ActionTypes>, getState: GetState) => {
  const { shoppingList } = getState().animeGangRedux
  const newList = []
  for (let i = 0; i < shoppingList.length; i += 1) {
    if (i !== index) {
      newList.push(shoppingList[i])
    }
  }
  dispatch({
    type: ANIME_GANG_ACTIONS.REMOVE_ITEM_FROM_LIST,
    shoppingList: newList,
  })
}
export const setShowAddItemInput = (newbool: boolean) => (dispatch: Dispatch<ActionTypes>) => {
  dispatch({
    type: ANIME_GANG_ACTIONS.SHOW_ADD_ITEM_INPUT,
    showAddItem: newbool,
  })
}
export const addItemKey = () => (dispatch: Dispatch<ActionTypes>, getState: GetState) => {
  const { itemKey } = getState().animeGangRedux
  const newKey = itemKey + 1
  dispatch({
    type: ANIME_GANG_ACTIONS.ADD_ITEM_KEY,
    itemKey: newKey,
  })
}
