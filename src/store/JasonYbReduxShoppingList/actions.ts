import { Dispatch, GetState } from '../types'
import { ActionTypes, SHOPPING_LIST_ACTIONS, ShoppingItem } from './types'

export const AddItemQuantity =
  (itemToChange: ShoppingItem) => async (dispatch: Dispatch<ActionTypes>, getState: GetState) => {
    const { itemList } = getState().jasonYbReduxShoppingList
    const updatedList = itemList.map((item) =>
      item.index === itemToChange.index ? { ...item, quantity: item.quantity + 1 } : item,
    )
    dispatch({
      type: SHOPPING_LIST_ACTIONS.SET_ITEM_LIST,
      itemList: updatedList,
    })
  }

export const ReduceItemQuantity =
  (itemToChange: ShoppingItem) => async (dispatch: Dispatch<ActionTypes>, getState: GetState) => {
    const { itemList } = getState().jasonYbReduxShoppingList
    const updatedList = itemList.map((item) =>
      item.index === itemToChange.index ? { ...item, quantity: item.quantity - 1 } : item,
    )
    dispatch({
      type: SHOPPING_LIST_ACTIONS.SET_ITEM_LIST,
      itemList: updatedList,
    })
  }

export const DeleteItem =
  (itemToDelete: ShoppingItem) => async (dispatch: Dispatch<ActionTypes>, getState: GetState) => {
    const { itemList } = getState().jasonYbReduxShoppingList
    const updatedList = itemList.filter((item) => item.index !== itemToDelete.index)
    dispatch({
      type: SHOPPING_LIST_ACTIONS.SET_ITEM_LIST,
      itemList: updatedList,
    })
  }

export const IncrementKeyAndIndexCount = () => async (dispatch: Dispatch<ActionTypes>, getState: GetState) => {
  const { keyCount, indexCount } = getState().jasonYbReduxShoppingList
  const newKeyCount = keyCount + 1
  const newIndexCount = indexCount + 1
  dispatch({
    type: SHOPPING_LIST_ACTIONS.SET_KEY_AND_INDEX_COUNT,
    keyCount: newKeyCount,
    indexCount: newIndexCount,
  })
}

export const AddItem = (newItemName: string) => async (dispatch: Dispatch<ActionTypes>, getState: GetState) => {
  dispatch(IncrementKeyAndIndexCount())
  const { itemList, keyCount, indexCount } = getState().jasonYbReduxShoppingList
  const newItem: ShoppingItem = {
    key: keyCount,
    index: indexCount,
    quantity: 1,
    itemName: newItemName,
  }
  const updatedList = [...itemList, newItem]
  dispatch({
    type: SHOPPING_LIST_ACTIONS.SET_ITEM_LIST,
    itemList: updatedList,
  })
}
