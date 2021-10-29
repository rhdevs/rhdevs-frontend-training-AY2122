import { Reducer } from 'redux'
import { ActionTypes, Item, SHOPPING_LIST_ACTIONS_CYYZ } from './types'

//set an initial state for your variable
const initialState = {
  foodList: [{ name: 'Egg', amount: 1 }],
  othersList: [{ name: 'Cat', amount: 1 }],
  isMenuVisible: false,
}

//declare your variable type
type State = {
  foodList: Item[]
  othersList: Item[]
  isMenuVisible: boolean
}

export const shoppingListsCYYZ: Reducer<State, ActionTypes> = (state = initialState, action) => {
  switch (action.type) {
    //this is to update the state if the action type is called
    case SHOPPING_LIST_ACTIONS_CYYZ.SET_FOOD_LIST: {
      //this returns everything in your store (...state), and updates the 'exampleList' var with the new exampleList indicated in the action
      return { ...state, foodList: action.update }
    }
    case SHOPPING_LIST_ACTIONS_CYYZ.SET_OTHERS_LIST: {
      return { ...state, othersList: action.update }
    }
    case SHOPPING_LIST_ACTIONS_CYYZ.SET_MENU_VISIBLE: {
      return { ...state, isMenuVisible: action.update }
    }
    case SHOPPING_LIST_ACTIONS_CYYZ.ADD_FOOD_AMOUNT: {
      return { ...state, foodList: action.update }
    }
    case SHOPPING_LIST_ACTIONS_CYYZ.MINUS_FOOD_AMOUNT: {
      return { ...state, foodList: action.update }
    }
    case SHOPPING_LIST_ACTIONS_CYYZ.DELETE_FOOD_ITEM: {
      return { ...state, foodList: action.update }
    }
    case SHOPPING_LIST_ACTIONS_CYYZ.ADD_OTHERS_AMOUNT: {
      return { ...state, othersList: action.update }
    }
    case SHOPPING_LIST_ACTIONS_CYYZ.MINUS_OTHERS_AMOUNT: {
      return { ...state, othersList: action.update }
    }
    case SHOPPING_LIST_ACTIONS_CYYZ.DELETE_OTHERS_ITEM: {
      return { ...state, othersList: action.update }
    }
    default:
      return state
  }
}
