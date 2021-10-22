import { Reducer } from 'redux'
import { ActionTypes, SHOPPING_LIST_ACTIONS, ListEntry } from './types'

//set an initial state for your variable
const initialState = {
  exampleList: [
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
  exampleList: ListEntry[]
}

export const pair2: Reducer<State, ActionTypes> = (state = initialState, action) => {
  switch (action.type) {
    //this is to update the state if the action type is called
    case SHOPPING_LIST_ACTIONS.SET_EXAMPLE_LIST: {
      //this returns everything in your store (...state), and updates the 'exampleList' var with the new exampleList indicated in the action
      return { ...state, exampleList: action.exampleList }
    }
    default:
      return state
  }
}
