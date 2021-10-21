import { Reducer } from 'redux'
import { ActionTypes, ITEM_ACTIONS, Item } from './types'

//set an initial state for your variable
const initialState = {
  name: 'test',
  quantity: 0,
  price: 0,
  total: 0,
}

//declare your variable type
type State = {
  name: string
  quantity: number
  price: number
  total: number
}

export const Pair3redux: Reducer<State, ActionTypes> = (state = initialState, action) => {
  switch (action.type) {
    //this is to update the state if the action type is called
    case ITEM_ACTIONS.INCREASE_ITEM_QUANTITY: {
      //this returns everything in your store (...state), and updates the 'exampleList' var with the new exampleList indicated in the action
      return { ...state, quantity: action.quantity }
    }
    case ITEM_ACTIONS.DECREASE_ITEM_QUANTITY: {
      //this returns everything in your store (...state), and updates the 'exampleList' var with the new exampleList indicated in the action
      return { ...state, quantity: action.quantity }
    }
    default:
      return state
  }
}
