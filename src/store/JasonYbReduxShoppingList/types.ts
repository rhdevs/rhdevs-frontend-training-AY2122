/** Types */
export type ShoppingItem = {
  key: number
  index: number
  itemName: string
  quantity: number
}

/** Actions' types */
export enum SHOPPING_LIST_ACTIONS {
  SET_ITEM_LIST = 'SHOPPING_LIST_ACTIONS.SET_ITEM_LIST',
  SET_KEY_AND_INDEX_COUNT = 'SHOPPING_LIST_ACTIONS.SET_KEY_AND_INDEX_COUNT',
  SET_NEW_ITEM_TO_BE_ADDED = 'SHOPPING_LIST_ACTIONS.SET_NEW_ITEM_TO_BE_ADDED',
}

/** Actions */
type SetItemList = {
  type: typeof SHOPPING_LIST_ACTIONS.SET_ITEM_LIST
  itemList: ShoppingItem[]
}

type SetKeyAndIndexCount = {
  type: typeof SHOPPING_LIST_ACTIONS.SET_KEY_AND_INDEX_COUNT
  keyCount: number
  indexCount: number
}

type SetNewItemToBeAdded = {
  type: typeof SHOPPING_LIST_ACTIONS.SET_NEW_ITEM_TO_BE_ADDED
  itemToBeAdded: string
}

export type ActionTypes = SetItemList | SetKeyAndIndexCount | SetNewItemToBeAdded
