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
}

/** Actions */
type SetItemList = {
  type: typeof SHOPPING_LIST_ACTIONS.SET_ITEM_LIST
  itemList: ShoppingItem[]
}

export type ActionTypes = SetItemList
