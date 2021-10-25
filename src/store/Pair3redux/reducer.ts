import { Reducer } from 'redux'
import { ActionTypes, ITEM_ACTIONS, Item } from './types'

const initialState = {
  itemList: [],
}

type State = {
  itemList: Item[]
}

export const pair3Redux: Reducer<State, ActionTypes> = (state = initialState, action) => {
  switch (action.type) {
    case ITEM_ACTIONS.INCREASE_ITEM_QUANTITY: {
      return { ...state, itemList: action.itemList }
    }
    case ITEM_ACTIONS.DECREASE_ITEM_QUANTITY: {
      return { ...state, itemList: action.itemList }
    }
    case ITEM_ACTIONS.REMOVE_ITEM_FROM_LIST: {
      return { ...state, itemList: action.itemList }
    }
    case ITEM_ACTIONS.ADD_ITEM_TO_LIST: {
      return { ...state, itemList: action.itemList }
    }
    default:
      return state
  }
}
