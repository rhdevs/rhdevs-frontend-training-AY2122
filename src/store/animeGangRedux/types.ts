export type ShoppingListItem = {
  key: number
  ItemName: string
  ItemCount: number
}

export enum ANIME_GANG_ACTIONS {
  ADD_ITEM_TO_LIST = 'ANIME_GANG_ACTIONS.ADD_ITEM_TO_LIST',
  ADD_QUANTITY_TO_ITEM = 'ANIME_GANG_ACTIONS.ADD_QUANTITY_TO_ITEM',
  DECREASE_QUANTITY_TO_ITEM = 'ANIME_GANG_ACTIONS.DECREASE_QUANTITY_TO_ITEM',
  REMOVE_ITEM_FROM_LIST = 'ANIME_GANG_ACTIONS.REMOVE_ITEM_FROM_LIST',
  HIDE_ADD_ITEM_INPUT = 'ANIME_GANG_ACTIONS.HIDE_ADD_ITEM_INPUT',
  SHOW_ADD_ITEM_INPUT = 'ANIME_GANG_ACTIONS.SHOW_ADD_ITEM_INPUT',
}

type AddItemToList = {
  type: typeof ANIME_GANG_ACTIONS.ADD_ITEM_TO_LIST
  shoppingList: ShoppingListItem[]
}

type AddQuantityToItem = {
  type: typeof ANIME_GANG_ACTIONS.ADD_QUANTITY_TO_ITEM
  shoppingList: ShoppingListItem[]
}
type DecreaseQuantityToItem = {
  type: typeof ANIME_GANG_ACTIONS.DECREASE_QUANTITY_TO_ITEM
  shoppingList: ShoppingListItem[]
}
type RemoveItemFromList = {
  type: typeof ANIME_GANG_ACTIONS.REMOVE_ITEM_FROM_LIST
  shoppingList: ShoppingListItem[]
}
type ShowAddItemInput = {
  type: typeof ANIME_GANG_ACTIONS.SHOW_ADD_ITEM_INPUT
  showAddItem: boolean
}
type HideAddItemInput = {
  type: typeof ANIME_GANG_ACTIONS.HIDE_ADD_ITEM_INPUT
  showAddItem: boolean
}

export type ActionTypes =
  | AddItemToList
  | AddQuantityToItem
  | DecreaseQuantityToItem
  | RemoveItemFromList
  | ShowAddItemInput
  | HideAddItemInput
