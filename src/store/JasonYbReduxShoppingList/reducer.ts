import { PropertySafetyTwoTone } from '@ant-design/icons'
import { Reducer } from 'redux'
import { ActionTypes, SHOPPING_LIST_ACTIONS, ShoppingItem } from './types'

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
  ],
  keyCount: 3,
  indexCount: 3,
  newItemName: '',
}

//declare your variable type
type State = {
  itemList: ShoppingItem[]
  keyCount: number
  indexCount: number
  newItemName: string
}

export const JasonYbReduxShoppingList: Reducer<State, ActionTypes> = (state = initialState, action) => {
  switch (action.type) {
    //this is to update the state if the action type is called
    case SHOPPING_LIST_ACTIONS.SET_ITEM_LIST: {
      return {
        ...state,
        itemList: action.itemList,
      }
    }
    case SHOPPING_LIST_ACTIONS.INCREMENT_KEY_AND_INDEX_COUNT: {
      return {
        ...state,
        keyCount: action.keyCount,
        indexCount: action.indexCount,
      }
    }

    default:
      return state
  }
}
