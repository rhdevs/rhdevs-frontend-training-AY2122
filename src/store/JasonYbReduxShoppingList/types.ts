/** Types */
//create your own type!
export type ShoppingItem = {
  key: number
  index: number
  itemName: string
  quantity: number
}

/** Actions' types */
export enum SHOPPING_LIST_ACTIONS {
  //follow naming convention <enum name>.<enum item name>
  SET_ITEM_LIST = 'SHOPPING_LIST_ACTIONS.SET_ITEM_LIST',
  INCREMENT_KEY_COUNT = 'SHOPPING_LIST_ACTIONS.INCREMENT_KEY_COUNT',
  INCREMENT_INDEX_COUNT = 'SHOPPING_LIST_ACTIONS.INCREMENT_INDEX_COUNT',
}

/** Actions */
type SetItemList = {
  type: typeof SHOPPING_LIST_ACTIONS.SET_ITEM_LIST
  itemList: ShoppingItem[]
}

type IncrementKeyCount = {
  type: typeof SHOPPING_LIST_ACTIONS.INCREMENT_KEY_COUNT
  keyCount: number
}

type IncrementIndexCount = {
  type: typeof SHOPPING_LIST_ACTIONS.INCREMENT_INDEX_COUNT
  indexCount: number
}

export type ActionTypes = SetItemList
