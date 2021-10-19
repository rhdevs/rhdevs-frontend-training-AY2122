import { PropertySafetyTwoTone } from '@ant-design/icons'
import { Reducer } from 'redux'
import { ActionTypes, SHOPPING_LIST_ACTIONS, ExampleType, ShoppingItem } from './types'

//set an initial state for your variable
// check whether export is allowed here
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
  ]
}

//declare your variable type
type State = {
  itemList: ShoppingItem[],
}

export const shoppingLists: Reducer<State, ActionTypes> = (state = initialState, action) => {
  switch (action.type) {
    //this is to update the state if the action type is called
    case SHOPPING_LIST_ACTIONS.SET_EXAMPLE_LIST: {
      //this returns everything in your store (...state), and updates the 'exampleList' var with the new exampleList indicated in the action
      return { ...state, exampleList: action.exampleList }
    }
    case SHOPPING_LIST_ACTIONS.ADD_ITEM_QUANTITY: {
      return { ...state, newList: action.newList }
    }
    default:
      return state
  }
}
