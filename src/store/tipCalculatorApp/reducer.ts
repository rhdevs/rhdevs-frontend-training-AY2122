import { Reducer } from 'redux'
import { ActionTypes, example, EXAMPLE_ACTIONS } from './types'

//set an initial state for your variable
export const initialState: State = {
  itemList: [
    {
      key: 1,
      index: 1,
      quantity: 365,
      itemName: 'potato',
    },
    {
      key: 2,
      index: 2,
      quantity: 20,
      itemName: 'tomato',
    },
    {
      key: 3,
      index: 3,
      quantity: 60,
      itemName: 'oregano',
    },
  ],
  keyCount: 3,
  indexCount: 3,
}

//declare your variable type
type State = {
  itemList: example[]
  keyCount: number
  indexCount: number
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
