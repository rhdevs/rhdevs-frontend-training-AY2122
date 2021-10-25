import { ChangeEvent } from 'react'
import { Dispatch, GetState } from '../types'
import { ActionTypes, SHOPPING_LIST_ACTIONS, ShoppingItem } from './types'

//set my 'exampleList' state with my argument 'newList'
//to call this in your component or page, wrap with dispatch
//eg dispatch(mockActionSetMyExampleList(theNewList))

export const AddItemQuantity =
  (itemToChange: ShoppingItem) => async (dispatch: Dispatch<ActionTypes>, getState: GetState) => {
    const { itemList } = getState().JasonYbReduxShoppingList
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
    const { itemList } = getState().JasonYbReduxShoppingList
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
    const { itemList } = getState().JasonYbReduxShoppingList
    const updatedList = itemList.filter((item) => item.index !== itemToDelete.index)
    dispatch({
      type: SHOPPING_LIST_ACTIONS.SET_ITEM_LIST,
      itemList: updatedList,
    })
  }

const IncrementKeyAndIndexCount = () => async (dispatch: Dispatch<ActionTypes>, getState: GetState) => {
  const { keyCount, indexCount } = getState().JasonYbReduxShoppingList
  dispatch({
    type: SHOPPING_LIST_ACTIONS.INCREMENT_KEY_AND_INDEX_COUNT,
    keyCount: keyCount + 1,
    indexCount: indexCount + 1,
  })
}

export const HandleNewitemToBeAdded = (e: ChangeEvent<HTMLInputElement>) => async (dispatch: Dispatch<ActionTypes>) => {
  dispatch({
    type: SHOPPING_LIST_ACTIONS.SET_NEW_ITEM_TO_BE_ADDED,
    itemToBeAdded: e.target.value,
  })
}

export const AddItem = () => async (dispatch: Dispatch<ActionTypes>, getState: GetState) => {
  IncrementKeyAndIndexCount()
  const { itemList, keyCount, indexCount, newItemName } = getState().JasonYbReduxShoppingList
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
