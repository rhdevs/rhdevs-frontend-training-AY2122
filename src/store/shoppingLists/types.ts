/** Types */
//create your own type!
export type ShoppingItem = {
  key: number,
  index: number,
  itemName: string,
  quantity: number
}


export type ExampleType = {
  varName: string //(variable name) : (its type)
  numName: number
}

/** Actions' types */
export enum SHOPPING_LIST_ACTIONS {
  //follow naming convention <enum name>.<enum item name>
  SET_EXAMPLE_LIST = 'SHOPPING_LIST_ACTIONS.SET_EXAMPLE_LIST',
}

/** Actions */
type SetExampleList = {
  type: typeof SHOPPING_LIST_ACTIONS.SET_EXAMPLE_LIST
  exampleList: ExampleType[] //state name : state type
}

export type ActionTypes = SetExampleList
