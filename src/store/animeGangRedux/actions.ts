import { Dispatch, GetState } from '../types'
import { ActionTypes, ANIME_GANG_ACTIONS, ShoppingListItem } from './types'

export const AddItemToList = (newItem: ShoppingListItem) => (dispatch: Dispatch<ActionTypes>, getState: GetState) => {
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
export const AddQuantityToItem = (index: number) => (dispatch: Dispatch<ActionTypes>, getState: GetState) => {
  const { shoppingList } = getState().animeGangRedux
  shoppingList[index].Quantity += 1
  dispatch({
    type: ANIME_GANG_ACTIONS.ADD_QUANTITY_TO_ITEM,
    shoppingList: shoppingList,
  })
}
export const DecreaseQuantityToItem = (index: number) => (dispatch: Dispatch<ActionTypes>, getState: GetState) => {
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
export const RemoveItemFromList = (index: number) => (dispatch: Dispatch<ActionTypes>, getState: GetState) => {
  const { shoppingList } = getState().animeGangRedux
  const newList = []
  for (let i = 0; i < shoppingList.length; i += 1) {
    if (i != index) {
      newList.push(shoppingList[i])
    }
  }
  dispatch({
    type: ANIME_GANG_ACTIONS.REMOVE_ITEM_FROM_LIST,
    shoppingList: newList,
  })
}
export const ShowAddItemInput = () => (dispatch: Dispatch<ActionTypes>) => {
  const newbool = true
  dispatch({
    type: ANIME_GANG_ACTIONS.SHOW_ADD_ITEM_INPUT,
    showAddItem: newbool,
  })
}
export const HideAddItemInput = () => (dispatch: Dispatch<ActionTypes>) => {
  const newbool = false
  dispatch({
    type: ANIME_GANG_ACTIONS.HIDE_ADD_ITEM_INPUT,
    showAddItem: newbool,
  })
}
export const AddItemKey = () => (dispatch: Dispatch<ActionTypes>, getState: GetState) => {
  const { itemKey } = getState().animeGangRedux
  const newKey = itemKey + 1
  dispatch({
    type: ANIME_GANG_ACTIONS.ADD_ITEM_KEY,
    itemKey: newKey, // if newList is undefined, use exampleList
  })
}
