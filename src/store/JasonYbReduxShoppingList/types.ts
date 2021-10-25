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
  INCREMENT_KEY_AND_INDEX_COUNT = 'SHOPPING_LIST_ACTIONS.INCREMENT_KEY_COUNT',
}

/** Actions */
type SetItemList = {
  type: typeof SHOPPING_LIST_ACTIONS.SET_ITEM_LIST
  itemList: ShoppingItem[]
}

type IncrementKeyAndIndexCount = {
  type: typeof SHOPPING_LIST_ACTIONS.INCREMENT_KEY_AND_INDEX_COUNT
  keyCount: number
  indexCount: number
}

export type ActionTypes = SetItemList | IncrementKeyAndIndexCount
