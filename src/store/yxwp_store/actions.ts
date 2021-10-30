import { Dispatch, GetState } from '../types'
import { ActionTypes, ShoppingListEntry, SHOPPING_LIST_ACTIONS } from './types'

export const addItem = (newItem: ShoppingListEntry) => (dispatch: Dispatch<ActionTypes>, getState: GetState) => {
  const { itemList, indexOfItem } = getState().yxwp_store
  newItem.key = indexOfItem
  const newList: ShoppingListEntry[] = newItem.itemName ? [newItem, ...itemList] : itemList
  dispatch({
    type: SHOPPING_LIST_ACTIONS.ADD_SHOPPING_ITEM,
    indexOfItem: newItem.itemName ? indexOfItem + 1 : indexOfItem,
    itemList: newList,
  })
}

export const increaseQuantity = (itemToChangeKey: number) => (dispatch: Dispatch<ActionTypes>, getState: GetState) => {
  const { itemList } = getState().yxwp_store
  const newList = itemList.map((item) =>
    item.key === itemToChangeKey ? { ...item, itemQuantity: item.itemQuantity + 1 } : item,
  )
  dispatch({
    type: SHOPPING_LIST_ACTIONS.SET_SHOPPING_LIST,
    itemList: newList,
  })
}

export const decreaseQuantity = (itemToChangeKey: number) => (dispatch: Dispatch<ActionTypes>, getState: GetState) => {
  const { itemList } = getState().yxwp_store
  const newList = itemList.map((item) =>
    item.key === itemToChangeKey
      ? { ...item, itemQuantity: item.itemQuantity > 1 ? item.itemQuantity - 1 : item.itemQuantity }
      : item,
  )
  dispatch({
    type: SHOPPING_LIST_ACTIONS.SET_SHOPPING_LIST,
    itemList: newList,
  })
}

export const deleteItem = (key: number) => (dispatch: Dispatch<ActionTypes>, getState: GetState) => {
  const { itemList } = getState().yxwp_store
  const newList = itemList.filter((item) => item.key !== key)
  dispatch({
    type: SHOPPING_LIST_ACTIONS.SET_SHOPPING_LIST,
    itemList: newList,
  })
}
