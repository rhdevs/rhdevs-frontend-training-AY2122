import { Reducer } from 'redux'
import { ActionTypes, SHOPPING_LIST_ACTIONS, ShoppingListItem } from './types'

//set an initial state for your variable
const initialState = {
  shoppingList: [],
  showModal: false,
}

//declare your variable type
type State = {
  shoppingList: ShoppingListItem[]
  showModal: boolean
}

export const shoppingCart4Redux: Reducer<State, ActionTypes> = (state = initialState, action) => {
  switch (action.type) {
    //this is to update the state if the action type is called
    case SHOPPING_LIST_ACTIONS.ADD_ITEM_TO_LIST: {
      //this returns everything in your store (...state), and updates the 'exampleList' var with the new exampleList indicated in the action
      return { ...state, shoppingList: action.shoppingList }
    }
    case SHOPPING_LIST_ACTIONS.ADD_QUANTITY_IN_LIST: {
      return { ...state, shoppingList: action.shoppingList }
    }
    case SHOPPING_LIST_ACTIONS.REMOVE_QUANTITY_IN_LIST: {
      return { ...state, shoppingList: action.shoppingList }
    }
    case SHOPPING_LIST_ACTIONS.REMOVE_ITEM_FROM_LIST: {
      return { ...state, shoppingList: action.shoppingList }
    }
    case SHOPPING_LIST_ACTIONS.SHOW_ADD_ITEM_MODAL: {
      return { ...state, showModal: action.showModal }
    }
    case SHOPPING_LIST_ACTIONS.HIDE_ADD_ITEM_MODAL: {
      return { ...state, showModal: action.showModal }
    }
    default:
      return state
  }
}
