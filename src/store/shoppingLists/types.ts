/** Types */
//create your own type!
export type ExampleType = {
  varName: string //(variable name) : (its type)
  numName: number
}

export type ShoppingListEntry = {
  key: number
  itemQuantity: number
  itemName: string
}

/** Actions' types */
export enum SHOPPING_LIST_ACTIONS {
  //follow naming convention <enum name>.<enum item name>
  SET_EXAMPLE_LIST = 'SHOPPING_LIST_ACTIONS.SET_EXAMPLE_LIST',
  // ADD_SHOPPING_ITEM = 
  // REMOVE_SHOPPING_ITEM =
  // INCREASE_QUANTITY =
  // DECREASE_QUANTITY =
}

/** Actions */
type SetExampleList = {
  type: typeof SHOPPING_LIST_ACTIONS.SET_EXAMPLE_LIST
  exampleList: ExampleType[] //state name : state type
}

export type ActionTypes = SetExampleList
