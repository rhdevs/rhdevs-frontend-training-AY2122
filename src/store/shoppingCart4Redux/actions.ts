import { Dispatch, GetState } from '../types'
import { ActionTypes, SHOPPING_LIST_ACTIONS, ShoppingListItem } from './types'

export const AddItemToList = (newItem: ShoppingListItem) => (dispatch: Dispatch<ActionTypes>, getState: GetState) => {
  const { shoppingList } = getState().shoppingCart4Redux
  shoppingList.push(newItem)
  dispatch({
    type: SHOPPING_LIST_ACTIONS.ADD_ITEM_TO_LIST,
    shoppingList: shoppingList,
  })
}

export const AddQuantityInList = (index: number) => (dispatch: Dispatch<ActionTypes>, getState: GetState) => {
  const { shoppingList } = getState().shoppingCart4Redux
  shoppingList[index].itemCount = shoppingList[index].itemCount + 1
  dispatch({
    type: SHOPPING_LIST_ACTIONS.ADD_QUANTITY_IN_LIST,
    shoppingList: shoppingList,
  })
}

export const RemoveQuantityInList = (index: number) => (dispatch: Dispatch<ActionTypes>, getState: GetState) => {
  const { shoppingList } = getState().shoppingCart4Redux
  const itemCount = shoppingList[index].itemCount
  if (itemCount > 1) {
    shoppingList[index].itemCount = itemCount - 1
  }
  dispatch({
    type: SHOPPING_LIST_ACTIONS.REMOVE_QUANTITY_IN_LIST,
    shoppingList: shoppingList,
  })
}

export const RemoveItemFromList = (index: number) => (dispatch: Dispatch<ActionTypes>, getState: GetState) => {
  const { shoppingList } = getState().shoppingCart4Redux
  shoppingList.splice(index, 1)
  dispatch({
    type: SHOPPING_LIST_ACTIONS.REMOVE_ITEM_FROM_LIST,
    shoppingList: shoppingList,
  })
}

export const ShowAddItemModal = () => (dispatch: Dispatch<ActionTypes>) => {
  dispatch({
    type: SHOPPING_LIST_ACTIONS.SHOW_ADD_ITEM_MODAL,
    showModal: true,
  })
}

export const HideAddItemModal = () => (dispatch: Dispatch<ActionTypes>) => {
  dispatch({
    type: SHOPPING_LIST_ACTIONS.HIDE_ADD_ITEM_MODAL,
    showModal: false,
  })
}
