import { Dispatch, GetState } from '../types'
import { ActionTypes, SHOPPING_LIST_ACTIONS, ListEntry } from './types'

export const pair2SetList = (newList: ListEntry[]) => (dispatch: Dispatch<ActionTypes>, getState: GetState) => {
  const { entryList } = getState().pair2
  dispatch({
    type: SHOPPING_LIST_ACTIONS.SET_ENTRY_LIST,
    entryList: newList ?? entryList,
  })
}

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

export const incListItemQuantity =
  (id: number, list: ListEntry[]) => (dispatch: Dispatch<ActionTypes>, getState: GetState) => {
    const { entryList } = getState().pair2
    const newList = list
    newList.forEach((item) => item.id === id && ++item.quantity)
    dispatch({
      type: SHOPPING_LIST_ACTIONS.SET_ENTRY_LIST,
      entryList: newList ?? entryList,
    })
  }

export const decListItemQuantity =
  (id: number, list: ListEntry[]) => (dispatch: Dispatch<ActionTypes>, getState: GetState) => {
    const { entryList } = getState().pair2
    const newList = list
    newList.forEach((item) => item.id === id && item.quantity > 1 && --item.quantity)
    dispatch({
      type: SHOPPING_LIST_ACTIONS.SET_ENTRY_LIST,
      entryList: newList ?? entryList,
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
