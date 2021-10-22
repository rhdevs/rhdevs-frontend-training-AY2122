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
  SET_EXAMPLE_LIST = 'SHOPPING_LIST_ACTIONS.SET_EXAMPLE_LIST',
}

/** Actions */
export type SetExampleList = {
  type: typeof SHOPPING_LIST_ACTIONS.SET_EXAMPLE_LIST
  exampleList: ListEntry[] //state name : state type
}

export type ActionTypes = SetExampleList
