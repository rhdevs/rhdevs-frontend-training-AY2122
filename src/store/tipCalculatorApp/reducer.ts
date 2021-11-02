import { Reducer } from 'redux'
import { ActionTypes, EXAMPLE_ACTIONS } from './types'

//set an initial state for your variable
export const initialState: State = {
  billAmount: 0,
  peopleAmount: 0,
  tipAmount: 0,
  totalAmount: 0,
}

//declare your variable type
type State = {
  billAmount: number
  peopleAmount: number
  tipAmount: number
  totalAmount: number
}

export const tipCalculatorApp: Reducer<State, ActionTypes> = (state = initialState, action) => {
  switch (action.type) {
    //this is to update the state if the action type is called
    case EXAMPLE_ACTIONS.SET_ITEM_LIST: {
      return {
        ...state,
        itemList: action.itemList,
      }
    }
    default:
      return state
  }
}
