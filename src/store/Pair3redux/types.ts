/** Types */
//create your own type!
export type Item = {
  key: number
  name: string
  quantity: number
}

/** Actions' types */
export enum ITEM_ACTIONS {
  INCREASE_ITEM_QUANTITY = 'ITEM_ACTIONS_.INCREASE_ITEM_QUANTITY',
  DECREASE_ITEM_QUANTITY = 'ITEM_ACTIONS_.DECREASE_ITEM_QUANTITY',
  ADD_ITEM_TO_LIST = 'ITEM_ACTIONS_.ADD_ITEM_TO_LIST',
  REMOVE_ITEM_FROM_LIST = 'ITEM_ACTIONS_.REMOVE_ITEM_FROM_LIST',
}

/** Actions */
type IncreaseItemQuantity = {
  type: typeof ITEM_ACTIONS.INCREASE_ITEM_QUANTITY
  itemList: Item[]
}

type DecreaseItemQuantity = {
  type: typeof ITEM_ACTIONS.DECREASE_ITEM_QUANTITY
  itemList: Item[]
}

type AddItemToList = {
  type: typeof ITEM_ACTIONS.ADD_ITEM_TO_LIST
  itemList: Item[]
}

type RemoveItemFromList = {
  type: typeof ITEM_ACTIONS.REMOVE_ITEM_FROM_LIST
  itemList: Item[]
}

export type ActionTypes = IncreaseItemQuantity | DecreaseItemQuantity | AddItemToList | RemoveItemFromList
