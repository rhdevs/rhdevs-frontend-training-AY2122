import { Reducer } from 'redux'
import { ActionTypes, SHOPPING_LIST_ACTIONS, ExampleType } from './types'

//set an initial state for your variable
const initialState = {
  exampleList: [],
}

//declare your variable type
type State = {
  exampleList: ExampleType[]
}

export const shoppingLists: Reducer<State, ActionTypes> = (state = initialState, action) => {
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
