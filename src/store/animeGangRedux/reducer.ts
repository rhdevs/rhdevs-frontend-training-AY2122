import { Reducer } from 'redux'
import { ActionTypes, ANIME_GANG_ACTIONS, ShoppingListItem } from './types'

const initialState = {
  shoppingList: [],
  showAddItem: false,
  itemKey: 0,
}

type State = {
  shoppingList: ShoppingListItem[]
  showAddItem: boolean
  itemKey: number
}

export const animeGangRedux: Reducer<State, ActionTypes> = (state = initialState, action) => {
  switch (action.type) {
    case ANIME_GANG_ACTIONS.ADD_ITEM_TO_LIST: {
      return { ...state, shoppingList: action.shoppingList }
    }
    case ANIME_GANG_ACTIONS.ADD_QUANTITY_TO_ITEM: {
      return { ...state, shoppingList: action.shoppingList }
    }
    case ANIME_GANG_ACTIONS.DECREASE_QUANTITY_TO_ITEM: {
      return { ...state, shoppingList: action.shoppingList }
    }
    case ANIME_GANG_ACTIONS.REMOVE_ITEM_FROM_LIST: {
      return { ...state, shoppingList: action.shoppingList }
    }
    case ANIME_GANG_ACTIONS.SHOW_ADD_ITEM_INPUT: {
      return { ...state, showAddItem: action.showAddItem }
    }
    case ANIME_GANG_ACTIONS.HIDE_ADD_ITEM_INPUT: {
      return { ...state, showAddItem: action.showAddItem }
    }
    case ANIME_GANG_ACTIONS.ADD_ITEM_KEY: {
      return { ...state, itemKey: action.itemKey }
    }
    default:
      return state
  }
}
