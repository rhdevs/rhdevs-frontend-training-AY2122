import { Reducer } from 'redux'
import { ActionTypes, SHOPPING_LIST_ACTIONS, ShoppingListEntry } from './types'

//set an initial state for your variable
const initialState: State = {
  itemList: [
    {
      key: 1,
      itemQuantity: 3,
      itemName: 'Apple',
    },
    {
      key: 2,
      itemQuantity: 4,
      itemName: 'Orange',
    },
    {
      key: 3,
      itemQuantity: 4,
      itemName: 'Banana',
    },
  ],
  indexOfItem: 4,
}

//declare your variable type
type State = {
  itemList: ShoppingListEntry[]
  indexOfItem: number
}

export const yxwp_store: Reducer<State, ActionTypes> = (state = initialState, action) => {
  switch (action.type) {
    //this is to update the state if the action type is called
    case SHOPPING_LIST_ACTIONS.SET_SHOPPING_LIST: {
      //this returns everything in your store (...state), and updates the 'exampleList' var with the new exampleList indicated in the action
      return { ...state, itemList: action.itemList }
    }
    case SHOPPING_LIST_ACTIONS.ADD_SHOPPING_ITEM: {
      return { ...state, indexOfItem: action.indexOfItem, itemList: action.itemList }
    }
    case SHOPPING_LIST_ACTIONS.REMOVE_SHOPPING_ITEM: {
      return { ...state, indexOfItem: action.indexOfItem }
    }
    case SHOPPING_LIST_ACTIONS.INCREASE_QUANTITY: {
      return { ...state, itemList: action.itemList }
    }
    case SHOPPING_LIST_ACTIONS.DECREASE_QUANTITY: {
      return { ...state, itemList: action.itemList }
    }
    default:
      return state
  }
}
