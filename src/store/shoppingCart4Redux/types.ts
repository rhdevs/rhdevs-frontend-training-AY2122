/** Types */
export type ShoppingListItem = {
  key: number
  shoppingListItemName: string
  itemCount: number
}

/** Actions' types */
export enum SHOPPING_LIST_ACTIONS {
  SET_EXAMPLE_LIST = 'SHOPPING_LIST_ACTIONS.SET_EXAMPLE_LIST',
  ADD_ITEM_TO_LIST = 'SHOPPING_LIST_ACTIONS.ADD_ITEM_TO_LIST',
  ADD_QUANTITY_IN_LIST = 'SHOPPING_LIST_ACTIONS.ADD_QUANTITY_IN_LIST',
  REMOVE_QUANTITY_IN_LIST = 'SHOPPING_LIST_ACTIONS.REMOVE_QUANTITY_IN_LIST',
  REMOVE_ITEM_FROM_LIST = 'SHOPPING_LIST_ACTIONS.REMOVE_ITEM_FROM_LIST',
  SHOW_ADD_ITEM_MODAL = 'SHOPPING_LIST_ACTIONS.SHOW_ADD_ITEM_MODAL',
  HIDE_ADD_ITEM_MODAL = 'SHOPPING_LIST_ACTIONS.HIDE_ADD_ITEM_MODAL',
}

/** Actions */
type AddItemToList = {
  type: typeof SHOPPING_LIST_ACTIONS.ADD_ITEM_TO_LIST
  shoppingList: ShoppingListItem[]
}

type AddQuantityInList = {
  type: typeof SHOPPING_LIST_ACTIONS.ADD_QUANTITY_IN_LIST
  shoppingList: ShoppingListItem[]
}

type RemoveQuantityInList = {
  type: typeof SHOPPING_LIST_ACTIONS.REMOVE_QUANTITY_IN_LIST
  shoppingList: ShoppingListItem[]
}

type RemoveItemFromList = {
  type: typeof SHOPPING_LIST_ACTIONS.REMOVE_ITEM_FROM_LIST
  shoppingList: ShoppingListItem[]
}

type ShowAddItemModal = {
  type: typeof SHOPPING_LIST_ACTIONS.SHOW_ADD_ITEM_MODAL
  showModal: boolean
}

type HideAddItemModal = {
  type: typeof SHOPPING_LIST_ACTIONS.HIDE_ADD_ITEM_MODAL
  showModal: boolean
}

export type ActionTypes =
  | AddItemToList
  | AddQuantityInList
  | RemoveQuantityInList
  | RemoveItemFromList
  | ShowAddItemModal
  | HideAddItemModal
