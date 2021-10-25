import { Reducer } from 'react'
import { ActionTypes, SHOPPING_LIST_ACTIONS, ShoppingListItem } from './types'

//set an initial state for your variable
const initialState: State = {
  shoppingList: [
    {
      key: 0,
      ItemName: 'bread',
      ItemCount: 1,
    },
  ],
  // showAddItem: false,
}

//declare your variable type
type State = {
  shoppingList: ShoppingListItem[]
  // showAddItem: boolean
}

export const animeGangRedux: Reducer<State, ActionTypes> = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    //this is to update the state if the action type is called
    // case SHOPPING_LIST_ACTIONS.ADD_ITEM_TO_LIST: {
    //   //this returns everything in your store (...state), and updates the 'exampleList' var with the new exampleList indicated in the action
    //   return { ...state, shoppingList: action.shoppingList }
    // }
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
<<<<<<< HEAD:src/store/animeGangRedux/reducer.ts
    // case SHOPPING_LIST_ACTIONS.SHOW_ADD_ITEM_INPUT: {
    //   //this returns everything in your store (...state), and updates the 'exampleList' var with the new exampleList indicated in the action
    //   return { ...state, showAddItem: action.showAddItem }
    // }
    // case SHOPPING_LIST_ACTIONS.HIDE_ADD_ITEM_INPUT: {
    //   //this returns everything in your store (...state), and updates the 'exampleList' var with the new exampleList indicated in the action
    //   return { ...state, showAddItem: action.showAddItem }
    // }
=======
    case SHOPPING_LIST_ACTIONS.SHOW_ADD_ITEM_INPUT: {
      //this returns everything in your store (...state), and updates the 'exampleList' var with the new exampleList indicated in the action
      return { ...state, shoppingList: action.showAddItem }
    }
    case SHOPPING_LIST_ACTIONS.HIDE_ADD_ITEM_INPUT: {
      //this returns everything in your store (...state), and updates the 'exampleList' var with the new exampleList indicated in the action
      return { ...state, shoppingList: action.shoppingList }
    }
>>>>>>> 8d958a43cc1d422d77bdadcde430f0dc978604f7:src/store/AnimeGangRedux/reducer.ts
    default:
      return state
  }
}
