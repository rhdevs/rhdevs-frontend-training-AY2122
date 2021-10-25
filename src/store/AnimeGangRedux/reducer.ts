import { Reducer } from 'react'
import { ActionTypes, SHOPPING_LIST_ACTIONS, ShoppingListItem } from './types'

//set an initial state for your variable
const initialState = {
  shoppingList: [{ key: 1, ItemName: 'hello', ItemCount: 1 }],
  showAddItem: false,
}

//declare your variable type
type State = {
  shoppingList: ShoppingListItem[]
  showAddItem: boolean
}

export const AnimeGangRedux: Reducer<State, ActionTypes> = (state = initialState, action) => {
  switch (action.type) {
    //this is to update the state if the action type is called
    case SHOPPING_LIST_ACTIONS.ADD_ITEM_TO_LIST: {
      //this returns everything in your store (...state), and updates the 'exampleList' var with the new exampleList indicated in the action
      return { ...state, shoppingList: action.shoppingList }
    }
    case SHOPPING_LIST_ACTIONS.ADD_QUANTITY_TO_ITEM: {
      //this returns everything in your store (...state), and updates the 'exampleList' var with the new exampleList indicated in the action
      return { ...state, shoppingList: action.shoppingList }
    }
    case SHOPPING_LIST_ACTIONS.DECREASE_QUANTITY_TO_ITEM: {
      //this returns everything in your store (...state), and updates the 'exampleList' var with the new exampleList indicated in the action
      return { ...state, shoppingList: action.shoppingList }
    }
    case SHOPPING_LIST_ACTIONS.REMOVE_ITEM_FROM_LIST: {
      //this returns everything in your store (...state), and updates the 'exampleList' var with the new exampleList indicated in the action
      return { ...state, shoppingList: action.shoppingList }
    }
    case SHOPPING_LIST_ACTIONS.SHOW_ADD_ITEM_INPUT: {
      //this returns everything in your store (...state), and updates the 'exampleList' var with the new exampleList indicated in the action
      return { ...state, shoppingList: action.showAddItem }
    }
    case SHOPPING_LIST_ACTIONS.HIDE_ADD_ITEM_INPUT: {
      //this returns everything in your store (...state), and updates the 'exampleList' var with the new exampleList indicated in the action
      return { ...state, shoppingList: action.shoppingList }
    }
    default:
      return state
  }
}
