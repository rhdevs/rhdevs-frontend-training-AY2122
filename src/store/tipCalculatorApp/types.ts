/** Types */
export type example = {
  key: number
  index: number
  itemName: string
  quantity: number
}

/** Actions' types */
export enum EXAMPLE_ACTIONS {
  SET_ITEM_LIST = 'SHOPPING_LIST_ACTIONS.SET_ITEM_LIST',
  SET_KEY_AND_INDEX_COUNT = 'SHOPPING_LIST_ACTIONS.SET_KEY_AND_INDEX_COUNT',
  SET_NEW_ITEM_TO_BE_ADDED = 'SHOPPING_LIST_ACTIONS.SET_NEW_ITEM_TO_BE_ADDED',
}

/** Actions */
type SetItemList = {
  type: typeof EXAMPLE_ACTIONS.SET_ITEM_LIST
  itemList: example[]
}

export type ActionTypes = SetItemList
