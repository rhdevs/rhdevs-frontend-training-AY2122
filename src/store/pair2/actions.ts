import { Dispatch, GetState } from '../types'
import { ActionTypes, SHOPPING_LIST_ACTIONS, ListEntry } from './types'

export const addItemToList = (newEntry: ListEntry) => (dispatch: Dispatch<ActionTypes>, getState: GetState) => {
  const { nextid, entryList } = getState().pair2
  newEntry.id = nextid
  const newList: ListEntry[] = newEntry.itemName ? [newEntry, ...entryList] : entryList
  dispatch({
    type: SHOPPING_LIST_ACTIONS.ADD_ITEM,
    nextid: newEntry.itemName ? nextid + 1 : nextid,
    entryList: newList,
  })
}

export const incListItemQuantity = (id: number) => (dispatch: Dispatch<ActionTypes>, getState: GetState) => {
  const { entryList } = getState().pair2
  const newList: ListEntry[] = entryList

  const listItem = newList.find((item) => item.id === id)
  listItem && ++listItem.quantity

  dispatch({
    type: SHOPPING_LIST_ACTIONS.SET_ENTRY_LIST,
    entryList: newList,
  })
}

export const decListItemQuantity = (id: number) => (dispatch: Dispatch<ActionTypes>, getState: GetState) => {
  const { entryList } = getState().pair2
  const newList: ListEntry[] = entryList

  const listItem = newList.find((item) => item.id === id)
  listItem && listItem.quantity > 1 && --listItem.quantity

  dispatch({
    type: SHOPPING_LIST_ACTIONS.SET_ENTRY_LIST,
    entryList: newList,
  })
}

export const deleteListItem = (id: number) => (dispatch: Dispatch<ActionTypes>, getState: GetState) => {
  const { entryList } = getState().pair2
  const newList = entryList.filter((item) => item.id !== id)
  dispatch({
    type: SHOPPING_LIST_ACTIONS.SET_ENTRY_LIST,
    entryList: newList,
  })
}
