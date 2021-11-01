import { Reducer } from 'redux'
import { ActionTypes, SHOPPING_LIST_ACTIONS, ListEntry } from './types'

//set an initial state for your variable
const initialState = {
  nextid: 4,
  entryList: [
    {
      id: 0,
      quantity: 2,
      itemName: 'broccoli',
    },
    {
      id: 1,
      quantity: 6,
      itemName: 'nutella',
    },
    {
      id: 2,
      quantity: 4,
      itemName: 'grapes',
    },
    {
      id: 3,
      quantity: 6,
      itemName: 'oranges',
    },
  ],
}

//declare your variable type
type State = {
  nextid: number
  entryList: ListEntry[]
}

export const pair2: Reducer<State, ActionTypes> = (state = initialState, action) => {
  switch (action.type) {
    case SHOPPING_LIST_ACTIONS.SET_ENTRY_LIST: {
      return { ...state, entryList: action.entryList }
    }
    case SHOPPING_LIST_ACTIONS.ADD_ITEM: {
      return { ...state, nextid: action.nextid, entryList: action.entryList }
    }
    default:
      return state
  }
}
