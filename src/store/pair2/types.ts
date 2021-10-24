/** Types */
//create your own type!
export type ListEntry = {
  id: number
  quantity: number
  itemName: string
}

/** Actions' types */
export enum SHOPPING_LIST_ACTIONS {
  //follow naming convention <enum name>.<enum item name>
  SET_ENTRY_LIST = 'SHOPPING_LIST_ACTIONS.SET_ENTRY_LIST',
  ADD_ITEM = 'SHOPPING_LIST_ACTIONS.ADD_ITEM',
}

/** Actions */
export type SetEntryList = {
  type: typeof SHOPPING_LIST_ACTIONS.SET_ENTRY_LIST
  entryList: ListEntry[] //state name : state type
}

export type AddItem = {
  type: typeof SHOPPING_LIST_ACTIONS.ADD_ITEM
  nextid: number
  entryList: ListEntry[] //state name : state type
}

export type ActionTypes = SetEntryList | AddItem
