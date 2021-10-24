import { Reducer } from 'redux'
import { ActionTypes, ITEM_ACTIONS, Item } from './types'

//set an initial state for your variable
const initialState = {
  itemList: [{ key: 1, name: 'test', quantity: 0 }],
}

//declare your variable type
type State = {
  itemList: Item[]
}

export const pair3Redux: Reducer<State, ActionTypes> = (state = initialState, action) => {
  switch (action.type) {
    //this is to update the state if the action type is called
    case ITEM_ACTIONS.INCREASE_ITEM_QUANTITY: {
      //this returns everything in your store (...state), and updates the 'exampleList' var with the new exampleList indicated in the action
      return { ...state, itemList: action.itemList }
    }
    case ITEM_ACTIONS.DECREASE_ITEM_QUANTITY: {
      //this returns everything in your store (...state), and updates the 'exampleList' var with the new exampleList indicated in the action
      return { ...state, itemList: action.itemList }
    }
    case ITEM_ACTIONS.REMOVE_ITEM_FROM_LIST: {
      //this returns everything in your store (...state), and updates the 'exampleList' var with the new exampleList indicated in the action
      return { ...state, itemList: action.itemList }
    }
    case ITEM_ACTIONS.ADD_ITEM_TO_LIST: {
      //this returns everything in your store (...state), and updates the 'exampleList' var with the new exampleList indicated in the action
      return { ...state, itemList: action.itemList }
    }
    default:
      return state
  }
}
